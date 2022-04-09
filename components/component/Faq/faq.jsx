import PropTypes from 'prop-types'
import { Collapse } from 'antd';
const { Panel } = Collapse;
import style from './faq.module.scss'
const Faq = (props) => {
	const data = props.data
	return (
		<div className={style.faq}>
			<div className={`container ${style.container}`}>
				<div className={style.hd}>
					<h3>Frequently Asked Questions</h3>
				</div>
				<div className={style.bd}>
					<div className={style.left}>
						<h3>Frequently Asked Questions</h3>
						<div className={style.txt}>
							<p className={style.title}>Don’t see the answer to your question here?</p>
							<p className={style.mobile_title}>
								Don’t see the answer to your <br /> question here?
							</p>
							<div className={style.desc}>
								<div className={style.us}>
									<p className={style.tit}>Call us at</p>
									<p className={style.phone}>(800) 357-9992</p>
								</div>
								<p className={style.time}>Mon to Fri 8:00AM to 9:00PM PST</p>
								<p className={style.time}>Sat / Sun 12:00PM to 8:00PM PST</p>
							</div>
						</div>
					</div>
					<div className={style.right}>
						<Collapse 
							className="faq_collapse"
							accordion 
							expandIconPosition={'right'}
						>	
							{
								data.map( item => {
									return (
										<Panel  header={item.title} key={item.id}>
											<p>{item.content}</p>
										</Panel>
									)
								})
							}
						</Collapse>
					</div>
				</div>
				<div className={style.sign_up_btn}>
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