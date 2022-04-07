import { useState, useEffect } from 'react'
import Link from 'next/link'
import ActiveLink from './ActiveLink'
import { useRouter } from 'next/router'
const Header = (props) => {
	const { asPath, isReady } = useRouter()
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [navBg, setNavBg] = useState(false);
	const changeNavBg = () => {
		if (window.scrollY <= 0) {
			setNavBg(false);
		} else {
			setNavBg(true);
		}
	}
	
	useEffect(() => {
		if(window.outerWidth <= 1199){
			if(isReady){
				setIsMenuOpen(false)
				setNavBg(false)
			}
		}
		window.addEventListener('scroll', changeNavBg);
		return () => {
			window.removeEventListener('scroll', changeNavBg);
		}
	}, [asPath,isReady])
	// 移动端事件委托
	const mobileIsNavFade = (e) =>{
		if(e.target.className !== 'nav-box'){
			setIsMenuOpen(false)
			setNavBg(false)
		}
	}
	return (
		<header className='header'>
			<div className={`header-fiexd ${navBg ? "bg-white" : ""}`}>
				<div className="container">
					<div className="logo">
						<Link  href="/"><a></a></Link>
					</div>
					<nav className={`nav ${isMenuOpen ? "show" : ""}`} onClick={mobileIsNavFade}>
						<div className="nav-box">
							<ul>
								<li key="1">
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