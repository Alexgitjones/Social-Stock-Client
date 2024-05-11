import React from 'react'
import Textanimation from '../component/textanimation';
import Preloader from '../component/preloader';

export default function Privacy({user}) {
  return (
    <div>
        {/* <Preloader /> */}
        <div className="p-container-privacy_policy">
            <div className="container justify-content-center d-flex flex-column align-items-center">

                <div className="privacy_policy_content">
                    <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                        <div className="row w-100 d-flex justify-content-between">
                            <div className="col ppc-block-1">
                                {/* <h6 className="sub-hdng">Our policIes</h6> */}
                                <Textanimation text="Our policIes" />
                                <h1 className="hdng">Privacy policy</h1>
                                <div className="hdng-section">
                                    <div className="col-8">
                                        <h1 className="h2-hdng">INTRODUCTION</h1>
                                    </div>
                                    <div className="col-4 text-end d-flex align-items-end justify-content-end">
                                        <p className="last-update-date">Last Updated: 24/01/22</p>
                                    </div>
                                </div>
                                <p className="decs">UGC FF Limited Company acting as www.ugcff.co (“We” or “Us” or “Our”) is
                                    committed to ensure
                                    Your privacy while providing the most unique services (“Services”). In this policy we
                                    refer to You as
                                    “user”, “Customer”, “You”, “Your”. If You want to become a Customer of the Service, You
                                    need to register and
                                    open Your personal account through Our Website. At the time of registration, We ask You
                                    to provide Us with a
                                    certain amount of personal information. Submission of such personal information is
                                    voluntary, but without it
                                    You may not be able to receive Our Services. By providing Your personal information, You
                                    consent to do so
                                    for the purpose of delivering to You the Service. Pursuant to applicable data protection
                                    laws, consider
                                    that: If You live in a country that is a member of the European Economic Area, the way
                                    your data is
                                    processed and the current Privacy Policy shall be governed by the General Data
                                    Protection Regulation or
                                    Regulation [UE] 2016/679("GDPR"). If you live in a country outside the European Economic
                                    Area, collection of
                                    your personal data shall be
                                    governed according to the privacy laws of the State of California, USA.</p>
                                <p className="decs">Our Company is responsible for personal data: Socials Studio Limited
                                    Company, with registered
                                    offices in Unit 1603, 16th Floor, The L. Plaza,
                                    367 – 375 Queen’s Road Central, Sheung Wan, Hong Kong To contact the representative
                                    Socials Studio (Data
                                    Protection Officer), You may send an email to: hello@ugcff.co In order to register and
                                    navigate the
                                    Platform, you need to be older than 16. We may but are not
                                    obligated to use your personal</p>
                                <p className="decs">Information to verify your age and ensure the enforcement of this
                                    restriction. What Does The
                                    Personal Information We Collect Can Include? Personal Information Provided by You: We
                                    collect first name,
                                    username, email address, Country, City, Street Address, ZIP/Postal Code.</p>
                            </div>
                        </div>

                        <div className="row w-100 d-flex justify-content-between">
                            <div className="col ppc-block-2">
                                <h2 className="h2-hdng">How do We use Your personal data?</h2>
                                <p className="decs">We may use personal information data in-house in order:</p>
                                <ol>
                                    <li>To provide and operate the Services</li>
                                    <li>To develop, customize, expand, and improve Our Services</li>
                                    <li>To provide You with customer assistance</li>
                                    <li>To be able to contact You with general or personalized service related notices and
                                        promotional messages/emails</li>
                                    <li>To enhance Our data security and fraud prevention capabilities</li>
                                    <li>To comply with any applicable laws and regulations</li>
                                </ol>
                            </div>
                        </div>

                        <div className="row w-100 d-flex justify-content-between">
                            <div className="col ppc-block-2">
                                <h2 className="h2-hdng">To which extent and to whom does We disclose Your personal data?</h2>
                                <p className="decs">We use personal information collected via Our Services for a variety of
                                    business purposes described below. We process Your personal information for these
                                    purposes in reliance on Our legitimate business interests, in order to enter into or
                                    perform a contract with You, with Your consent, and/or for compliance with Our legal
                                    obligations. We indicate the specific processing grounds We rely on next to each purpose
                                    listed below.</p>
                                <p className="decs">We use the information We collect or receive:<br />
                                    To facilitate account creation and login process.</p>

                                <p className="decs">We use the information You allowed Us to collect to facilitate account
                                    creation and login process for the performance of the contract;</p>
                                <p className="decs">To send administrative information to You.</p>
                                <p className="decs">We may use Your personal information to send You product, service and other
                                    related information and/or information about changes to Our terms, conditions, and
                                    policies.</p>
                                <p className="decs">Fulfill and manage Your purchases.</p>
                                <p className="decs">We may use Your</p>
                                <p className="decs">Information to fulfill and manage Your purchases made through Our Website;
                                </p>
                                <p className="decs">To enforce Our terms, conditions and policies for Business Purposes, Legal
                                    Reasons and Contractual;</p>
                                <p className="decs">To manage User Account.</p>
                                <p className="decs">We may use Your information for the purposes of managing Your account and
                                    keeping it in working order;</p>
                                <p className="decs">To respond to legal requests and prevent harm. If We receive a subpoena or
                                    other legal request, We may need to inspect the data We hold to determine how to
                                    respond. We may disclose aggregate</p>
                                <p className="decs">Information about Users for such legal purposes;</p>
                                <p className="decs">To deliver services to the user. We may use Your information to provide You
                                    with the Services/Products. For other Business Purposes. We may use Your information for
                                    other Business Purposes, such as data analysis, identifying usage trends, determining
                                    the effectiveness of Our promotional campaigns, to evaluate and improve Our Services,
                                    products, marketing and Your experience. We will not use identifiable personal
                                    information without Your consent.</p>
                            </div>
                        </div>

                        <div className="row w-100 d-flex justify-content-between">
                            <div className="col ppc-block-2">
                                <h2 className="h2-hdng">Will Your information be shared with anyone?</h2>
                                <p className="decs">When You create an account with Us You give Your consent that We may process
                                    or share data based on the following legal basis: Legitimate Interests: We may process
                                    Your data when it is reasonably necessary to achieve Our legitimate business interests.
                                    Legal Obligations: if We reasonably suspect that Your Account has been used for an
                                    unauthorized, illegal, or criminal purpose, You give Us express authorization to share
                                    information about You, Your Account, and any of Your transactions with law enforcement.
                                    We may disclose Your information where We are legally required to do so in order to
                                    comply with applicable law, governmental requests, a judicial proceeding, court order,
                                    or legal process, such as in response to a court order or a subpoena (including in
                                    response to public authorities to meet national security or law enforcement
                                    requirements).</p>
                                <p className="decs">Vital Interests: We may disclose Your information where We believe it is
                                    necessary to investigate, prevent, or take action regarding potential violations of Our
                                    policies, suspected fraud, situations involving potential threats to the safety of any
                                    person and illegal activities, or as evidence in litigation in which We are involved.
                                </p>
                            </div>
                        </div>

                        <div className="row w-100 d-flex justify-content-between">
                            <div className="col ppc-block-2">
                                <h2 className="h2-hdng">For How Long Do We Keep Your Information?</h2>
                                <p className="decs">We keep Your information at least for 2 years or otherwise as long as
                                    necessary to fulfill the purposes outlined in this privacy policy unless otherwise
                                    required by law. We will only keep Your personal information for as long as it is
                                    necessary for the purposes set out in this privacy policy, unless a longer retention
                                    period is required or permitted by law (such as tax, accounting or other legal
                                    requirements). When We have no ongoing legitimate business need to process Your personal
                                    information, We will either delete or anonymize it, or, if this is not possible then We
                                    will securely store Your personal information and isolate it from any further processing
                                    until deletion is possible. If You claim Your personal information to be deleted and
                                    Your account with Our Services to be cancelled, We will cancel Your account and
                                    information associated with it to exercise Your right “to be forgotten”.</p>

                            </div>
                        </div>

                        <div className="row w-100 d-flex justify-content-between">
                            <div className="col ppc-block-2">
                                <h2 className="h2-hdng">Where do We store Your data?</h2>
                                <p className="decs">We store Your data on Our servers and We also use third-party storage
                                    providers to keep Your Data. Our data storage providers are contractually committed to
                                    protect and secure your data. Third-Party Service Providers that store or process your
                                    Personal Information are contractually committed to keep it protected and secured, in
                                    accordance with industry standards and regardless of any lesser legal requirements which
                                    may apply in their jurisdiction.</p>

                            </div>
                        </div>

                        <div className="row w-100 d-flex justify-content-between">
                            <div className="col ppc-block-2">
                                <h2 className="h2-hdng">Account Information</h2>
                                <p className="decs">If You would at any time like to review or change the information in Your
                                    account You can log into Your account settings and update Your account or request such
                                    changes by notifying Us at hello@ugcff.co.</p>

                            </div>
                        </div>

                        <div className="row w-100 d-flex justify-content-between">
                            <div className="col ppc-block-2">
                                <h2 className="h2-hdng">Opting out of email marketing</h2>
                                <p className="decs">You can unsubscribe from Our marketing email list at any time by contacting
                                    Us via Our Contact Center by email at hello@socialstocks.co. You will then be removed
                                    from the marketing email list; however, We will still need to send You service-related
                                    emails that are necessary for the administration and use of Your account.</p>

                            </div>
                        </div>

                        <div className="row w-100 d-flex justify-content-between">
                            <div className="col ppc-block-2">
                                <h2 className="h2-hdng">Users Outside of the U.S.</h2>
                                <p className="decs">In order to provide the Services/Products to You, We have the right to
                                    transfer your data to the area or Service provision and process it there. By visiting or
                                    using our Services, you consent to storage of your data on servers located in the
                                    country of Our residence. Specifically, personal data collected in the United Kingdom
                                    (“UK”), Switzerland, and the European Economic Area (“EEA”) may be transferred and
                                    stored outside those areas. California Residents Privacy Rights If You are located in
                                    California this provision applies to You. California Civil Code Section 1798.83 permits
                                    Our Customers who are California residents to request and obtain from us, once a year
                                    and free of charge, information about categories of personal information (if any) We
                                    disclosed to third parties for direct marketing purposes and the names and addresses of
                                    all third parties with which We shared personal information in the immediately preceding
                                    calendar year. If You are a California resident and would like to make such a request,
                                    please submit Your request in writing to Us using the contact information provided
                                    below. If You are under 18 years of age, reside in California, and have a registered
                                    account with Our Website, You have the right to request removal of unwanted data that
                                    You publicly post on the Services. To</p>
                                <p className="decs">Request removal of such data, please contact Us using the contact
                                    information provided below, and include the email address associated with Your account
                                    and a statement that You reside in California. We will make sure the data is not
                                    publicly displayed on the Services, but please be aware that the data may not be
                                    completely or comprehensively removed from Our systems. California Privacy</p>

                            </div>
                        </div>

                        <div className="row w-100 d-flex justify-content-between">
                            <div className="col ppc-block-2">
                                <h2 className="h2-hdng">Disclosure:</h2>
                                <p className="decs">Under the California Consumer Privacy Protection Act (CCPA), We are required
                                    to provide you with information about the information We may collect, the purpose for
                                    which We collect such information, the sources of that information, and the categories
                                    of third parties with whom We share that information. Please see the “What Personal
                                    Information We Collect Includes” section above. Notice to Residents of the State of
                                    Nevada: If You are a resident of Nevada, You have the right to opt-out of the sale of
                                    certain personal information to third parties who intend to license or sell that
                                    personal information. You can exercise this right by contacting Us at hello@ugcff.co and
                                    providing Us with Your name and the email address associated with Your account. Please
                                    kindly note that We do not currently sell Your personal information as sales are defined
                                    in Nevada Revised Statutes Chapter 603A. DMCA Rights As required by law We will respond
                                    to all claims of intellectual property infringement. We will promptly investigate
                                    notices of alleged infringement and will take appropriate actions required under the
                                    Digital Millennium Copyright Act, Title 17, United States Code, Section</p>
                                <p className="decs">Name: UGC FF Limited Company</p>
                                <p className="decs">Address: Unit 1603, 16th Floor, The L. Plaza, 367 – 375 Queen’s Road
                                    Central, Sheung Wan, Hong Kong</p>
                                <p className="decs">Email: hello@ugcff.co</p>
                                <p className="decs">Changes</p>
                                <p className="decs">From time to time, we may update this Privacy Policy. If we make any
                                    material change to it, we will notify you via email, through a notification posted on
                                    the Services, or as required by applicable law. We will also include a summary of the
                                    key changes. Unless stated otherwise, modifications will become effective on the day
                                    they are posted. As permitted by applicable law, if you continue to use the Services
                                    after the effective date of any change, then your access and/or use will be deemed an
                                    acceptance of (and agreement to follow and be bound by) the revised Privacy Policy. The
                                    revised Privacy Policy supersedes any previous Privacy Policies.</p>
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
    </div>
  )
}
