import {
	arrowLeft,
	arrowRight,
	ball,
	dumbBell,
	ellipse,
	halfMoon,
	halfMoonComplete,
	leaf,
	lineWhite,
	Rectangle,
	threeDumbBell,
} from '../assets';

const SectionContainer = () => {
	return (
		<section className="section-container">
			<div className="section-title">
				<hr className="line-short" />
				<h4>Trusted Companies</h4>
				<hr className="line-short" />
			</div>

			<div className="section-icon-container">
				<img src={arrowLeft} className="arrow" alt="" />
				<div className="icon-item">
					<img src={leaf} alt="" />
					<h4 className="section-icon-title">logoipsum</h4>
				</div>
				<div className="icon-item">
					<img src={halfMoonComplete} alt="" />
					<img src={halfMoon} id="moon" alt="" />
					<h4 className="section-icon-title">logoipsum</h4>
				</div>
				<div className="icon-item">
					<img src={dumbBell} className="dumbBell" alt="" />
					<img src={threeDumbBell} className="dumbBell" alt="" />
					<img src={dumbBell} className="dumbBell" alt="" />
					<h4 className="section-icon-title">logoipsum</h4>
				</div>
				<div className="icon-item">
					<img src={ball} className="dumbBell" alt="" />

					<h4 className="section-icon-title">logoipsum</h4>
				</div>
				<img src={arrowRight} className="arrow" alt="" />
			</div>
			<img src={lineWhite} id="section-line" className="line" alt="" />
			<div className="section-heading">
				<div className="section-heading-title">
					<h3>Our services that we provide</h3>
				</div>
				<div className="section-heading-text">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
						libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
						arcu. Laoreet orci nisl etiam risus ut nec. Facilisi ipsum viverra
						diam arcu massa amet non metus ornare.
					</p>
				</div>
			</div>
			<div className="section-cards">
				<div className="section-card">
					<img src={ellipse} alt="" />
					<h4 className="section-card-title">Design</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
						libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
						arcu.
					</p>
				</div>

				<div className="section-card">
					<img src={Rectangle} alt="" />
					<h4 className="section-card-title">Development</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
						libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
						arcu.
					</p>
				</div>

				<div className="section-card">
					<img src={ellipse} alt="" />
					<h4 className="section-card-title">Marketing</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
						libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
						arcu.
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionContainer;
