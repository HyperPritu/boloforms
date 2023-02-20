import React from 'react';
import './working.css'
import img1 from '../../assets/w1.svg';
import img2 from '../../assets/w2.svg';
import img3 from '../../assets/w3.svg';
import Testimonial from '../Testimonial/Testimonial';
import Button from '../Testimonial/Button';


function Working() {
	return (
		<section className="work section">
			<h2 className="section__title">How does BoloForms work?</h2>
			<span className="section__subtitle">Set up your first workflow in just 3 easy steps.</span>

			<div className="work__content container grid">
				<div className="work__card grid">
					<img src={img1} alt="" className="work__img" />
					<h2 className="work__title">Step 1:</h2>
					<p className="work__subitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				</div>

				<div className="work__card grid">
					<img src={img2} alt="" className="work__img" />
					<h2 className="work__title">Step 2:</h2>
					<p className="work__subitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				</div>

				<div className="work__card grid">
					<img src={img3} alt="" className="work__img" />
					<h2 className="work__title">Step 3:</h2>
					<p className="work__subitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>

            <Testimonial img="https://www.boloforms.com/_next/static/media/repa.483a1471.jpeg" p='"This add on is easy to install and works just amazing. The dashboard has a clean user interface. The app is easy and simple to use. Whenever you need an approval process for any form (from one person or more), this add on is what makes the job."' name="Repa Mandala"/>
			<Button/>
		</section>
	);
}

export default Working;
