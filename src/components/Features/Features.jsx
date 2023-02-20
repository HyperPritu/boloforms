import React from 'react';
import Button from '../Testimonial/Button';
import Testimonial from '../Testimonial/Testimonial';
import { Data } from './Data';
import './features.css'

function Features() {
	return (
		<section className="features section">
			<h2 className="section__title">Features</h2>
			<span className="section__subtitle">Everything that your organisation will love, & more</span>

			<div className="data__grid">
				{Data.map(({ id, img, h, p }) => {
					return (
						<div className="data__item" key={id}>
							<img src={img} alt="" className="feature__icon" />
							<h2 className="feature__title">{h}</h2>
							<p className="feature__subtitle">{p}</p>
						</div>
					);
				})}
			</div>

            <Testimonial img='https://www.boloforms.com/_next/static/media/alaa.a9f02030.jpeg' p='"I like this software so much , super user friendly , A true life saver charging you with no cost , the customer support is super helpful mr paresh help me alot in understanding the software seconds after asking his support . thank you so much wishing you lots of success."' name='Alaa Khaled'/>
            <Button/>
            <Testimonial img='https://www.boloforms.com/_next/static/media/deepak.e041dab0.jpeg' p='"Easy to use interface and timely support...looking for more features"' name='Deepak S (Solero Corporation)'/>
		</section>
	);
}

export default Features;
