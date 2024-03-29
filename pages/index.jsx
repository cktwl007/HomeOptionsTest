import React, {useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import Head from 'next/head';
import Link from 'next/link';
import Faq  from '../components/component/Faq/faq'
import style  from '../public/scss/index.module.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation } from "swiper"
// Import CounUp.js 数字滚动效果
import CountUp from 'react-countup';
// 页面滚动监听
import VisibilitySensor from "react-visibility-sensor";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation"

const Home = () => {
	const [labelId,setLabelId] = useState('')
	const faqData = [
		{
			id:1,
			title:"What does HomeOptions do?",
			content:"We are a 100% free service that pays you to join. We build relationships with homeowners and real estate agents to take the hassle out of selling your home.",
		},
		{
			id:2,
			title:"Are there any hidden fees?",
			content:"No. you don’t ever have to pay us.",
		},
		{
			id:3,
			title:"Do I have to pay you back?",
			content:"There's no need to pay us back! The money we provide you is not a loan. We earn it back later by getting a referral fee from the agent's commission on your home sale.",
		},
		{
			id:4,
			title:"Who is eligible to apply?",
			content:"Everyone who owns a property / part of a property is welcome to apply.",
		},
		{
			id:5,
			title:"What if I decide to not sell my home?",
			content:"You don't have to sell your house at all. The program is designed to give people access to the best real estate agents when you are ready to sell. Most people join the program without knowing if they will ever sell their home. If you decide to never sell your home you still keep the money. That is a loss for us and a risk that we’ve already considered.",
		},
		{
			id:6,
			title:"Can I choose my own agent?",
			content:"Simply connect us with your preferred agent and once they’ve successfully joined our network you are free to list your home through them.",
		},
	]
	const countUpProps = {
		star: 0,
		duration: 1.5,
		useEasing: true,
		useGrouping: true,
		separator: ','
	}
	const useScroll = () => {
		useEffect( () => {
			let height = document.querySelector('.wroks-wrap ul li').clientHeight;
			let top = document.querySelector('.wroks-wrap').offsetTop;
			let setp1 = top - 390;
			let setp2 = top + height / 1.2 - 45;
			let setp3 = top + (height * 2) - 45;
			let handleScroll = () => {
				let  winScrollTop = window.scrollY;
				if(winScrollTop >= setp1 && winScrollTop <= setp2 ){
					setLabelId('step1')
				} 
				if (winScrollTop >= setp2 && winScrollTop <= setp3 ){
					setLabelId('step2')
				} 
				if (winScrollTop >= setp3){
					setLabelId('step3')
				} 
			}
			document.addEventListener('scroll',handleScroll,true);
			return () => document.removeEventListener('scroll',handleScroll);
		})
	} 
	useScroll()
	return (
		<>
			<div className={style.home_banner}>
				{/* <div className="mobile-bg">
					<div className="bg-top"></div>
					<div className="bg-middle"></div>
					<div className="bg-bottom"></div>
				</div> */}
				<div className={`container ${style.container}`}>
					<h3 className='wow  fadeInDown' data-wow-delay=".2s">
						Take control of your <br />
						selling power
					</h3>
					<h3 className={`${style.mobile_tit} wow  fadeInDown`} data-wow-delay=".2s">
						Take control of <br />
						your selling <br />
						power
					</h3>
					<p className="wow fadeInUp"  data-wow-delay=".2s">Get up to <span>$8,000</span> now for letting us sell your home when you’re ready</p>
					<div className={`${style.form} g-form wow fadeInUp`} data-wow-delay=".3s">
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
				<div className={style.tips}>HomeOptions is a licensed real estate broker connecting customers with top agents</div>
				<div className={style.picture}>
					<img id="picture"  src="/images/house.png" alt="" />
				</div>
			</div>
			<div className={`wroks-wrap ${style.home_wroks}`}>
				<div className="container">
					<div className="hd">
						<h3>How it works</h3> 
					</div>
					<div className="bd">
						<div className="vertical-line"></div>
						<ul>
							<li id='page1'>
								<div className="circle">
									<i></i>
								</div>
								<div className="number">Step 1</div>
								<div className="title">Discover your home’s value</div>
								<div className="desc">
									Input basic information and find out how much cash you can get 
									today if let us sell <br /> your home for you in the future. No committment here, just check it out.
								</div>
								<div className="img isMobile">
									<img src="/images/mobile_04.png" alt=""/>
								</div>
							</li>
							<li id='page2'>
								<div className="circle">
									<i></i>
								</div>
								<div className="number" >Step 2</div>
								<div className="title">Hop on a call and receive cash</div>
								<div className="desc">
									If you like the deal we offer you, our sales rep will hop on a call with you to go through details. Sign the contract and cash your check.
								</div>
								<div className="img isMobile">
									<img src="/images/mobile_05.png" alt=""/>
								</div>
							</li>
							<li id='page3' className={style.page3}>
								<div className="circle">
									<i></i>
								</div>
								<div className="number">Step 3</div>
								<div className={`title ${style.title}`}>
									Sell with America’s top 10% real 
									estate agents when you’re ready
								</div>
								<div className="desc">
									A good agent vs an agent from discount platform helps you at least sell your home at a 20% higher price. We only partner with the best.
								</div>
								<div className="img isMobile">
									<img src="/images/mobile_06.png" alt=""/>
								</div>
							</li>
						</ul>
						<div className={`wroks-anim-sticky ${style.wroks_anim_sticky}`} id={labelId}>
							<div className="wroks-anim">
								<div className={`item home_step1_anim ${style.item}`}>
									<img className='pictrue' src="/images/img_02.png" alt=""/>
								</div>
								<div className={`item home_step2_anim ${style.item}`}>
									<img className='pictrue' src="/images/img_03.png" alt=""/>
								</div>	
								<div className={`item home_step3_anim ${style.item}`}>
									<img className='pictrue' src="/images/img_04.png" alt=""/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={style.partner_wrap}>
				<div className="container">
					<div className={style.bd}>
						<h4 className={style.mobile_title}>
							As a bonus, <br/>
							Enjoy our <span>exclusive deals!</span>
						</h4>
						<p className={style.mobile_desc}>
							Instead of putting money into <br/>
							digital marketing trying to <br/>
							convince you to use their <br/>
							products, our partners give <br/>
							you cash back directly for <br/>
							choosing them. 
						</p>
						<h4>As a bonus, enjoy our <span>exclusive deals!</span></h4>
						<p>
							Instead of putting money into digital marketing trying to convince you to use their <br />
							products, our partners give you cash back directly for choosing them.
						</p>
						<ul>
							<li>
								<div className={`img ${style.img}`}>
									<img src="/images/img_05.png" alt="" />
								</div>
							</li>
							<li>
								<div className={`img ${style.img}`}>
									<img src="/images/img_06.png" alt="" />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={style.getoffer_wrap}>
				<div className={`container ${style.container}`}>
					<h4>
						$
						<VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
							{({ isVisible }) => (
								<span className={style.number}>
									{isVisible ? <CountUp  end={366663}  {...countUpProps}  /> : '366663'}
								</span>
							)}
						</VisibilitySensor>
					</h4>
					<p className={style.t1}>Worth of cash rewards we’ve given out so far</p>
					<p className={style.t2}>Every 30 minutes, a homeowner requests an offer from HomeOptions</p>
					<p className={`${style.t2} ${style.mobie_t2}`}>
						Every 30 minutes, <br/> 
						a homeowner requests an offer <br/> 
						from HomeOptions
					</p>
					<button>Get My Free Offer</button>
				</div>
			</div>
			<div className={style.comment_wrap}>
				<div className="container">
					<div className={style.hd}>
						<h3>Hear it from our customers</h3>
					</div>
					<div className={style.bd}>
						<Swiper
							className={`home_swiper ${style.home_swiper}`}
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
							<SwiperSlide className={style.item}>
								<div className={style.box}>
									<div className={style.img}>
										<img src="/images/avatar_01.png" alt="" />
									</div>
									<div className={style.txt}>
										<div className={style.desc}>
											<p>It was good to try this site as it brings benefits of owning a home like we have never experienced before.</p>
										</div>
										<p className={style.name}>David Wallace</p>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className={style.item}>
								<div className={style.box}>
										<div className={style.img}>
											<img src="/images/avatar_03.png" alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.desc}>
												<p>The site literally pays you to use it. The services provided are superb, it can't get better.</p>
											</div>
											<p className={style.name}>Johnny Nguyen</p>
										</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className={style.item}>
								<div className={style.box}>
										<div className={style.img}>
											<img src="/images/avatar_04.png" alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.desc}>
												<p>A really good company to consider if you have plans of selling your house in the future. </p>
											</div>
											<p className={style.name}>Cristhiam Tirado</p>
										</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className={style.item}>
								<div className={style.box}>
										<div className={style.img}>
											<img src="/images/avatar_05.png" alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.desc}>
												<p>I got my money transfer in less than 24 hours.</p>
											</div>
											<p className={style.name}>Ava Larry</p>
										</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
			<div className={style.subscription_wrap}>
				<div className="container">
					<div className={style.hd}>
						<h3>Get expert tips in your inbox</h3>
						<p>Discover ways to increase your home's value and stay on top of local trends.</p>
					</div>
					<div className={style.bd}>
						<div className={`${style.form} g-form`}>
							<i></i>
							<input type="text" placeholder='Enter your email' />
							<button>Subscribe</button>
						</div>
						<div className={style.play}>
							{/* <div className="img" onClick={ () => setIsPlay(true) }>
								<img src="/images/img_07.png" alt="" />
							</div> */}
							<iframe className={style.video_box} width="100%" height="100%" src="https://www.youtube.com/embed/itB0B6n3tsg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
					</div>
				</div>
			</div>
			<Faq data={faqData}></Faq>
		</>
	)
}

export default Home