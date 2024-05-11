import React , {useEffect, useState} from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import { useLocation, useNavigate, redirect , useSearchParams } from 'react-router-dom';
import axios from 'axios';
import * as XLSX from 'xlsx';

export default function Checkvid({user}) {
    let {search} = useLocation();
    const [userID, setUserID] = useState(user.UserID);
    const [pagein, setpagein] = useState(null);
    const [data, setdata] = useState([]);
    const [customdata, setcustomdata] = useState([]);




    useEffect(() => {
        // const data = [
        //     { id: 1, name: 'John', age: 30 },
        //     { id: 2, name: 'Jane', age: 25 },
        //     { id: 3, name: 'Doe', age: 40 }
        //   ];
        // const workbook = XLSX.utils.book_new();
        // const worksheet = XLSX.utils.json_to_sheet(data);
        // XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        // XLSX.writeFile(workbook, `demo.xlsx`);
        // setpagein(41)
    },[])

    const createupload = (page) => {
        // console.log(page)
        const requestData = {
            organisationId: "2",
            page: page,
            searchableContent: "BOTH",
            tags: [],
            useName: true
        };
      
        axios.post('https://api.getclipara.com/search/search', requestData)
        .then(response => {
            const gettotal  = response.data.payload.results.length - 1
            setdata([response.data.payload.results,0,gettotal])
        })
        // .catch(error => {
        //     console.error('Error fetching data:', error);
        // });
    }

    const uploadvide = async (datas,counts,total) => {  
        if(counts !== undefined){
            if(total >= counts){
                const mediatype = datas[counts].name.split('.')[datas[counts].name.split('.').length - 1].toLowerCase();
                if(datas[counts].tagsArray !== null && mediatype !== 'png'){
                    const formData = {
                        userID:userID,
                        makeid:datas[counts].playbackId,
                        // count:counts,
                        title:'https://stream.mux.com/'+datas[counts].playbackId+'/high.mp4',
                        description:datas[counts].tagsArray ? datas[counts].tagsArray.join(","): '',
                    }
                    // var makeoes = customdata
                    // console.log(formData)
                    // setcustomdata([...customdata,formData])
                    // var makecount = counts+1;
                    // setdata([datas,makecount,total])
                    const response = await axios.post(process.env.REACT_APP_VIDEO_SERVER_URL, formData);
                    if(response.data.error){
                        console.log(response.data.error)
                        console.log(makecount+'-vid-'+pagein)
                    }else{
                        console.log(counts+'-vid-'+pagein)
                        var makecount = counts+1;
                        setdata([datas,makecount,total])
                    }
                }else{
                    var makecount = counts+1;
                    setdata([datas,makecount,total])
                }
            }else{
                const pagecount = pagein + 1;
                if(pagecount <= 45){
                    setpagein(pagecount)
                }else{
                    console.log('Completed')
                    // const workbook = XLSX.utils.book_new();
                    // const worksheet = XLSX.utils.json_to_sheet(customdata);
                    // XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
                    // XLSX.writeFile(workbook, `customdata.xlsx`);
                    // console.log(customdata)
                }
            }
        }
    }

    // useEffect(() => {
    //     console.log(customdata)
    // },[customdata])

    useEffect(() => {
        // uploadvide(data[0],data[1],data[2])
    },[data])

    useEffect(() => {
        if(pagein !== null){
            // createupload(pagein)
        }
    },[pagein])

    const generatethumbnail = async (url,id,datas,makecount,total) => {
        const formData = {
            id:id,
            title:url,
        }
        const response = await axios.post('https://social-server-red.vercel.app/phpimg', formData);
        if(response.data.error){
            console.log(response.data.error)
            console.log(makecount+'-thumb-'+pagein)
        }else{
            console.log(makecount+'-'+pagein)
            setdata([datas,makecount,total])
        }
    };

  return (
    <>

    </>
  )
}
