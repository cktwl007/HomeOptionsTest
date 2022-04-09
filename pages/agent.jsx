import React, {useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Faq  from '../components/component/Faq/faq'
import style  from '../public/scss/agent.module.scss'
const Agent = () =>{
	const [labelId,setLabelId] = useState('')
	const faqData = [
		{
			id:1,
			title:'Why would customers sign up with me?',
			content:`We are giving homeowners a cash reward up to $8000 that would otherwise have been in the
			pockets of ad platforms such as Facebook, Instagram or Zillow. Through signing up to
			HomeOptions, not only can customers get the cash today without any obligation to sell their
			home or repay us, they can access many exclusive deals to improve their home. Finally when
			they are ready to sell their home, they can list with a trusted agent whom they have a long
			relationship with - You.`,
		},
		{
			id:2,
			title:'What do I need to do to get the $400 cash bonus?',
			content:`All you need to do is to walk through the contract with the customers and help them sign up!
			We have a simple user-friendly digital platform that requires minimal effort on your end, all
			of the manual operations is taken care of. You will get paid the same day your customer
			receives the cash (typically within 2 business days after signing the contract).`,
		},
		{
			id:3,
			title:'How can I be guaranteed to my future business?',
			content:`For every customer you bring onto HomeOptions, you will be the default listing agent when
			they are ready to sell. Moreover, in both the customer and agent portal, we have built in
			special features such as “seamless sharing of deals” that will help reinforce a long-term
			customer-agent relationship. In rare scenarios where a customer you brought in explicitly
			requests a change of listing agent, you will be given another lead of similar property value
			to compensate your effort for signing this customer up initially.`,
		},
		{
			id:4,
			title:"Will I get other leads apart from the customers I signed up?",
			content:`
			Yes! HomeOptions has many other customers who were not signed up by an agent. They need a top
			listing agent like yourself to help them sell their homes when they are ready. We will send
			you leads if there our customers in your area are in need of an agent.
			`,
		},
		{
			id:5,
			title:'What’s the fee model?',
			content:`When customers sign up with HomeOptions and receive the cash reward up to $8,000, they have
			delegated HomeOptions network agents to help them sell whenever they are ready. HomeOptions
			will charge a referral fee when or if the transaction happens.`,
		},
		{
			id:6,
			title:'Will my brokerage have to sign up?',
			content:`No. HomeOptions empowers agents just like you by helping you avoid the hurdles of client
			acquisition. Our policy has and will always be agent-first, and thus we do not require your
			brokerage to sign up with us.`,
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
			<div className={style.banner_wrap}>
				<div className={`container ${style.container}`}>
					<div className={style.content}>
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
						<p className={`${style.desc} isPc  wow fadeInUp`} data-wow-delay=".4s" data-wow-duration="1.4s">Lock in your future business today with HomeOptions.</p>
						<p className={`${style.desc} isMobile  wow fadeInUp`} data-wow-delay=".4s" data-wow-duration="1.4s">
							Our leads close 100%. <br/>
							Lock in your future business <br/>
							today with HomeOptions.
						</p>
						<div className={`${style.btn} wow fadeInUp`} data-wow-delay=".4s" data-wow-duration="1.4s">
							<a className="global-button" >Sign Up Now</a>
						</div>
						<p className={`${style.tip} wow fadeInUp`} data-wow-delay=".4s" data-wow-duration="1.4s">Already signed up? <a >Log in</a></p>
					</div>
					<div className={style.pictrue}>
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
								<div className="item step1_anim">
									<img className="bg" src="/images/anim_01_bg1.png" alt=""/>
									<picture>
										<source media="(max-width:1024px)" srcSet="/images/mobile_01.png"/>
										<img className="pictrue" src="/images/anim_01.png" alt=""/>
									</picture>
								</div>
								<div className="item step2_anim">
									<img className="bg bg-left" src="/images/anim_02_bg1.png" alt=""/>
									<img className="bg bg-right" src="/images/anim_02_bg2.png" alt=""/>
									<picture>
										<source media="(max-width:1024px)" srcSet="/images/mobile_02.png"/>
										<img className="pictrue" src="/images/anim_02.png" alt=""/>
									</picture>
								</div>	
								<div className="item step3_anim">
									<img className="bg" src="/images/anim_03_bg.png" alt=""/>
									<div className="anim_confetti">
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
			<div className={style.contact_wrap}>
				<div className={`container ${style.container}`}>
					<h3 className={style.title} >Get leads that close 100%</h3>
					<p className={style.desc}>Join hundreds of others and sign up today!</p>
					<div className={style.form}>
						<form >
							<i></i>
							<input className={style.input_block} type="email" placeholder="Enter your email" />
							<input className={style.submit_btn} type="submit" value="Sign Me Up" />
						</form>
					</div>
				</div>
			</div>
			<Faq data={faqData}></Faq>
		</>
	)
}

export default Agent