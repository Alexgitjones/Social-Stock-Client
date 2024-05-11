import React from "react";
import Textanimation from '../component/textanimation';
import Preloader from '../component/preloader';

export default function Legalterms({ user }) {
  return (
    <div>
      {/* <Preloader /> */}
      <div className="p-container-licence_term_of_services">
        <div className="container justify-content-center d-flex flex-column align-items-center">
          <div className="licence_term_of_services">
            <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-1">
                  <h6 className="sub-hdng">Legal Terms </h6>
                  {/* <Textanimation text="Legal Terms" /> */}
                  <div className="hdng-section">
                    <div className="col-8">
                      <Textanimation align="left" text="License and Terms" />
                      <Textanimation align="left" text="of service" />
                      <h1 className="hdng mob-head">License and Terms of service</h1>
                    </div>
                    <div className="col-4 text-end d-flex align-items-end justify-content-end">
                      <p className="last-update-date">
                        Last Updated: 9/05/2022
                      </p>
                    </div>
                  </div>
                  <p className="decs">
                    By using this website www.ugc stock.co (“Website”) and
                    signing up to a subscription plan, You are deemed to have
                    read and agreed to the following terms and conditions:
                  </p>
                  <p className="decs">
                    The following terminology applies to these Terms and
                    Conditions (Terms), Privacy Policy and any disclaimer notice
                    and any or all Agreements on this Website: “Customer”,
                    “You”, “User” and “Your” refers to you, the person accessing
                    this Website and exploiting Our Services/Products and
                    therefore accepting the Company’s terms and conditions and;
                    “User Account” or “Account” shall mean the online account
                    maintained by the User at the Website to avail of the
                    Services; the “Company”, “Our”, “We” and “Us”, refers to Our
                    Company, Socials Studio Limited Company. “Party” or
                    “Parties” refers to both the Customer/User and Ourselves, or
                    either the Customer or Ourselves. “Product” refers to a
                    unique product provided by our Company as a result of Our
                    commitment and services (“Services”). Any use or access by
                    anyone under the age of 16 is prohibited unless permitted by
                    the laws of Your country of residence, and certain regions
                    and/or Products may have additional requirements and/or
                    restrictions.
                  </p>
                  <p className="decs">
                    All rights not expressly granted to You under these Terms
                    are reserved to the Company.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h3-hdng">Refund Policy</h2>
                  <p className="decs">
                    Due to the nature of digital downloads and digital products,
                    all sales are final, and we cannot accept returns or
                    refunds.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h3-hdng">Digital Product Delivery</h2>
                  <p className="decs">
                    Upon completion of payment, you'll be directed to create an
                    account where all the files are stored. Once you've added
                    your login details, you'll be able to access the digital
                    files instantly. If you are experiencing difficulties
                    accessing the files or have any questions email us at
                    hello@ugcff.co.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h3-hdng">Lifetime Access policy</h2>
                  <p className="decs">
                    Lifetime Access is for the lifetime of the Service. If for
                    any reason, We Socials Studio Limited Company should
                    dissolve, cease to exist, or close the lifetime access
                    service, it shall provide customers with a 30-day notice and
                    the ability to download the resources contained in the
                    lifetime access service. This applies to what is referred to
                    as "Lifetime Access" in our marketing materials.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h3-hdng">Annual Subscription Policy </h2>
                  <p className="decs">
                    For annual subscriptions, you will receive 365 days of
                    access. You may cancel the automatic renewal of your annual
                    subscription at any time and your access to the Site will
                    end at the end of the current contracted term. If for any
                    reason, We Socials Studio Limited Company should dissolve,
                    cease to exist, or close the annual subscription service, it
                    shall provide customers with a 30-day notice and the ability
                    to download the resources contained in the remainder of the
                    service. 
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h3-hdng">Monthly Subscription Policy</h2>
                  <p className="decs">
                    For monthly subscriptions, you will receive a month of
                    access. For example, a customer with a monthly subscription
                    set to cycle on the 2nd of the month will always be billed
                    on the 2nd. If a month doesn't have the anchor day, the
                    subscription will be billed on the last day of the month.
                    For example, a subscription starting on January 31 bills on
                    February 28 (or February 29 in a leap year), then March 31,
                    April 30, and so on. If a month doesn't have the anchor day,
                    the subscription will be billed on the last day of the
                    month. For example, a subscription starting on January 31
                    bills on February 28 (or February 29 in a leap year), then
                    March 31, April 30, and so on.
                  </p>
                  <p className="decs">
                    You may cancel the automatic renewal of your monthly
                    subscription at any time, and your access to the Site will
                    end at the end of the current contracted term. If for any
                    reason, We Socials Studio Limited Company should dissolve,
                    cease to exist, or close the monthly subscription service,
                    it shall provide customers with a 30-day notice of the
                    termination of services.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">
                    SERVICES <span className="ff-change">/ </span>PRODUCT<span className="ff-change">(</span>S<span className="ff-change">)</span>
                  </h2>
                  <p className="decs">
                    The Website allows You to purchase digital files (Product)
                    for a fee. We may at Our sole discretion engage third party
                    service providers from time to time to provide certain
                    Services. Each such purchase is intended to be used only by
                    one person, unless specified otherwise under Product’s
                    details. You are not allowed to share Your purchase and/or
                    provide access to such purchase to a third party. Please
                    acknowledge that the Products we provide You with for a fee
                    paid through Our Website constitute Our intellectual
                    property and may not be exploited in any way prohibited by
                    these Terms.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">PRIVACY</h2>
                  <p className="decs">
                    We are committed to protecting Your privacy. We will only
                    use information collected from individual Customers
                    particularly email addresses to facilitate and deliver
                    orders as part of Our commitment to provide the Services Our
                    Customers have paid. Moreover, as We endeavor to provide You
                    better products/services We will also be using Your emails
                    to promote Our other products/services. You can opt out
                    anytime by pressing the unsubscribe button that can be found
                    in every email We send. We will constantly review Our
                    systems and data to ensure the best possible service to Our
                    Customers.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">SUPPORT</h2>
                  <p className="decs">
                    We will provide Customer support services to Our registered
                    Users via electronic mail. If You experience any
                    difficulties using Our Product please notify us using the
                    following email: hello@ugc stock.co with a subject line
                    “Support”. However, We will not be liable or in any way
                    responsible for Your own technical issues, internet speed
                    and other related to Your access/device/location matters and
                    We reserve the right to solely determine whether such
                    difficulty exists on Our side.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">DISCLAIMER</h2>
                  <p className="decs">
                    The information on this Website is provided on an “AS IS”
                    basis. To the fullest extent permitted by law, this Company:
                    (i) excludes all representations and warranties relating to
                    this Website and its content or which is or may be provided
                    by any affiliates or any other third party, including in
                    relation to any inaccuracies or omissions in this Website
                    and/or the Company’s Products; (ii) excludes all liability
                    for damages arising out of or in connection with Your use of
                    this Website. This includes, without limitation, direct
                    loss, loss of business or profits (whether or not the loss
                    of such profits was foreseeable, arose in the normal Product
                    of things or You have advised this Company of the
                    possibility of such potential loss), damage caused to Your
                    computer, computer software, systems and programs and the
                    data thereon or any other direct or indirect, consequential
                    and incidental damages.
                  </p>
                  <p className="decs">
                    WITHOUT LIMITING THE FOREGOING, WE DO NOT WARRANT THAT (A)
                    THE PRODUCT(S) WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS
                    OR ACHIEVE THE INTENDED PURPOSES, (B) THE PRODUCTS WILL NOT
                    EXPERIENCE OUTAGES OR OTHERWISE BE UNINTERRUPTED, TIMELY,
                    SECURE OR ERRORFREE, (C) THAT DEFECTS ON THE PRODUCTS WILL
                    BE CORRECTED. YOU ASSUME ALL RISK OF PERSONAL INJURY,
                    INCLUDING DEATH AND DAMAGE TO PERSONAL PROPERTY, SUSTAINED
                    FROM USE OF THE PRODUCT(S). FEES
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">Purchasing a Product:</h2>
                  <p className="decs">
                    We offer paid Product(s) for a fee. You are responsible for
                    paying all fees charged by Us and applicable taxes in a
                    timely manner with a payment mechanism associated with the
                    applicable paid Product(s). When you make a purchase, you
                    agree not to use an invalid or unauthorized payment method.
                    We reserve the right to disable access to any Product for
                    which we have not received adequate payment. Unless
                    otherwise stated, all fees are quoted in U.S. Dollars. You
                    are solely responsible for any sales, value-added,
                    withholding or similar taxes that apply to Your purchase,
                    whether domestic or foreign. You can purchase Our Product(s)
                    via credit card:
                  </p>
                  <p className="decs">
                    If You choose to pay by credit card You authorize Us to
                    charge Your credit card or bank account for an amount of
                    Product’s applicable fee. By purchasing any Product through
                    Our Website, You hereby consent and agree to abide by such
                    third-party Internet payment service providers’ customer
                    terms and conditions, and privacy policies, and understand
                    that we have no control whatsoever on such customer terms
                    and conditions, and privacy policies. IF You DO NOT AGREE to
                    such third-party Internet payment service providers’
                    customer terms and conditions or privacy policies, DO NOT
                    PURCHASE ANY PRODUCT. This is Your sole responsibility to
                    find, read and understand any third party policies.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">CUSTOMER RESTRICTIONS</h2>
                  <p className="decs">
                    As a Customer, You agree not to: Circumvent, disable, or
                    otherwise interfere with security-related features of the
                    Website; Disparage, tarnish, or otherwise harm, in Our
                    opinion, Website and/or the Service; Use the Product in a
                    manner inconsistent with any applicable laws or regulations;
                    Interfere with, disrupt, or create an undue burden on the
                    Service or the networks or services connected to the
                    Service; You will not share access to Our Product with a
                    third party (unless otherwise permitted by us separately in
                    writing); will not lease, sell, grant or otherwise exploit
                    Our Product(s) in a way prohibited by these Terms. Attempt
                    to bypass any measures of the Website designed to prevent or
                    restrict access to the Service, or any portion of the
                    Website.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">USER CONTENT AND CONDUCT</h2>
                  <p className="decs">
                    In case Our Services enable You to share your content ("User
                    Content"), You retain all intellectual property rights in,
                    and are responsible for the User Content You create and
                    share. However, by submitting User Content you grant other
                    Users and Company the right to share Your User Content via
                    any social media platform. As a user of the Site, you agree
                    not to post any Prohibited Content:
                  </p>
                  <ol>
                    <li>Profane language or content;</li>
                    <li>
                      Content that promotes, fosters, or perpetuates
                      discrimination on the basis of race, religion, gender,
                      marital status, familial status, national origin, age,
                      mental or physical disability, sexual orientation, gender
                      identity, source of income or other protected status under
                      applicable law;
                    </li>
                    <li>
                      Inappropriate sexual content or links to inappropriate
                      sexual content, nudity or obscene;
                    </li>
                    <li>Conduct or encouragement of illegal activity;</li>
                    <li>Private and confidential information;</li>
                    <li>
                      Content that violates a legal ownership interest of any
                      other party.
                    </li>
                  </ol>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">
                    INTELLECTUAL PROPERTY OF OUR COMPANY
                  </h2>
                  <p className="decs">
                    Unless otherwise indicated, this Website is Our proprietary
                    property and all source code, databases, functionality,
                    software, Website designs, audio, video, text, photographs,
                    and graphics on the Website (collectively, the “Content”)
                    and the trademarks, service marks, and logos contained
                    therein (the “Marks”) are owned or controlled by Us or
                    licensed to Us, and are protected by copyright and trademark
                    laws and various other intellectual property rights and
                    unfair competition laws in various jurisdictions including
                    EU and US, international copyright laws, and international
                    conventions.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">TERM AND TERMINATION</h2>
                  <p className="decs">
                    The Company may terminate your access to all or any part of
                    the Website, Services and/or Product(s) at any time, with or
                    without cause, with or without notice, effective
                    immediately. You can stop using our Services at any time.
                    You may delete your User Account by Website features or
                    notifying Us at hello@ugcff.co. When you decide to delete
                    Your User Account, We will delete Your data, although this
                    may not take place immediately.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">INDEMNITY</h2>
                  <p className="decs">
                    You agree to indemnify, defend and hold harmless Company and
                    its affiliates, and their respective licensors and Service
                    Providers, and all officers, directors, owners, agents, or
                    licensors of any of the foregoing (collectively, the
                    “Indemnified Parties”) from and against any and all losses,
                    damages, liabilities and costs, including reasonable
                    Attorney’ fees, sustained by any of the Indemnified Parties
                    in connection with any claim arising out of Your use of Our
                    Website or Product(s), or any breach by You of these Terms.
                    Under no circumstances shall We be liable for any amount
                    exceeding the fee paid for the Services/Product(s) ordered.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">CHANGES TO THESE TERMS</h2>
                  <p className="decs">
                    We reserve the right to revise the Terms at our sole
                    discretion at any time. Any revisions to the Terms will be
                    effective immediately upon posting by Us. For any material
                    changes to the Terms, we will take reasonable steps to
                    notify you of such changes, via a banner on the website,
                    email notification, another method, or combination of
                    methods. In all cases, your continued use of the
                    Services/Products after publication of such changes, with or
                    without notification, constitutes binding acceptance of the
                    revised Terms.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">SEVERABILITY</h2>
                  <p className="decs">
                    If it turns out that a particular provision of these Terms
                    is not enforceable, this will not affect any other terms. If
                    you do not comply with these Terms, and we do not take
                    immediate action, this does not indicate that we relinquish
                    any rights that we may have in accordance with these Terms
                    or granted by law.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">APPLICABLE LAW AND JURISDICTION</h2>
                  <p className="decs">
                    These Terms and Conditions are governed by the laws of HK,
                    the parties submit to the jurisdiction of the Court of HK,
                    regardless of conflicts of law rules, and Hong Kong Courts
                    competent to hear appeals from them.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">ENTIRE AGREEMENT</h2>
                  <p className="decs">
                    The Terms constitute the sole and entire agreement between
                    You and Us regarding this Website and supersede all prior
                    and contemporaneous understandings, agreements,
                    representations, and warranties, both written and oral,
                    regarding the Services/Product(s)/Website.
                  </p>
                </div>
              </div>

              <div className="row w-100 d-flex justify-content-between">
                <div className="col ltos-block-2">
                  <h2 className="h2-hdng">CONTACTING US</h2>
                  <p className="decs">
                    For questions or clarifications regarding Our Terms and/or
                    any other matters related to Our Services/Products, please
                    contact Us at hello@ugcff.co.
                  </p>
                  <p className="decs">Our mailing address is:</p>
                  <p className="decs">Attn: UGC FF Limited Company</p>
                  <p className="decs">
                    Address: Unit 1603, 16th Floor, The L. Plaza, 367 – 375
                    Queen’s Road Central, Sheung Wan, Hong Kong
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-ltos">
        <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
          <div className="row w-100">
            <div className="col">
              <hr className="divider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
