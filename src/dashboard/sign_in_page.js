import React, { useState , useEffect } from 'react';
import Header from '../component/header'
import Footer from '../component/footer'
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { redirect } from "react-router-dom";
import {ClipLoader } from 'react-spinners';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
  } from "react-router-dom";

export default function Signin({login}) {

    const login_dev = useGoogleLogin({
        onSuccess: (codeResponse) => setcheckgoogle(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    const getprofile = (googleuser) => {
        axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleuser.access_token}`, {
            headers: {
                Authorization: `Bearer ${googleuser.access_token}`,
                Accept: 'application/json'
            }
        })
        .then(async (res) => {
            const response = await axios.post(geturl+'/googleregister', res.data);
            login({Email:res.data.email,UserID:response.data.id,UserType:'normal',Username:res.data.given_name,status:response.data.msg,google:'google'});
        })
        .catch((err) => console.log(err));
    }
    const [checkgoogle, setcheckgoogle] = useState('');
    const [email, setEmail] = useState('');
    const [loader, setloader] = useState(false);
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const geturl = process.env.REACT_APP_SERVER_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloader(true)
        const response = await axios.post(geturl+'/login', {
            email,
            password,
        });
        if(response.error){
            setErrorMessage('Something is Wrong ! Please try again');
        }else{
            if(response.data.error){
                setErrorMessage(response.data.error);
            }else{
                login(response.data.msg)
            }
        }
        setloader(false)

      };

      useEffect(() => {
        if(checkgoogle !== ''){
            getprofile(checkgoogle)
        }
    },[checkgoogle])
  return (
    <div>
    <Header />
    <div className="inner-pages-banner">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <div className="col ipb-block-1">
                    <h1 className="hdng">Welcome back<span>!</span></h1>
                    <h6 className="breadcrumbs">Login to see the Dashboard</h6>
                </div>
            </div>
        </div>
    </div>

    <div className="p-container-sign_in">
        <div className="container">
            <div className="form-box">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-center">
                        <div className="col fb-block-1">
                            {/* <button onClick={login_dev}>Sign in with Google 🚀 </button> */}
                            {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessages} /> */}
                            {/* <a href="javascript:void(0)"><button onClick={login_dev} className="google-login-btn">
                                <img src="/assets/images/sign_in_page/google-logo.svg" alt="Google Logo"/> 
                                Continue with Google</button></a> */}
                        </div>
                    </div>
                    <div className="row w-100 ">
                        <div className="col fb-block-2">
                            <form className='signin_form' onSubmit={handleSubmit}>
                                <div className="mb-3">
                                  <label htmlFor="InputEmail1" className="form-label">Email</label>
                                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="InputEmail1" placeholder="Email Address" required />
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="InputPassword" className="form-label">Password</label>
                                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="InputPassword" placeholder="Password" required />
                                </div>
                                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                                <button type="submit" className="btn">Let’s get Started <ClipLoader loading={loader} size="40px" /></button>
                              </form>
                              <div className="su-fp-btns">
                                <Link to="/pricing-page"><h6 className="sign-up-btn">Need an account? Sign up</h6></Link>
                                <a href="#"><h6 className="fp-btn">Forgot password</h6></a>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="divider" />
        </div>
    </div>
    <Footer />
    </div>
  )
}
