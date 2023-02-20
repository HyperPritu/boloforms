import React from 'react';
import './hero.css';
import YoutubeEmbed from './YoutubeEmbed';

function Hero() {
	return (
		<section className="hero section" id="hero">
			<div className="hero__container grid">
				<div className="hero__content grid">
					<div className="hero__data">
						<h1 className="hero__title">Transform Google Forms Into Interactive Workflows</h1>
						<p className="hero__subtitle">BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes.</p>
						<button className="button button__flex hero__button">
							<i class="uil uil-rocket button__icon"></i>Install for Free
						</button>
					</div>
					<div className="hero__video">
						<YoutubeEmbed embedId="rokGy0huYEA" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
