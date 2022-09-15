import { cardArrow, cardCircle } from '../assets';

const OurWorks = () => {
	return (
		<main className="cards">
			<div className="card">
				<div className="card-pic"></div>
				<div className="card-text-button">
					<h3>Project</h3>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
					<img src={cardCircle} alt="" className="card-circle" />
					<img src={cardArrow} alt="" className="card-arrow" />
				</div>
			</div>
			<div className="card">
				<div className="card-pic"></div>
				<div className="card-text-button">
					<h3>Project 2</h3>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
					<img src={cardCircle} alt="" className="card-circle" />
					<img src={cardArrow} alt="" className="card-arrow" />
				</div>
			</div>
			<div className="card">
				<div className="card-pic"></div>
				<div className="card-text-button">
					<h3>Project 3</h3>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
					<img src={cardCircle} alt="" className="card-circle" />
					<img src={cardArrow} alt="" className="card-arrow" />
				</div>
			</div>
		</main>
	);
};

export default OurWorks;
