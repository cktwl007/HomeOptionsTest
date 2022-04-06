import React, {useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import Head from 'next/head';
import Link from 'next/link';
// 折叠面板
import { Collapse } from 'antd';
const { Panel } = Collapse;
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation } from "swiper"
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation"
// Import CounUp.js 数字滚动效果
import CountUp from 'react-countup';
// 页面滚动监听
import VisibilitySensor from "react-visibility-sensor";

const Home = () => {
	const [isPlay, setIsPlay] = useState(false);
	const countUpProps = {
		star: 0,
		duration: 1.5,
		useEasing: true,
		useGrouping: true,
		separator: ','
	}
	let isLoading = true
	return (
		<>
			<div className="home-banner">
				<div className="mobile-bg">
					<div className="bg-top"></div>
					<div className="bg-middle"></div>
					<div className="bg-bottom"></div>
				</div>
				<div className="container">
					<h3 className=' wow  fadeInDown' data-wow-delay=".2s">
						Take control of your <br />
						selling power
					</h3>
					<h3 className='mobile-tit wow  fadeInDown' data-wow-delay=".2s">
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
				<div className="tips">HomeOptions is a licensed real estate broker connecting customers with top agents</div>
				<div className="picture">
					<img id="picture" className={isLoading ? 'anit' : "" } src="/images/house.png" alt="" />
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
			<div className="mobil-home-works">
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
							products, our partners give you cash back directly for choosing them.
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
					<h4>
						$
						<VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
							{({ isVisible }) => (
								<span className='number'>
									{isVisible ? <CountUp  end={248430}  {...countUpProps}  /> : '248430'}
								</span>
							)}
						</VisibilitySensor>
					</h4>
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
						<Swiper
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
							}}
							slidesPerView={'auto'}
							navigation={true}
							loop={true}
							loopFillGroupWithBlank={true}
							centeredSlides={true}
							modules={[ Navigation]}
						>
							<SwiperSlide className='item'>
								<div className="box">
										<div className="img">
											<img src="/images/avatar_01.png" alt="" />
										</div>
										<div className="txt">
											<div className="desc">
												<p>It was good to try this site as it brings benefits of owning a home like we have never experienced before.</p>
											</div>
											<p className="name">David Wallace</p>
										</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className='item'>
								<div className="box">
										<div className="img">
											<img src="/images/avatar_03.png" alt="" />
										</div>
										<div className="txt">
											<div className="desc">
												<p>The site literally pays you to use it. The services provided are superb, it can't get better.</p>
											</div>
											<p className="name">Johnny Nguyen</p>
										</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className='item'>
								<div className="box">
										<div className="img">
											<img src="/images/avatar_04.png" alt="" />
										</div>
										<div className="txt">
											<div className="desc">
												<p>A really good company to consider if you have plans of selling your house in the future. </p>
											</div>
											<p className="name">Cristhiam Tirado</p>
										</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className='item'>
								<div className="box">
										<div className="img">
											<img src="/images/avatar_05.png" alt="" />
										</div>
										<div className="txt">
											<div className="desc">
												<p>I got my money transfer in less than 24 hours.</p>
											</div>
											<p className="name">Ava Larry</p>
										</div>
								</div>
							</SwiperSlide>
						</Swiper>
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
						<div className={`play ${ isPlay ? "active" : ""}`}>
							<div className="img" onClick={ () => setIsPlay(true) }>
								<img src="/images/img_07.png" alt="" />
							</div>
							<iframe className='video-box' width="100%" height="100%" src="https://www.youtube.com/embed/itB0B6n3tsg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
									<p className="time">Mon to Fri 8:00AM to 9:00PM PST</p>
									<p className="time">Sat / Sun 12:00PM to 8:00PM PST</p>
								</div>
							</div>
							<div className="right">
								<Collapse 
									className='faq-collapse'
									accordion 
									expandIconPosition={'right'}
								>
									<Panel header="What does HomeOptions do?" key="1">
											<p>
											We are a 100% free service that pays you to join. We build relationships with homeowners and real estate agents to take the hassle out of selling your home.
											</p>
									</Panel>
									<Panel header="Are there any hidden fees?" key="2">
											<p>
												No. you don’t ever have to pay us.
											</p>
									</Panel>
									<Panel header="Do I have to pay you back?" key="3">
											<p>
											There's no need to pay us back! The money we provide you is not a loan. We earn it back later by getting a referral fee from the agent's commission on your home sale.
											</p>
									</Panel>
									<Panel header="Who is eligible to apply?" key="4">
											<p>
											Everyone who owns a property / part of a property is welcome to apply.
											</p>
									</Panel>
									<Panel header="What if I decide to not sell my home?" key="5">
											<p>
											You don't have to sell your house at all. The program is designed to give people access to the best real estate agents when you are ready to sell. Most people join the program without knowing if they will ever sell their home. If you decide to never sell your home you still keep the money. That is a loss for us and a risk that we’ve already considered.
											</p>
									</Panel>
									<Panel header="Can I choose my own agent?" key="6">
											<p>
											Simply connect us with your preferred agent and once they’ve successfully joined our network you are free to list your home through them.
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
		</>
	)
}

export default Home