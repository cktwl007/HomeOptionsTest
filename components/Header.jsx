import { useState, useEffect } from 'react'
import Link from 'next/link'
import ActiveLink from './ActiveLink'
const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [navBg, setNavBg] = useState(false);
	const [navActive, setNavActive] = useState(false);
	const changeNavBg = () => {
		if (window.scrollY <= 0) {
			setNavBg(false);
		} else {
			setNavBg(true);
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', changeNavBg);
		return () => {
			window.removeEventListener('scroll', changeNavBg);
		}
	}, [])
	return (
		<header className='header'>
			<div className={`header-fiexd ${navBg ? "bg-white" : ""}`}>
				<div className="container">
					<div className="logo">
						<Link  href="/"><a></a></Link>
					</div>
					<nav className={`nav ${isMenuOpen ? "show" : ""}`}>
						<div className="nav-box">
							<ul>
								<li className="active" key="1">
									<ActiveLink activeClassName="active" href="/"><a>HOME</a></ActiveLink>
								</li>
								<li key="2">
									<ActiveLink activeClassName="active" href="/about"><a>ABOUT US</a></ActiveLink >
								</li>
								<li key="3">
									<ActiveLink activeClassName="active" href="/blogs"><a>BLOGS</a></ActiveLink >
								</li>
								<li key="4">
									<ActiveLink activeClassName="active" href="/agent"><a>AGENTS</a></ActiveLink >
								</li>
							</ul>
							<div className="login-btn">
								<a className="global-button">Log In</a>
							</div>
						</div>
					</nav>
					<div className={`gh ${isMenuOpen ? "selected" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<a></a>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header