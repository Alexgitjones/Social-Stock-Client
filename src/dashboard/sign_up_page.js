import React , {useEffect, useState} from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import axios from 'axios';
import { useLocation, useNavigate, redirect } from 'react-router-dom';
import {ClipLoader } from 'react-spinners'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
  } from "react-router-dom";


export default function Signup({login}) {
    let {search} = useLocation();
    const redirect = useNavigate();
    
    useEffect(() => {
        if(search){
            setpriceid(search.split('=')[1])
        }else{
            redirect('/pricing-page')
        }
    },[])
    const [priceid, setpriceid] = useState('');
    const [loader, setloader] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate password and confirm password match
        if (password !== confirmPassword) {
          setErrorMessage('Passwords do not match');
          return;
        }
        setloader(true)
        const response = await axios.post(process.env.REACT_APP_SERVER_URL+'/register', {
            firstName,
            lastName,
            email,
            password,
            priceid,
          });
          if(response.error){
                setErrorMessage('Something Is working ! Please try again.');
                setloader(false)
          }else{
             if(response.data.msg){
                login(response.data.msg)
                setloader(false)
                window.location.href = response.data.msg.url;
              }else{
                setErrorMessage(response.data.error);
                setloader(false)
              }
          }
      };

  return (
    <div>
    <Header />
    <div className="inner-pages-banner">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <div className="col ipb-block-1">
                    <h1 className="hdng">Sign Up</h1>
                    {/* <h6 className="breadcrumbs">UGC Stocks Affiliates</h6> */}
                </div>
            </div>
        </div>
    </div>






    <div className="p-container-sign_up">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="sign-up-form-box">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-center">
                        <div className="col su-fb-block-1">
                            <div className="decs-box">
                                {/* <p className="decs">Earn $10 for every customer you refer to www.Ugcff.co  😍</p>
                                <p className="decs">Your earnings will be paid out to you via bank transfer when you've reached 10 referrals or a total of $100</p> */}
                                <p className="decs">Fill out the form below to get started right away 👇</p>
                            </div>
                            <hr className="divider" />

                            <form className="text-start signup_form" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="InputFirstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="InputFirstName" placeholder="Luke" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputLastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="InputLastName" placeholder="Sky Walker" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputEmail" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="InputEmail" placeholder="LUKE@JEDI.COM" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <div>
                                    <label htmlFor="InputPassword" className="form-label">Password</label>
                                    <p className="pass-text">Minimum 8 characters, ideally more.</p>
                                    </div>
                                    <input type="password" className="form-control" id="InputPassword" placeholder="HUNTER2" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputConfirmPassword" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="InputConfirmPassword" placeholder="HUNTER2" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                </div>
                                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                                <button type="submit" className="suf-btn">
                                    Sign Up
                                    {
                                        loader ? <ClipLoader color="#36d7b7" size="40" /> : '' 
                                    }
                                </button>
                                </form>

                            {/* <form className="text-start signup_form">
                                <div className="mb-3">
                                    <label for="InputFirstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="InputFirstName" placeholder="Luke" required />
                                  </div>
                                  <div className="mb-3">
                                    <label for="InputLastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="InputLastName" placeholder="Sky Walker" required />
                                  </div>
                                <div className="mb-3">
                                  <label for="InputEmail" className="form-label">Email Address</label>
                                  <input type="email" className="form-control" id="InputEmail" placeholder="LUHE@JEDI.COM" required />
                                </div>
                                <div className="mb-3">
                                    <div>
                                        <label for="InputPassword" className="form-label">Password</label>
                                        <p className="pass-text">Minimum 8 characters, ideally more.</p>
                                    </div>
                                  <input type="password" className="form-control" id="InputPassword" placeholder="HUNTER2" required />
                                </div>
                                <div className="mb-3">
                                    <label for="InputConfirmPassword" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="InputConfirmPassword" placeholder="HUNTER2" required />
                                  </div>
                                <button type="submit" className="suf-btn">sign up</button>
                              </form> */}

                        </div>
                    </div>
                </div>
            </div>

            <div className="sign-up-text">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row">
                        <div className="col su-fb-block-2">
                            <p>Already have an account? <Link to="/sign-in">Login</Link></p>
                            {/* <p>Social Stocks Affiliates is powered by <a href="#">Rewardful</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}
