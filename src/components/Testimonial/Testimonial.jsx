import React from 'react';
import './testimonial.css';

function Testimonial({img, name, p}) {
	return (
		<section className="testimonial section">
			<div className="testimonial__container">
				<img src={img} alt="" className="testimonial__img" />
				<div className="testimonial__text grid">
					<div className="star">
						<span>⭐</span>
						<span>⭐</span>
						<span>⭐</span>
						<span>⭐</span>
						<span>⭐</span>
					</div>
					<p className="testimonial__para">{p}</p>
					<span className="testimonial__name">{name}</span>
				</div>
			</div>
		</section>
	);
}

export default Testimonial;
