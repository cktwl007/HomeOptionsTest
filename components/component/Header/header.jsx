import { useState, useEffect } from 'react'
import Link from 'next/link'
import ActiveLink from '../../common/ActiveLink'
import { useRouter } from 'next/router'
import style from './header.module.scss'
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
		if(e.target.className !== 'nav_box'){
			setIsMenuOpen(false)
			setNavBg(false)
		}
	}
	return (
		<header className={style.header}>
			<div className={ `${style.header_fiexd} ${navBg ? style.bg_white : ""}` }>
				<div className={`container ${style.container}` }>
					<div className={style.logo}>
						<Link  href="/"><a></a></Link>
					</div>
					<nav className={ `${style.nav} ${isMenuOpen ? style.show : ""}`} onClick={mobileIsNavFade}>
						<div className={style.nav_box}>
							<ul>
								<li key="1">
									<ActiveLink activeClassName={style.active} href="/"><a>HOME</a></ActiveLink>
								</li>
								<li key="2">
									<ActiveLink activeClassName={style.active} href="/about"><a>ABOUT US</a></ActiveLink >
								</li>
								<li key="3">
									<ActiveLink activeClassName={style.active} href="/blogs"><a>BLOGS</a></ActiveLink >
								</li>
								<li key="4">
									<ActiveLink activeClassName={style.active} href="/agent"><a>AGENTS</a></ActiveLink >
								</li>
							</ul>
							<div className={style.login_btn}>
								<a className="global-button">Log In</a>
							</div>
						</div>
					</nav>
					<div className={`${style.gh} ${isMenuOpen ? style.selected : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<a></a>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header