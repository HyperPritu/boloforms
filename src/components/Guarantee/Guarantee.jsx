import React from 'react';
import Button from '../Testimonial/Button';
import Testimonial from '../Testimonial/Testimonial';
import './guarantee.css';

function Guarantee() {
	return (
		<section className="guarantee section">
			<Testimonial img="https://www.boloforms.com/_next/static/media/raman.e5477e92.jpeg" p={`"We've been using BoloForms for about a month, and it has streamlined our leave request application process. It is simple to set up and track, plus, the one-click approval email makes it much faster to process requests., the customer support is super helpful mr paresh help me alot in understanding the software seconds after asking his support . thank you so much wishing you lots of success."`} name="Raman R" />
			<Button />
			<Testimonial img="https://www.boloforms.com/_next/static/media/john.39efe227.jpeg" p={`"Customer support is super awesome, Great add on for our team! This helps our task management must easier. I can easily keep track of my member's request and work progress. The approval process is smooth and extremely quick. I highly recommend this addon especially for small business like mine."`} name="John M." />

			<div className="guarantee__container">
				<img className="guarantee__img" src="https://www.boloforms.com/_next/static/media/moneyback-gurantee.8417d885.png" alt="" />
				<div className="guarantee__note">
					<h2>MY 100% NO-RISK DOUBLE-GUARANTEE</h2>
					<h1>If you don’t like BoloForms over the next 30 days, I will happily refund 100% of your purchase. No questions asked.</h1>
					<p className="guarantee__body">Here's why I'm offering this -</p>
					<p className="guarantee__body">I have seen the power of automating your business workflows. Take some time out of your busy schedule today and see what all things can be automated in your workflows.</p>
					<p className="guarantee__body">You will find that most of your time is going in doing things that could be done better by automating. You just have to give it a shot!</p>
					<p className="guarantee__body">Start with automating small workflow and then gradually you will love it!!</p>
					<p className="guarantee__body">Thank you, and I hope we'll get the opportunity to be a part of your growth journey soon!</p>
					<img className="signature" src="https://www.boloforms.com/_next/static/media/paresh-signature.ffbb67b9.png" alt="" />
					<span>
						<h3>Paresh Deshmukh</h3>
						<span className="designation">Co-Founder BoloForms</span>
					</span>
				</div>
			</div>
		</section>
	);
}

export default Guarantee;
