import { useState } from 'react';

import { ContactUs } from './';

const FormContainer = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phNum, setphNum] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setError(false);
		if (!name || !email || !phNum || !message) {
			setError(true);
			return;
		} else {
			window.location.assign(
				'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=developers@webalar.in'
			);
		}
	};

	return (
		<main className="form-main">
			<h1>Connect with us</h1>
			<section className="section-form-container">
				<div className="form-container">
					<form action="" className="form">
						<h3>Tell us about your project</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
							lobortis mi vulputate potenti orci.
						</p>
						<div className="name-container">
							<label htmlFor="" className="label-name">
								Your Name
							</label>
							<input
								type="text"
								name="name"
								id=""
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="email-ph">
							<div className="email-container">
								<label htmlFor="" className="label-name">
									Your Email
								</label>
								<input
									type="email"
									name="email"
									id=""
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="phone-container">
								<label htmlFor="" className="label-name">
									Your Phone Number
								</label>
								<input
									type="tel"
									name="phone"
									id=""
									onChange={(e) => setphNum(e.target.value)}
								/>
							</div>
						</div>

						<div className="message-container">
							<label htmlFor="" className="label-name">
								Your Message
							</label>
							<textarea
								name="message"
								id=""
								cols="30"
								rows="10"
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
							{error && (
								<p style={{ color: 'red' }}> please enter all values</p>
							)}
						</div>
						<button type="click" className="form-button" onClick={handleSubmit}>
							Submit
						</button>
					</form>
				</div>
				<ContactUs />
			</section>
		</main>
	);
};

export default FormContainer;
