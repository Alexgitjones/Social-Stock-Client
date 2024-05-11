import React, { useState, useEffect } from 'react';
import Header from '../component/header'
import Footer from '../component/footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {ClipLoader } from 'react-spinners'

export default function Userview() {
    const [userdata, setuserdata] = useState([]);
    useEffect(  () => {
        axios
        .get(process.env.REACT_APP_SERVER_URL+'/userview')
        .then(async (res) => {
            setuserdata(res.data.data)
            console.log(res.data.data)
        })
        .catch((err) => console.log(err));
    }, []);

    
  return (
    <div>
    <div className="inner-pages-banner">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <div className="col ipb-block-1">
                    <h1 className="hdng">All User<span>!</span></h1>
                    {/* <h6 className="breadcrumbs">Login to see the Dashboard</h6> */}
                </div>
            </div>
        </div>
    </div>

    <div className="p-container-sign_in">
        <div className="container">
            <div className="form-box">
                <div className="container justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 ">
                        <div className="col fb-block-2">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Payment Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userdata.map((value,key) => {
                                            return(
                                                <tr key={key}>
                                                    <th scope="row">{key}</th>
                                                    <td>{value.Username ? value.Username : 'Unknown User'}</td>
                                                    <td>{value.Email ? value.Email : 'Unknown User'}</td>
                                                    <td>{value.PaymentStatus}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    
                                </tbody>
                            </table>
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
