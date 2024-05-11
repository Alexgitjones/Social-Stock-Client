import React from 'react'
import Textanimation from '../component/textanimation';
import Preloader from '../component/preloader';

export default function Licenseterms({user}) {
  return (
    <div>
        {/* <Preloader /> */}
        <div className="p-container-licence_term">
        <div className="container justify-content-center d-flex flex-column align-items-center">

            <div className="licence">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 d-flex justify-content-between ">
                        <div className="col l-block-1">
                            {/* <h1 className="hdng mob-head">LICENSE</h1> */}
                            <Textanimation text="LICENSE" />
                            <p className="decs">Subject to these Terms and Our policies, We grant you a limited, Personal, commercial,
                                non-exclusive, non-transferable, and revocable license to use Our Services/Products. You may use Our Product(s)
                                for Your Personal and commercial use including for use in websites, videos, and social media and other media. 
                            </p>
                            <p className="decs">You also agree that You will access, and/or use only one User Account, unless expressly permitted by
                                Us, and You will not share access to Your User Account or access information for Your Account with any third
                                party. </p>
                            <p className="decs">Using our Services/Product(s) does not give you the ownership of or any intellectual property rights
                                in Our Services or the Product(s) you access for a fee paid through Our Website. You are prohibited to
                                redistribute or resell the product (s), stock videos and/or photos. We reserve the right to revoke your license
                                to use the product (s) stock video and/or photo at any time, for any reason. </p>
                            <p className="decs">By signing up to any of our subscription plans and using this site www.socialstocks.co, you agree to
                                these license terms.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="divider-lt">
        <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100">
                <div className="col">
                    <hr className="divider" />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
