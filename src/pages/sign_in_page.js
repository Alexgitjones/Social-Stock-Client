import React, { useState , useEffect } from 'react';
import Header from '../component/header'
import Footer from '../component/footer'
import axios from 'axios';

export default function Signin() {

    // useEffect(() => {
    //     const storedUser = localStorage.getItem('user');
    //     if (storedUser) {
    //         setUser(JSON.parse(storedUser));
    //     }
    // }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await axios.post('http://localhost:5000/login', {
            email,
            password,
          });
        if(response.data.error){
            setErrorMessage(response.data.error);
        }else{
            setSuccessMessage(response.data.msg);
            setErrorMessage('');
        }
        // // Validate password and confirm password match
        // if (password !== confirmPassword) {
        //     setErrorMessage('Passwords do not match');
        //     return;
        //   }
    
      };
  return (
    <div>
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
                            <a href="#"><button className="google-login-btn">
                                <img src="./assets/images/sign_in_page/google-logo.svg" alt="Google Logo"/> 
                                Continue with Google</button></a>
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
                                <button type="submit" className="btn">Let’s get Started</button>
                              </form>
                              <div className="su-fp-btns">
                                <link to="/pricing-page">
                                <a href="#"><h6 className="sign-up-btn">Need an account? Sign up</h6></a>
                                </link>
                                <a href="#"><h6 className="fp-btn">Forgot password</h6></a>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="divider" />
        </div>
    </div>
    </div>
  )
}
