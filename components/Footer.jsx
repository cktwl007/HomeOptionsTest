import { useState, useEffect } from 'react'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="go-top isMobile">
					<button>
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
						<div className="item">
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
									<a >Privacy policy </a>
									<a >Terms & conditions</a>
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
				<div className="ft">
					<div className="license">
						<i></i><span>CA DRE License #02141969</span>
					</div>
					<div className="copy">
						Copyright &copy; 2022 HomeOptions, Inc.
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer