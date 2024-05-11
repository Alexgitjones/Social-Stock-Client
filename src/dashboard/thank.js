import React , {useEffect, useState} from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import { useLocation, useNavigate, redirect , useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function Thank({user,login}) {
    let {search} = useLocation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [payfail, setpayfail] = useState(false);


    const handlesession = async (session_id,id) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL+'/transaction', {
            id,
            session_id,
          });
          if(response.data.msg){
            const update_user_status = user;
            update_user_status.status = 'complete';
            login(update_user_status)
            navigate('/dashboard')
          }
    }


    useEffect(() => {
        if(searchParams.get('success')){
            // console.log(user.UserID)
            handlesession(searchParams.get('session_id'),user.UserID)
        }else{
            setpayfail(true)
            navigate('/pricing-page')
        }
    },[])
  return (
    <div>
        {/* <Header /> */}
        <div className="p-container-access_denied">
        <div className="container justify-content-center d-flex flex-column align-items-center">

            <div className="access_denied_box">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 d-flex justify-content-between text-center">
                        <div className="col adb-block-1">
                            <h1 className="hdng">{payfail ? 'Payment Failed' : 'Thank you'}</h1>
                            {/* <p className="decs">A site membership is required to view this page. You can select a payment plan via the link below</p>
                            <a href="#"><button className="select-plan">SELECT PLAN TO GET STARTED</button></a>
                            <h4 className="verify-email-hdng">Already a Member? Just verified your email?</h4>
                            <p className="decs"><a href="#">Sign In Here!</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="divider-pp">
        <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100">
                <div className="col">
                    <hr className="divider" />
                </div>
            </div>
        </div>
    </div>
        <Footer />
    </div>
  )
}
