import Head from 'next/head'
import Link from 'next/link'
import { Collapse } from 'antd'
const { Panel } = Collapse;

const Home = () => {
	return (
		<div className='home-wrap'>
			<div className="home-banner">
				<div className="mobile-bg">
					<div className="bg-top"></div>
					<div className="bg-middle"></div>
					<div className="bg-bottom"></div>
				</div>
				<div className="container">
					<h3 className='isPc wow  fadeInDown' data-wow-delay=".2s">
						Take control of your <br />
						selling power
					</h3>
					<h3 className='isMobile wow  fadeInDown' data-wow-delay=".2s">
						Take control of <br />
						your selling <br />
						power
					</h3>
					<p className="wow fadeInUp"  data-wow-delay=".2s">Get up to <span>$8,000</span> now for letting us sell your home when you’re ready</p>
					<div className="form g-form wow fadeInUp" data-wow-delay=".3s">
						<i></i>
						<input type="text" name="" id="" placeholder='Search your home address' />
						<button>See My Reward</button>
					</div>
					<ul>
						<li className="wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1.2s">
							<span>No obligation to sell</span>
						</li>
						<li className="wow fadeInLeft" data-wow-delay=".4s" data-wow-duration="1.2s">
							<span>No hidden fees</span>
						</li>
						<li className="wow fadeInLeft" data-wow-delay=".6s" data-wow-duration="1.2s">
							<span>No need to pay us back</span>
						</li>
					</ul>
				</div>
				<div className="tips">HomeOptions is a licensed real estate broker connecting customers with top agents.</div>
				<div className="picture">
					<img id="picture" src="/images/house.png" alt="" />
				</div>
			</div>
			<div className="home-works ">
				<div className="container">
					<div className="hd">
						<h3>How it works</h3>
					</div>
					<div className="bd">
						<ul>
							<li className='step1'>
								<div className="picture wow fadeInRight" data-wow-delay=".2s" data-wow-duration="1.4s">
									<div className="bg bg1 " ><img src="/images/rectangle_01.png" alt="" /></div>
									<div className="bg bg2"><img src="/images/rectangle_02.png" alt="" /></div>
									<div className="img">
										<img src="/images/img_02.png" alt="" />
									</div>
								</div>
								<div className="txt ">
									<p className='step'>Step 1</p>
									<h4>Discover your home’s value</h4>
									<div className="desc">
										Input basic information and find out how much cash you can get <br />
										today if let us sell your home for you in the future. No committment <br />
										here, just check it out.
									</div>
								</div>
							</li>
							<li className='step2'>
								<div className="picture wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1.4s">
									<div className="bg bg1"><img src="/images/rectangle_03.png" alt="" /></div>
									<div className="img">
										<img src="/images/img_03.png" alt="" />
									</div>
								</div>
								<div className="txt">
									<p className='step'>Step 2</p>
									<h4>Hop on a call and receive cash</h4>
									<div className="desc">
										If you like the deal we offer you, our sales rep will hop on a call with <br />
										you to go through details. Sign the contract and cash your check.
									</div>
								</div>
							</li>
							<li className='step3'>
								<div className="picture wow fadeInRight" data-wow-delay=".2s" data-wow-duration="1.4s">
									<div className="bg bg1"><img src="/images/rectangle_04.png" alt="" /></div>
									<div className="img">
										<img src="/images/img_04.png" alt="" />
									</div>
								</div>
								<div className="txt">
									<p className='step'>Step 3</p>
									<h4>
										Sell with America’s top 10% real <br />
										estate agents when you are ready
									</h4>
									<div className="desc">
										A good agent vs an agent from discount platform helps you at least <br />
										sell your home at a 20% higher price. We only partner with the best.
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="mobil-home-works ">
				<div className="container">
					<div className="hd">
						<h3>How it works</h3>
					</div>
					<div className="bd">
						<ul>
							<li className="step1">
								<div className="txt">
									<div className="step">Step 1</div>
									<div className="tit">Discover your home’s value</div>
									<div className="desc">
										Input basic information and find out <br/>
										how much cash you can get  today if <br/>
										let us sell your home for you in the <br/>
										future. No committment here, just <br/>
										check it out.
									</div>
								</div>
								<div className="picture">
									<div className="bg bg1">
										<img src="/images/mobile_05.png" alt=""/>
									</div>
									<div className="bg bg2">
										<img src="/images/mobile_06.png" alt=""/>
									</div>
									<div className="img">
										<img src="/images/mobile_04.png" alt=""/>
									</div>
								</div>
							</li>
							<li className="step2">
								<div className="txt">
									<div className="step">Step 2</div>
									<div className="tit">Hop on a call & receive cash</div>
									<div className="desc">
										If you like the deal we offer you, our <br/>
										sales rep will hop on a call with you to <br/>
										go through details. Sign the contract <br/>
										and cash your check. 
									</div>
								</div>
								<div className="picture">
									<div className="bg bg1">
										<img src="/images/mobile_08.png" alt=""/>
									</div>
									<div className="bg bg2">
										<img src="/images/mobile_09.png" alt=""/>
									</div>
									<div className="img">
										<img src="/images/mobile_07.png" alt=""/>
									</div>
								</div>
							</li>
							<li className="step3">
								<div className="txt">
									<div className="step">Step 3</div>
									<div className="tit">
										Sell with America’s top 10% <br/>
										real estate agents when you <br/>
										are ready
									</div>
									<div className="desc">
										A good agent vs an agent from <br/>
										discount platform helps you at least <br/>
										sell your home at a 20% higher price. <br/>
										We only partner with the best.
									</div>
								</div>
								<div className="picture">
									<div className="bg bg1">
										<img src="/images/mobile_11.png" alt=""/>
									</div>
									<div className="bg bg2">
										<img src="/images/mobile_12.png" alt=""/>
									</div>
									<div className="img">
										<img src="/images/mobile_10.png" alt=""/>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="partner-wrap">
				<div className="container">
					<div className="bd">
						<h4 className="mobile-title">
							As a bonus, <br/>
							Enjoy our <span>exclusive deals!</span>
						</h4>
						<p className="mobile-desc">
							Instead of putting money into <br/>
							digital marketing trying to <br/>
							convince you to use their <br/>
							products, our partners give <br/>
							you cash back directly for <br/>
							choosing them. 
						</p>
						<h4>As a bonus, enjoy our exclusive deals!</h4>
						<p>
							Instead of putting money into digital marketing trying to convince you to use their <br />
							products, our partners give you cash back directly for choosing them. .
						</p>
						<ul>
							<li>
								<div className="img">
									<img src="/images/img_05.png" alt="" />
								</div>
							</li>
							<li>
								<div className="img">
									<img src="/images/img_06.png" alt="" />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="getoffer-wrap">
				<div className="container">
					<h4>$<span className='number'>248,430</span></h4>
					<p className='t1'>Worth of cash rewards we’ve given out so far</p>
					<p className='t2'>Every 30 minutes, a homeowner requests an offer from HomeOptions</p>
					<p className='t2 mobie-t2'>
						Every 30 minutes, <br/> 
						a homeowner requests an offer <br/> 
						from HomeOptions
					</p>
					<button>Get My Free Offer</button>
				</div>
			</div>
			<div className="comment-wrap">
				<div className="container">
					<div className="hd">
						<h3>Hear it from our customers</h3>
					</div>
					<div className="bd">
						<div className="swiper">
							
						</div>
					</div>
				</div>
			</div>
			<div className="subscription-wrap">
				<div className="container">
					<div className="hd">
						<h3>Get expert tips in your inbox</h3>
						<p>Discover ways to increase your home's value and stay on top of local trends.</p>
					</div>
					<div className="bd">
						<div className="form g-form">
							<i></i>
							<input type="text" placeholder='Enter your email' />
							<button>Subscribe</button>
						</div>
						<div className="play">
							<div className="img">
								<img src="/images/img_07.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="faq-wrap">
				<div className="container">
					<div className="bd">
							<div className="left">
								<h3>Frequently Asked Questions</h3>
								<div className="desc">
									<p className="tip">Don’t see the answer to your question here?</p>
									<div className="us">
											<p className="tit">Call us at</p>
											<p className="phone">(800) 357-9992</p>
									</div>
									<p className="time">Mon to Fri 9:00AM to 6:00PM PST</p>
								</div>
							</div>
							<div className="right">
								<Collapse 
									className='faq-collapse'
									accordion 
									expandIconPosition={'right'}
								>
									<Panel header="Why would customers sign up with me?" key="1">
											<p>
												We are giving homeowners a cash reward up to $8000 that would otherwise have been in the
												pockets of ad platforms such as Facebook, Instagram or Zillow. Through signing up to
												HomeOptions, not only can customers get the cash today without any obligation to sell their
												home or repay us, they can access many exclusive deals to improve their home. Finally when
												they are ready to sell their home, they can list with a trusted agent whom they have a long
												relationship with - You.
											</p>
									</Panel>
									<Panel header="What do I need to do to get the $400 cash bonus?" key="2">
											<p>
												All you need to do is to walk through the contract with the customers and help them sign up!
												We have a simple user-friendly digital platform that requires minimal effort on your end, all
												of the manual operations is taken care of. You will get paid the same day your customer
												receives the cash (typically within 2 business days after signing the contract).
											</p>
									</Panel>
									<Panel header="How can I be guaranteed to my future business?" key="3">
											<p>
												For every customer you bring onto HomeOptions, you will be the default listing agent when
												they are ready to sell. Moreover, in both the customer and agent portal, we have built in
												special features such as “seamless sharing of deals” that will help reinforce a long-term
												customer-agent relationship. In rare scenarios where a customer you brought in explicitly
												requests a change of listing agent, you will be given another lead of similar property value
												to compensate your effort for signing this customer up initially.
											</p>
									</Panel>
									<Panel header="Will I get other leads apart from the customers I signed up?" key="4">
											<p>
												Yes! HomeOptions has many other customers who were not signed up by an agent. They need a top
												listing agent like yourself to help them sell their homes when they are ready. We will send
												you leads if there our customers in your area are in need of an agent.
											</p>
									</Panel>
									<Panel header="What’s the fee model?" key="5">
											<p>
												When customers sign up with HomeOptions and receive the cash reward up to $8,000, they have
											delegated HomeOptions network agents to help them sell whenever they are ready. HomeOptions
											will charge a referral fee when or if the transaction happens.
											</p>
									</Panel>
									<Panel header="Will my brokerage have to sign up?" key="6">
											<p>
												No. HomeOptions empowers agents just like you by helping you avoid the hurdles of client
												acquisition. Our policy has and will always be agent-first, and thus we do not require your
												brokerage to sign up with us.
											</p>
									</Panel>
								</Collapse>
							</div>
					</div>
					<div className="sign-up-btn">
							<a className="global-button">Sign Up Now</a>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Home