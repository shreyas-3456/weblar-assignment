import { Link } from 'react-router-dom';
import { vectorCircle, vectorDot, vectorSquare } from '../assets';

const Navbar = () => {
	return (
		<nav className="nav-container">
			<div className="nav-icons">
				<img className="nav-icon" src={vectorSquare} alt="" />
				<img className="nav-icon" src={vectorCircle} alt="" />
				<img className="nav-icon" src={vectorCircle} alt="" />
			</div>
			<div className="nav-text">
				logoipsum
				<img src={vectorDot} alt="" />
			</div>
			<div className="nav-items">
				<Link to="/" className="nav-item">
					Home
				</Link>
				<Link to="/" className="nav-item">
					About
				</Link>
				<Link to="/contact" className="nav-item">
					Contact
				</Link>
				<button className="button">Get in Touch</button>
			</div>
		</nav>
	);
};

export default Navbar;
