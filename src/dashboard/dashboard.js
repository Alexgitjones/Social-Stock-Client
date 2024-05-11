import React, {useEffect, useState} from 'react'
import { Routes, Route, Link, Outlet , useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../component/dashsidebar';
import '../dashstyle.css';

export default function Dashboard({logout, user, login}) {
  const [userauth, setuserauth] = useState(null);
  const redirect = useNavigate();

  async function verifyuser(user){
    try{
      const userverify = await axios.post(process.env.REACT_APP_SERVER_URL+'/verifylogin', {token:user});
      if(userverify.data.msg.PaymentStatus !== 'complete'){
        redirect('/pricing-page')
      }else{
        setuserauth(userverify.data.msg)
      }
    } catch(error){
      redirect('/')
    }
  }
  useEffect( () => {
    verifyuser(user)
  },[])
  return (
    <>
      <div className="side-bar">
        <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
          <div className="row w-100">
            <Sidebar userauth={userauth} logout={logout} login={login} />
            <div className='col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 sb-block-2'>
              <Outlet context={[userauth]} /> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
