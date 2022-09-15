import React from 'react';
import { facebookIcon, twitterIcon, instaIcon } from '../assets';
const ContactUs = () => {
	return (
		<div className="contact-us">
			<div className="address">
				<h3>Address</h3>
				<p>0199 Taylor Park, North Dakota, USA</p>
				<hr className="line-break" />
			</div>
			<div className="call-us">
				<h3>Call us on</h3>
				<p>
					+1 98723 42023 <br />
					info@logoipsum.com
				</p>
				<hr className="line-break" />
			</div>
			<div className="social-address">
				<h3>Social Media</h3>
				<div className="icon-block">
					<div className="form-icon-container">
						<div className="container"></div>
						<img src={instaIcon} alt="" />
					</div>
					<div className="form-icon-container" id="twitter">
						<div className="container"></div>
						<img src={twitterIcon} alt="" />
					</div>
					<div className="form-icon-container" id="insta">
						<div className="container"></div>
						<img src={facebookIcon} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
