import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "antd/dist/antd.css"
import "../public/css/normalize.css"
const MyApp = ({ Component, pageProps }) => {
	return (
		<div className='layout'>
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
				<link rel="stylesheet" type="text/css" href="/css/common.css" />
				<link rel="stylesheet" type="text/css" href="/css/style.css" />
				<link rel="stylesheet" type="text/css" href="/css/responsive.css" />
			</Head>
			<Header></Header>
			<Component {...pageProps}/>
			<Footer></Footer>
		</div>
	)
}
export default MyApp