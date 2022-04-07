import PropTypes from 'prop-types'
import { Collapse } from 'antd';
const { Panel } = Collapse;
const Faq = (props) => {
	const data = props.data
	return (
		<div className="faq-wrap">
			<div className="container">
				<div className="hd">
					<h3>Frequently Asked Questions</h3>
				</div>
				<div className="bd">
					<div className="left">
						<h3>Frequently Asked Questions</h3>
						<div className="txt">
							<p className="title">Don’t see the answer to your question here?</p>
							<p className="mobile-title">
								Don’t see the answer to your <br /> question here?
							</p>
							<div className="desc">
								<div className="us">
									<p className="tit">Call us at</p>
									<p className="phone">(800) 357-9992</p>
								</div>
								<p className="time">Mon to Fri 8:00AM to 9:00PM PST</p>
								<p className="time">Sat / Sun 12:00PM to 8:00PM PST</p>
							</div>
						</div>
					</div>
					<div className="right">
						<Collapse 
							className='faq-collapse'
							accordion 
							expandIconPosition={'right'}
						>	
							{
								data.map( item => {
									return (
										<Panel header={item.title} key={item.id}>
											<p>{item.content}</p>
										</Panel>
									)
								})
							}
						</Collapse>
					</div>
				</div>
				<div className="sign-up-btn">
					<a className="global-button">Sign Up Now</a>
				</div>
			</div>
		</div>
	)
}
Faq.propTypes = {
	data: PropTypes.array.isRequired,
}
export default Faq