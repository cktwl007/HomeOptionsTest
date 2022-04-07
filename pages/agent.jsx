import React, {useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Faq  from '../components/Faq'
const Agent = () =>{
	const [labelId,setLabelId] = useState('')
	const faqData = [
		{
			id:1,
			title:'What does HomeOptions do?',
			content:'We are a 100% free service that pays you to join. We build relationships with homeowners and real estate agents to take the hassle out of selling your home.',
		},
		{
			id:2,
			title:'Are there any hidden fees?',
			content:'No. you don’t ever have to pay us.',
		},
		{
			id:3,
			title:'Do I have to pay you back?',
			content:"There's no need to pay us back! The money we provide you is not a loan. We earn it back later by getting a referral fee from the agent's commission on your home sale.",
		},
		{
			id:4,
			title:"Who is eligible to apply?",
			content:"Everyone who owns a property / part of a property is welcome to apply.",
		},
		{
			id:5,
			title:'What if I decide to not sell my home?',
			content:"You don't have to sell your house at all. The program is designed to give people access to the best real estate agents when you are ready to sell. Most people join the program without knowing if they will ever sell their home. If you decide to never sell your home you still keep the money. That is a loss for us and a risk that we’ve already considered.",
		},
		{
			id:6,
			title:'Can I choose my own agent?',
			content:"Simply connect us with your preferred agent and once they’ve successfully joined our network you are free to list your home through them.",
		},
	] 
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
			<div className="banner-wrap">
				<div className="container">
					<div className="content">
						<h3 className="isPc wow fadeInDown" data-wow-delay=".4s" data-wow-duration="1.4s">
							No more unpredictable <br/>
							marketing dollars,<br/>
							our leads close 100%
						</h3>
						<h3 className="isMobile wow fadeInDown" data-wow-delay=".4s" data-wow-duration="1.4s">
							No more <br/>
							unpredictable<br/>
							marketing dollars
						</h3>
						<p className="isPc desc wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1.4s">Lock in your future business today with HomeOptions.</p>
						<p className="isMobile desc wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1.4s">
							Our leads close 100%. <br/>
							Lock in your future business <br/>
							today with HomeOptions.
						</p>
						<div className="btn wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1.4s">
							<a className="global-button" >Sign Up Now</a>
						</div>
						<p className="tip wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1.4s">Already signed up? <a >Log in</a></p>
					</div>
					<div className="pictrue">
						<img src="/images/img_01.png" alt="" />
					</div>
				</div>	
			</div>
			<div className="wroks-wrap">
				<div className="container">
					<div className="hd">
						<h3>How it works</h3>
					</div>
					<div className="bd">
						<div className="vertical-line"></div>
						<ul>
							<li id="page1">
								<div className="circle">
									<i></i>
								</div>
								<div className="number">Step 1</div>
								<div className="title">Sign clients up</div>
								<div className="desc">
									Help us give out up to $8,000 in cash rewards to every client who signs up with HomeOptions. All you have to do is walk your customers through a seamless digital sign-up process.
								</div>
								<div className="img isMobile">
									<img src="/images/mobile_01.png" alt=""/>
								</div>
							</li>
							<li id="page2">
								<div className="circle">
									<i></i>
								</div>
								<div className="number" >Step 2</div>
								<div className="title">Earn instant cash bonus</div>
								<div className="desc">
									Earn $400 cash bonus every time your customers get cash rewards from us. Within 48 hours upon successful signup, we will pay your customers. When they receive their rewards, you receive your bonus! 
								</div>
								<div className="img isMobile">
									<img src="/images/mobile_02.png" alt=""/>
								</div>
							</li>
							<li id="page3">
								<div className="circle">
									<i></i>
								</div>
								<div className="number" >Step 3</div>
								<div className="title">Enjoy guaranteed leads</div>
								<div className="desc">
									Be the future selling agent for the clients you signed up or the other homeowners on our platform who want to sell their home. Unlike any other platforms, our clients are leads that will close 100%.
								</div>
								<div className="img isMobile">
									<img src="/images/mobile_03.png" alt=""/>
								</div>
							</li>
						</ul>
						<div className="wroks-anim-sticky" id={labelId}>
							<div className="wroks-anim">
								<div className="item step1-anim">
									<img className="bg" src="/images/anim_01_bg1.png" alt=""/>
									<picture>
										<source media="(max-width:1024px)" srcSet="/images/mobile_01.png"/>
										<img className="pictrue" src="/images/anim_01.png" alt=""/>
									</picture>
								</div>
								<div className="item step2-anim">
									<img className="bg bg-left" src="/images/anim_02_bg1.png" alt=""/>
									<img className="bg bg-right" src="/images/anim_02_bg2.png" alt=""/>
									<picture>
										<source media="(max-width:1024px)" srcSet="/images/mobile_02.png"/>
										<img className="pictrue" src="/images/anim_02.png" alt=""/>
									</picture>
								</div>	
								<div className="item step3-anim">
									<img className="bg" src="/images/anim_03_bg.png" alt=""/>
									<div className="anim-confetti">
										<img className="c1 left" src="/images/left_01.png" alt=""/>
										<img className="c2 left" src="/images/left_02.png" alt=""/>
										<img className="c3 left" src="/images/left_03.png" alt=""/>
										<img className="c4 left" src="/images/left_04.png" alt=""/>
										<img className="c5 left" src="/images/left_05.png" alt=""/>
										<img className="c6 right" src="/images/right_01.png" alt=""/>
										<img className="c7 right" src="/images/right_02.png" alt=""/>
										<img className="c8 right" src="/images/right_03.png" alt=""/>
										<img className="c9 right" src="/images/right_04.png" alt=""/>
										<img className="c10 right" src="/images/right_05.png" alt=""/>
										<img className="c11 right" src="/images/right_06.png" alt=""/>
										<img className="c12 right" src="/images/right_07.png" alt=""/>
									</div>
									<picture>
										<source media="(max-width:1024px)" srcSet="/images/mobile_03.png"/>
										<img className="pictrue" src="/images/anim_03.png" alt=""/>
									</picture>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="contact-wrap">
				<div className="container">
					<h3 className="title " >Get leads that close 100%</h3>
					<p className="desc">Join hundreds of others and sign up today!</p>
					<div className="form">
						<form >
							<i></i>
							<input className="input-block" type="email" placeholder="Enter your email" />
							<input className="submit-btn" type="submit" value="Sign Me Up" />
						</form>
					</div>
				</div>
			</div>
			<Faq data={faqData}></Faq>
		</>
	)
}

export default Agent