import {useEffect } from 'react';
import Head from 'next/head'
import Header from '../components/component/Header/header'
import Footer from '../components/component/Footer/footer'
import "antd/dist/antd.css"
import "../public/css/normalize.css" 
import "../public/scss/common.scss"
// import "../public/scss/style.scss"
// import "../public/scss/responsive.scss"
const MyApp = ({ Component, pageProps }) => {
	useEffect(()=>{
		new WOW().init();
	})
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="renderer" content="webkit" />
				<meta name="force-rendering" content="webkit" />
				<meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
				<title>HomeOptions</title>
				<meta name="description" content="" />
				<meta name="keywords" content="" />
				<meta name="viewport"
					content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=no, viewport-fit=cover"/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" href="/css/animate.min.css" />
				{/* <link rel="stylesheet" type="text/css" href="/css/style.css" />	 */}
				{/* <link rel="stylesheet" type="text/css" href="/css/responsive.css" /> */}
				<script src="/js/wow.js"></script>
			</Head>
			<Header></Header>
			<Component {...pageProps}/>
			<Footer></Footer>
		</>
	)
}

export default MyApp