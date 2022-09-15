import {
	facebookIcon,
	instaIcon,
	lineWhite,
	twitterIcon,
	vectorCircleWhite,
	vectorDotWhite,
	vectorSqaureWhite,
} from '../assets';

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="footer-item-text">Let’s work together</div>
			<div className="footer-item-text-button">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
					libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
					arcu.
				</p>
				<div className="button-container">
					<button>Let’s Talk</button>
				</div>
			</div>
			<div className="footer-item-icons">
				<div className="icon-container">
					<img className="icon-white" src={vectorSqaureWhite} alt="" />
					<img className="icon-white" src={vectorCircleWhite} alt="" />
					<img className="icon-white" src={vectorCircleWhite} alt="" />
					<div className="icon-title-white">
						<strong className="nav-text">logoipsum</strong>
						<img className="white-dot" src={vectorDotWhite} alt="" />
					</div>
				</div>
				<div className="social-icon-container">
					<div className="instagram-container">
						<img src={vectorCircleWhite} className="background" alt="" />
						<img src={instaIcon} className="icon" alt="" />
					</div>
					<div className="twitter-container">
						<img src={vectorCircleWhite} className="background" alt="" />
						<img src={twitterIcon} className="icon" alt="" />
					</div>
					<div className="facebook-container">
						<img src={vectorCircleWhite} className="background" alt="" />
						<img src={facebookIcon} className="icon" alt="" />
					</div>
				</div>
			</div>
			<div className="contact">
				<div className="address-container">
					<h4>Address</h4>
					<p>0199 Taylor Park, North Dakota, USA</p>
				</div>
				<div className="call-us-container">
					<h4>Call us on</h4>
					<p>+1 98723 42023 info@logoipsum.com</p>
				</div>
				<div className="policy-container">
					<h4>Our Policies</h4>
					<p>Privacy Policy Terms of Use Refund Policy</p>
				</div>
			</div>
			<img src={lineWhite} alt="" className="line" />
			<div className="copyright">Copyright © Webalar. All Rights Reserved</div>
		</footer>
	);
};

export default Footer;
