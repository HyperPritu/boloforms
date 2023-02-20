import React from 'react';
import './premium.css';
import Img from '../../assets/premium.jpg';

function Hero() {
	return (
		<section className="premium section">
			<div className="premium__content grid">
				<div className="premium__image">
					<img src={Img} alt="" />
				</div>
				<div className="premium__data">
					<h1 className="hero__title">An End-To-End Workflow Platform For All Your Business Needs</h1>
					<p className="hero__subtitle">1000+ companies-from Startups to Fortune 500s use BoloForms Approvals to build and manage business processes across departments.</p>
					<button className="button button__flex hero__button">
						<i class="uil uil-rocket button__icon"></i>BoloForms Premium
					</button>
				</div>
			</div>
		</section>
	);
}

export default Hero;
