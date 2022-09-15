import React from 'react';
import { mainImage } from '../assets';

const MainContainer = () => {
	return (
		<main className="main-container">
			<div className="main-text-content">
				<h2 className="main-title">Let’s create something great together</h2>

				<div className="main-text-button">
					<p className="main-title-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nec
						ultrices venenatis in. Sed elit aenean mattis vulputate aliquet
						vitae.
					</p>
					<button className="main-button">Let's Talk</button>
				</div>
			</div>
			<div className="image-container">
				<img className="main-image" src={mainImage} alt="" />
			</div>
		</main>
	);
};

export default MainContainer;
