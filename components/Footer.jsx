import { useState, useEffect } from 'react'
import Link from 'next/link'

import { Modal, Button } from 'antd';


const Footer = () => {
	const [isDialogVisible,setIsDialogVisible] = useState(false)
	const [isDialogVisible2,setIsDialogVisible2] = useState(false)

	const backToTopHandle = () =>{
		window.scrollTo({'behavior': 'smooth', 'top': 0})
	}

	useEffect( () => {
		
	})

	return (
		<footer className="footer">
			<div className="container">
				<div className="go-top isMobile">
					<button onClick={backToTopHandle}>
						<span>Back to the top</span>
						<i></i>
					</button>
				</div>
				<div className="bd">
					<div className="logo">
						<a>
							<img src="/images/logo2.png" alt="" />
						</a>
					</div>
					<div className="navbar">
						<div className="navbar-box">
							<div className="item" >
								<div className="title">
									<span>OUR MARKETS</span>
									<i></i>
								</div>
								<div className="content">
									<div className="box">
										<a >California</a>
										<a >Colorado</a>
										<a >Georgia</a>
										<a >Nevada</a>
										<a >Washington</a>
										<a >Virginia</a>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="title">
									<span>LEGAL</span>
									<i></i>
								</div>
								<div className="content">
									<div className="box">
										<a onClick={ () => setIsDialogVisible(true) }>Privacy policy </a>
										<a onClick={ () => setIsDialogVisible2(true) }>Terms & conditions</a>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="title">
									<span>SUPPORT</span>
									<i></i>
								</div>
								<div className="content">
									<div className="box">
										<a >Get Help</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="ft">
					<div className="license">
						<i></i><span>CA DRE License #02141969</span>
					</div>
					<div className="copy">
						Copyright &copy; 2022 HomeOptions, Inc.
					</div>
				</div>
			</div>
			<Modal
				wrapClassName="global-popup"
				centered
				footer={null}
				destroyOnClose={true}
				closable={true}
				getContainer={true}
				visible={ isDialogVisible }
				onOk={ () => setIsDialogVisible(false) }
				onCancel={ () => setIsDialogVisible(false) }
			>
				<p className='blod'>Privacy Policy</p>
				<p className='blod'>
					Effective Date: November 16, 2020 <br />
					Last Reviewed on: November 16, 2020
				</p>
				<p className='desc'>
					This Privacy Policy explains how information about you is collected, used and disclosed by HomeOptions, Inc., a Delaware incorporation doing business as HomeOptions, and its subsidiaries and affiliates (collectively, “HomeOptions”, “we,” “us”, or “our”) when you access or use our website (the “Site”) and our agent matching service (the “Service”), which are provided through the Site. By using the Site and/or the Service, you consent to the collection, use and disclosure of your information as outlined in this Privacy Policy.
				</p>
				<p className='blod'>Information We Collect and How We Collect It</p>
				<p className='desc'>
					In connection with your access to our Site and/or use of our Service, we collect and store certain information about you. Some of this information can be used on its own or in combination with other information to identify you individually. We call that information “personal information.” We collect personal information and other information as 
				</p>
				<p className='desc'>
					described below: <br />
				 · Information You Provide. We collect your personal information when you register to use the Service, provide information when using the Site or Service, update your account information, submit additional information to help us understand your transaction, contacts us with questions or feedback, or otherwise communicates with us. This personal information may include your name, address, email address, phone number, IP address, and specific detailed about the nature of your interaction with a buyer or seller or, if you are a buyer/seller, specific information about your potential transaction needs. <br />
				 · Public Information. We may collect information about you from public sources, such as public social media pages or online directories. <br />
				 · Information from Third Parties. We may collect and receive information about you, including personal and financial information from third parties, such as financial institutions, automated home valuation platforms, and our service providers, for identity verification, fraud protection, risk assessment, and other purposes. We may information from credit bureaus for the foregoing purposes as well. In addition, we may receive demographic information about you from third parties to help us better understand our users and to improve and market our Service. <br />
				 · Automatically Collected Information. We automatically collect certain usage information when you access the Site or use the Service, such as your device identifier (if using a mobile device), Internet Protocol (IP) address (if using a browser), operating system, browser type, and the address of a referring site. We also automatically collect certain usage information through cookies and related technologies, as described below. In addition, our Site may implement third-party software, such as Google’s Invisible reCAPTCHA (the “Invisible CAPTCHA”), that collects your information for security purposes. <br />
				 · Single Sign-On Information. Single Sign-On allows you to sign in to the Service from another service you use and with which we partner. We will collect certain information for security purposes in order to verify your authorized access to the Service, including your username and password for the other service. We do not currently utilize this technology but may in the future.
				</p>
				<p className='blod'>Third-Party Software, Cookies and Other Related Technologies</p>
				<p className='desc'>
					We may use cookies, pixel tags, web beacons, and other similar technologies to better understand how you interact with our Site, monitor aggregate usage by our users, and monitor web traffic routing on our Site to help us improve our Site. Most Internet browsers let you change the browser’s settings to stop accepting cookies or to prompt you before accepting a cookie from websites you visit. If you do not allow cookies, you may not be able to use some or all portions or functionality of the Site or Service.
				</p>
				<p className='desc'>
					We partner with third parties to manage our advertising on other sites and to determine our Site performance. Such partners may use cookies, pixel tags, web beacons, and other related technologies to collect information about your activities on our Site and other sites so that we can (i) provide advertising that may be of interest to you, and (ii) evaluate the efficacy of our marketing programs and our Site. To prevent our partners from collecting your information for these purposes, you can visit https://preferences-mgr.truste.com to opt out of certain advertising networks.
				</p>
				<p className="desc">
					We may use the Invisible CAPTCHA on our Site to collect information for security reasons. Use of the Invisible CAPTCHA and information collected via the Invisible CAPTCHA are subject to Google’s Terms of Service and Privacy Policy, respectively.
				</p>
				<p className="blod">How We Use the Information We Collect</p>
				<p className="desc">
					We use information that we collect about you for the following purposes: <br />
					 · to administer the Site, manage accounts and provide the Service of connecting our users to amazing Real Estate Agents; <br />
					to verify receipt of our emails or other communications; <br />
					to monitor, analyze, improve, and develop the Site and Service, and to create new Service features; <br />
					to provide a more customized experience on the Site, Service, and/or our partners’ or affiliates’ websites; <br />
					to understand our users better; <br />
					to determine eligibility for the Service;<br />
					to prevent, identify, and address fraudulent or other illegal activity and security issues; <br />
					to (i) solicit feedback, (ii) respond to you or your comments, requests, or inquiries, (iii) provide customer service and support, or (iv) otherwise contact you in connection with the Site or Service; <br />
					to generate anonymized, aggregate data containing only de-identified, non-personal information that we may use to publish reports; <br />
					for our marketing purposes, such as (i) informing you of our or our partners’ or affiliates’ products, services, features, or offerings that may be of interest to you, (ii) providing you with newsletters, articles, reports, updates, and announcements, as well as information about upcoming events, (iii) facilitating communication between buyers and sellers and our network of referral agents and ancillary service providers, (iv) improving and tailoring our advertising and communications, (v) analyzing our marketing efforts, and (vi) determining your eligibility for certain marketing programs, events, and offers; <br />
					to operate our business, which includes, without limitation, using your information (i) to verify transaction progress, (ii) to manage and enforce contracts with you or with third parties, (iii) to manage our corporate governance, compliance, and auditing practices, and (iv) for agent review and approval purposes, if you submit an application for inclusion via the Site; <br />
					to (i) comply with laws, rules, and regulations, including any disclosure or reporting obligations, (ii) resolve disputes with users or third parties, (iii) respond to claims and legal process (including but not limited to subpoenas and court orders) as we deem necessary or appropriate, (iv) protect our property rights or those of third parties, (v) protect the safety of the public or any person, and (vi) prevent or stop any activity which we may consider to be (or to pose a risk of being) illegal, unethical, or legally actionable; and <br />
					for any other purpose for which you expressly authorize us to use your information.
				</p>
				<p className="blod">Sharing and Disclosure of Your Information</p>
				<p className='desc'>
					We will only share your information with the third parties listed below for the purposes described above in the “Use of Your Information” Section: <br />
					The top performing licensed real estate agents that our algorithm connects with your particular transaction; <br />
					Marketing partners that provide ancillary services that may benefit you in your home buying or selling journey, these service providers include but are not limited to mortgage companies, insurance companies, home warranty providers, 1031 exchange qualified intermediaries, home inspectors, moving companies, retail home improvement outlets, general contractors, storage facilities, or other real estate agent referral platforms; <br />
					we may use third-party advertising companies to serve ads when you visit the Services. These companies may use information about your visits to our Website(s) and other websites that are contained in web cookies and other tracking technologies in order to provide advertisements about goods and services of interest to you. <br />
					banking and financial institutions; <br />
					certain parties as necessary to respond in good faith to legal process (including but not limited to subpoenas and court orders); <br />
					legal and financial advisors and auditors; <br />
					third-party agents, partners, and service providers, who (i) are only permitted to use your information as we allow (which may include contacting you on our behalf), and (ii) are required under law or contract to keep your personal information confidential; and <br />
					the following third parties under the circumstances described below <br />
					1.we may share business information with credit bureaus, and we may share information with certain companies, banks, and organizations for the purposes of fraud prevention and determining eligibility for the Service; <br />
					2.if there is a sale of HomeOptions or HomeOptions, Inc. (including, without limitation, a merger, stock acquisition, sale of assets, or reorganization), or in the event that our entity liquidates or dissolves, we may sell, transfer, or otherwise share some or all of our assets, which could include your information, to the acquirer; <br />
					3.from time to time, we may share reports with the public that contain anonymized, aggregate, de-identified information and statistics; and – we may share your information with certain other third parties with whom you expressly authorize us to share your information. <br />
				</p>
				<p className="blod">We do not share information with third parties for their own direct marketing purposes.</p>
				<p className="blod">Your Choices</p>
				<p className="blod">Changing or Deleting Your Information</p>
				<p className="desc">
					You may review, update, correct, or delete your personal information through your account or by contacting us using the contact information listed below. If you would like us to delete your account entirely, please contact us at contact@homeoptions.ai with a request that we delete your personal information from our database. Please note that there may be some delay in the deletion of your data from our servers following your request. Additionally, we may retain some of your data as necessary to comply with our legal obligations, resolve disputes, enforce our agreements, or as needed for other legitimate business purposes.
				</p>
				<p className="blod">Promotional Communications</p>
				<p className="desc">
					Phone and Text Messages. By sharing your phone number with us, you consent to receive text messages, including by automatic telephone dialing system, from us to the number provided for informational and/or marketing purposes. Consent to receive marketing messages is not a condition for service. You may opt out by texting STOP at any time or emailing contact@homeoptions.ai. If you opt out of receiving informational, marketing, and promotional messages from us, we may still need to contact you related to your account and the Service. <br />
					Emails. By sharing your email with us, you consent to receive informational, marketing, and promotional emails from us. Consent to receive marketing messages is not a condition for service. You may unsubscribe from these emails by following the opt-out instructions contained in such emails or emailing contact@homeoptions.ai. If you opt out of receiving informational, marketing, and promotional emails from us, we may still need to send you emails related to your account and the Service.
				</p>
				<p className="blod">
					Do Not Track
				</p>
				<p className="desc">
					Our Site does not currently have the capability of responding to “Do Not Track” signals received from various browsers.
				</p>
				<p className="blod">Security</p>
				<p className="desc">
					We employ administrative and technical measures designed to protect your information from unauthorized access and other applicable state and federal privacy and security laws; however, despite these efforts, no security measures are perfect or impenetrable and no method of data transmission can be guaranteed to prevent any interception or other type of misuse. We also depend on you to protect your information. Please set up a strong password and keep it confidential. If you become aware of any breach of security, please notify us immediately.
				</p>
				<p className="blod">Links to Other Sites</p>
				<p className="desc">
					The Site and/or Service may contain links to other sites. Any information you provide on a third-party site is provided directly to the owner of that site and is subject to that party’s privacy policy. This Privacy Policy does not apply to such sites, and we are not responsible for the content, policies, or privacy and security practices of such sites.
				</p>
				<p className="blod">Our Policy Toward Minors</p>
				<p className="desc">
					The Service is not directed to children under 18 and we do not knowingly collect personal information from children under 18. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at contact@homeoptions.ai.
				</p>
				<p className="blod">Changes to this Privacy Policy</p>
				<p className="desc">
					Any information that we collect is subject to the Privacy Policy in effect at the time such information is collected. We may, however, modify and revise our Privacy Policy from time to time. If we make any material changes to this policy, we will notify you of such changes by posting them on our Site, informing you through the Service, or sending you an email or other notification, and we will indicate when such changes will become effective. By continuing to access or use our Site or Service after those changes become effective, you are agreeing to be bound by the revised policy.
				</p>
			</Modal>
			<Modal
				wrapClassName="global-popup"
				centered
				destroyOnClose={true}
				footer={null}
				closable={true}
				getContainer={true}
				visible={ isDialogVisible2 }
				onOk={ () => setIsDialogVisible2(false) }
				onCancel={ () => setIsDialogVisible2(false) }
			>
				<p className="blod">Terms and Conditions</p>
				<p className="blod">Terms of Service</p>
				<p className="desc">
					This Terms of Service shall serve to explain our expectations for how you as a Licensed Real Estate Agent, a related third party or as a buyer/seller interact with and utilize our website. HomeOptions, Inc. is a Delaware incorporation, doing business as HomeOptions, and its subsidiaries and affiliates (collectively, “HomeOptions”, “we,” “us”, or “our”) when you access or use our website (the “Site”) and our agent matching service (the “Service”), which are provided through the Site, you consent to the following Terms of Service.
Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Service, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Service to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Service by your continued use of the Site after the date such revised Terms and Conditions are posted. <br />
					The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. <br />
					The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Site. <br />
				</p>
				<p className="blod">Intellectual Property Rights</p>
				<p className='desc'>
					Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission. <br />
					Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks. 
				</p>
				<p className="blod">Information We Collect and How We Collect It</p>
				<p className="desc">
					HomeOptions is a service that connects home sellers to top real estate agents around the US and serves as a communication conduit between both aforementioned parties. The service that we provide to both sellers of real estate and real estate professionals is governed by a few terms that are outlined below. <br />
					Because we are an online service, we don’t ask you to deal with and physically sign a lengthy contract. The terms of our contract with you are set forth below in plain language. If you don’t agree with the terms, then we ask you please to leave this Site. If you do use this Site, then that action will serve as your agreement to be bound by our terms of service.
You agree that clicking “Get Started” (or other such button you use to submit your information) acts as your electronic signature. You further consent to receive emails, phone calls and messages from HomeOptions, Inc. and its affiliates regarding your inquiry including by recorded and autodialed calls and text messages. Carrier data and message rates may apply. You may opt out at any time by calling 1-800-357-9992 or by emailing contact@homeoptions.ai. <br />
We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof). <br />
HomeOptions is a web service that is wholly owned and operated by HomeOptions, Inc. in partnership with licensed real estate brokerages across the US and is in compliance with all state and federal housing laws. <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Real estate professionals who are involved with and use our Site must agree with the following terms: <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You grant HomeOptions permission to display on our Site and elsewhere information that we have gathered or you have supplied related to any of the real estate transactions that you have handled as a real estate professional. This information helps our mutual clients better understand your strengths and sales performance history. <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our platform is referral based, and during the sign-up process you will digitally sign a referral agreement with us. When we connect you with a referral then you agree to pay us a Referral Fee on the gross commission your firm earns on each transaction involving the prospect. This agreement is valid and enforceable for multiple transactions and it is your obligation to keep us informed of your progress with our referred clients. The terms for this Referral Fee (the fine print) are located on your Profile page under the “Agreement” icon. Referral fees are common in real estate and without them, our service would not be possible. <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You are responsible for maintaining your own professional liability insurance policy, a valid real estate license and for following all applicable real estate laws regarding disclosures, documentation and other brokerage responsibilities. In addition, you are responsible for the real estate brokerage services provided to your clients and agree to indemnify, defend and hold HomeOptions harmless from any claims, costs, and damages incurred by us arising from claims by your clients regarding the brokerage services you have provided. <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your participation in our service is voluntary and can be terminated by either of us for any reason at any time with written notice. However, any referrals made prior to such termination are still bound by this agreement, and Referral Fees will be due upon close of any transactions resulting from such referrals. <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In connection with the referrals, you agree to be contacted by HomeOptions and its referrals via phone, email, SMS text message, messaging services such as WhatsApp service, mail, or other reasonable means. <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You further agree that you will not forward our referrals to any other party without our written consent. Any referral fee that you earn by forwarding our clients to a third-party brokerage must be paid in full to HomeOptions within 10 days of receipt of such funds. <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Any information that you provide to us shall be accurate, complete and owned by you, and you agree to update any information that is or becomes inaccurate. Of course, if we discover that any information is inaccurate we may correct it ourselves. You hereby grant us permission to e-mail or display your Profile (including your name, likeness, contact information and transaction details) and such other information as may be supplied by you on or from our Site “homeoptions.ai” and such other partner and affiliate websites as we deem appropriate. <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You agree that we may modify the services provided, these terms of service or the price charged for our services at any time. We will send you an email thirty (30) days in advance of any significant changes of our services, terms of service or prices, and you agree that your continued use of our services after the notice period means that you accept the new terms and any subsequent referrals or services shall be governed by the new terms. <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You agree that these public “terms of service” compliment and are in addition to the terms of service contained with our fully executed and digitally signed referral agreement housed in your account. <br />
				</p>
				<p className="blod">Terms for Buyers and Sellers</p>
				<p className='desc'>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All non-real estate professionals (including prospective Buyers and Sellers and their representatives whether personal or professional) who are involved with and use our Site must agree with the following terms: <br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our purpose as a data-driven agent matching service is to make a professional introduction between you and our Real Estate Agent partners. Of course, this introduction involves sharing the contact information of each party with the other. When you submit information to us, you authorize us to use and provide this information to make an appropriate match. By providing this information to us, you consent to being contacted by us and by our partner real estate professionals via phone, email, SMS text message, messaging services such as WhatsApp service, mail, or other reasonable means. <br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In order to best help you, we need you to provide information that is accurate and complete, especially your contact information so that our Real Estate Agent partners can contact you quickly and efficiently. We reserve the right to supplement, amend, or correct inaccurate submissions or to suspend or terminate access to anyone who supplies information that is intentionally inaccurate or misleading. <br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You understand that for our services we may receive payment (a referral fee) that may be a percentage of the commission received by the real estate professionals involved in the real estate transaction. Your use of our services constitutes your acknowledgment of, and agreement to, this compensation arrangement. <br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You agree that we may modify the services provided or these terms of service at any time. We will notify you in advance of any significant changes of our services, and you agree that your continued use of our services after the notice period means that you accept the new terms and any subsequent services shall be governed by the new terms. <br />
				</p>
				<p className="blod">Additional Terms</p>
				<p className="desc">
					All who are involved with and use our Site must agree with the following additional terms: <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HomeOptions intends that the information contained on our Site be accurate and reliable; however, errors sometimes occur. In addition, we may make changes and improvements to the information provided at any time. Accordingly, we do not guarantee the accuracy of any information available on this Site, and are not responsible for any errors, omissions, or misrepresentations and any information should be independently verified. <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You agree to the following limitation: THE WEB SITE AND THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES ASSOCIATED WITH IT ARE PROVIDED “AS IS.” HOMEOPTIONS AND/OR ITS SUPPLIERS, AFFILIATED THIRD-PARTY PARTNERS, OR REAL ESTATE PROFESSIONALS DISCLAIM ANY WARRANTY OF ANY KIND, WHETHER EXPRESS OR IMPLIED, AS TO ANY MATTER WHATSOEVER RELATING TO THE WEB SITE AND ANY INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES PROVIDED HEREIN, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NONINFRINGEMENT. USE OF OUR SERVICE IS AT YOUR OWN RISK. WE AND/OR OUR SUPPLIERS OR PARTNERS, ARE NOT LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES OR OTHER INJURY ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF OUR SERVICES OR WITH THE DELAY OR INABILITY TO USE THE WEB SITE, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES OBTAINED THROUGH THE WEB SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE WEB SITE, WHETHER RESULTING IN WHOLE OR IN PART, FROM BREACH OF CONTRACT, TORTIOUS BEHAVIOR, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, EVEN IF WE AND/OR ITS SUPPLIERS HAD BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU. <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You also agree to the following: IN NO EVENT SHALL WE OR OUR SUPPLIERS BE LIABLE FOR LOST PROFITS OR ANY SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES (HOWEVER ARISING, INCLUDING NEGLIGENCE) ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT. OUR LIABILITY, AND THE LIABILITY OF OUR SUPPLIERS AND PARTNERS, TO YOU OR ANY THIRD PARTIES IN ANY CIRCUMSTANCE, IS LIMITED TO $100. Some states do not allow the limitation of liability, so the foregoing limitation may not always apply. <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Service no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites. <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Service will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith. <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You also agree to the following: These Terms of Service shall be subject to and construed in accordance with the laws of the State of Delaware, without regard to its conflict of laws principles. If any part of these Terms of Service are determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid enforceable provision that most closely matches the intent of the original provision, and the remainder of the Agreement shall continue in effect. A printed version of this Agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. All rights not expressly granted herein are reserved to HomeOptions, Inc. <br />
				</p>
			</Modal>
		</footer>
	)
}
export default Footer