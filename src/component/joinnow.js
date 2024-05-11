import React from 'react'
import Textanimation from '../component/textanimation';
import Imageanimation from '../component/imageanimation';

export default function Joinnow() {
  return (
    <div className="join-now">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <Imageanimation>
                <div className="col jn-block-1">
                    <h6 className="sub-hdng">Join Now</h6>
                    <h1 className="hdng mob-join">Sign up today and see the difference trendy UGC style content can make for your social media presence</h1>
                    <Textanimation text="Sign up today and see the difference   trendy UGC style content can make   for your social media presence" />
                    <a href="#"><button className="sujn-btn mt-4">Sign Up</button></a>
                </div>
                </Imageanimation>
            </div>
        </div>
    </div>
  )
}
