import React, {useState, useEffect, memo} from 'react'
import axios from 'axios';
import { useLocation, useNavigate, redirect, Link, useOutletContext } from 'react-router-dom';
import { PulseLoader , ClipLoader } from 'react-spinners';
import { motion } from "framer-motion";

export default memo(function Index({user}) {
  const initialusercontent = {favourite:[],invoiceurl:null,video:[],videotag:[]}
  const [userauth] = useOutletContext();
  const [usercontent, setusercontent] = useState([]);
  const [tagword, settagword] = useState([]);
  const [pagination, setpagination] = useState(1);
  const [loader, setloader] = useState(true);
  const [btnloader, setbtnloader] = useState(false);
  const [saveloader, setsaveloader] = useState(false);
  const [search, setsearch] = useState('');
  
  const fetchusercontent = async () => {
    try{
      let response = await axios.get(process.env.REACT_APP_SERVER_URL+"/video/"+userauth.UserID+"/"+pagination);
      if(response.error){
          setusercontent(initialusercontent)
          setloader(false)
          setbtnloader(false)
      }else{
        if(response.data.error){
          setusercontent(initialusercontent)
          setloader(false)
          setbtnloader(false)
        }else{
          setusercontent(response.data)
          setloader(false)
          setbtnloader(false)
        }
      }
    } catch(err){
      
    }
  }

  const handleScroll = (e) => {
      if(document.querySelector('.col-xxl-9') == null){
        return false;
      }
      var makescroll = document.documentElement.scrollTop + window.innerHeight + 2;
      if(makescroll > document.querySelector('.col-xxl-9').clientHeight){
        setpagination(pagination+1)
        window.removeEventListener('scroll', handleScroll);
      }
  };

  useEffect(() => {
        fetchusercontent()
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
  },[userauth]);

  useEffect(() => {
    if(tagword.length == 0){
      fetchusercontent()
      window.addEventListener('scroll', handleScroll);
    }
},[pagination]);

useEffect(() => {
  filtervideo()
},[tagword]);

const filtervideo = () => {
  if(tagword.length !== 0){
    try{
      let response = axios.get(process.env.REACT_APP_SERVER_URL+'/filtertag/',{ params: tagword})
      response.then((response) => {
        if(response.error){
          setbtnloader(false)
          setusercontent(initialusercontent)
        }else{
          setbtnloader(false)
          var customizecontent = { ...usercontent };
          customizecontent.video = response.data.data;
          setusercontent(customizecontent)
        }        
      })
    } catch(error){
      setbtnloader(false)
      setusercontent(initialusercontent)
    }
  }else{
    fetchusercontent()
  }
}

const saveview = async (contentid,userid) => {
  setsaveloader(true)
  try{
    let response = await axios.post(process.env.REACT_APP_SERVER_URL+"/savefav",{
      contentid:contentid,
      userid:userid
    });
    if(response.error){
      alert('Please Referesh there is some problem')
    }else{
      setsaveloader(false)
      fetchusercontent()
    }
  } catch(error){
    alert('Please Referesh there is some problem')
  }
}

  return (
    <div>
        <div className="input-group">
            <input onChange={(e) => setsearch(e.target.value)} type="search" className="form-control" placeholder="wellness" aria-label="Search" aria-describedby="search-addon" />
            <button onClick={() => {search == null || search == '' ? settagword([]) : settagword([search]); setbtnloader(true);} } type="button" className="btn" data-mdb-ripple-init=""> search <ClipLoader loading={btnloader} size="15px" /> </button>
        </div>
        {
          loader ? <PulseLoader color="#fd9d6bbf" cssOverride={{textAlign:'center'}} loading={loader} size="50px" /> :
          <>
            <Videotag usercontent={usercontent} tagword={tagword} settagword={settagword} />
            <Allvideos usercontent={usercontent} saveview={saveview} userauth={userauth} saveloader={saveloader} search={search} />  
          </>
        }
        {
          search == '' && tagword.length == 0 && !loader && usercontent.video.length > 0 ?
          <div style={{textAlign:'center'}}>
            <ClipLoader loading={true} size="100px" />
          </div>
          : ''
        } 
    </div>
  )
});

function Videotag({usercontent,tagword,settagword}){
  const video_tag_animation = {
    hidden: { opacity: 0},
    visible: (custom) => (
      {
        transition: { delay: 0.1 + custom * 0.2 },
        opacity: 1
      }
    )
  };
  return(
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      {
        usercontent.videotag.map((index,key) => {
          return(
            <motion.li animate="visible" initial="hidden" custom={key}  variants={video_tag_animation} key={key} className={tagword.includes(index) ? 'active nav-item' : 'nav-item'} role="presentation">
              <button onClick={() => tagword.includes(index) ? settagword([]) : settagword([index]) } className="nav-link active" id="pills-modest-tab" data-bs-toggle="pill" data-bs-target="#pills-modest" type="button" role="tab" aria-controls="pills-modest" aria-selected="true">
                {index} { tagword.includes(index) ? <img className='ms-1' height={'12'} width={'12'} src="https://cdn-icons-png.flaticon.com/512/665/665939.png" /> : '' }
                </button>
            </motion.li>
          )
        })
      }
    </ul>
  )
}

function Allvideos({usercontent,saveview,userauth,saveloader,search}){
  
  return(
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-modest" role="tabpanel" aria-labelledby="pills-modest-tab" tabIndex="0">
      {usercontent.video.length == 0 && search !== null ? <h1 className="nt-found">Not Found</h1> : ''}
      {
        usercontent.video.map((values,key) => {
          return(
            <div key={key} className="v-box">
              <img className="video_thumb" src={values.imagepath} ></img>
                <div className="hover-buttons">
                  {
                    usercontent.favourite.map((index) => { return index.ContentID }).includes(values.ContentID) ? '' :
                    <button onClick={() => saveview(values.ContentID,userauth.UserID)} className="hb-1">Save to favourite <ClipLoader loading={saveloader} size="15px" /></button>
                  }
                  <button className="hb-2"><Link to={`/single-view?id=${values.ContentID}`}>View</Link></button>
                </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
