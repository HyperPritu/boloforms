import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
	return (
		<div id="footer">
			<div className="footer-main">
				<div className="child large-text">
					<span><span>💬</span> Live Chat</span>
					<span><span>📨</span> Support Email</span>
					<span><span>📚</span> Help Center</span>
					<span><span>📅</span> Video Call</span>
				</div>
				<div className="child small-text">
					<span>Pages</span>
					<span>Home</span>
					<span>Pricing</span>
					<span>Blogs</span>
					<span>About us</span>
				</div>
				<div className="child small-text">
					<span>Products</span>
					<span>Forms Approval</span>
					<span>Signature</span>
					<span>Sheetgod</span>
					<span>Google Form UI Enhancer</span>
					<span>BoloForms Document Generator</span>
					<span>Timer + Proctor</span>
					<span>Google Meet Attendence Tracker</span>
				</div>
				<div className="child small-text">
					<span>Legal</span>
					<span>Terms of Service</span>
					<span>Privacy Policy</span>
					<span>Refund Policy</span>
					<span>Data Security & Policy</span>
				</div>
			</div>
			<p className="tag-line">
				Made with <img src="https://www.boloforms.com/_next/static/media/1f525.a7bd71d6.svg" /> + <img src="https://www.boloforms.com/_next/static/media/2764.8838f014.svg" /> in India
			</p>
			<div className="language-selection">
				<span className="title">Select Language</span>
				<select>
					<option value="v1">Select Language</option>
					<option value="v2">Value 5</option>
					<option value="v3">Value 3</option>
					<option value="v4">Value 4</option>
					<option value="v5">Value 5</option>
					<option value="v6">Value 6</option>
					<option value="v7">Value 7</option>
					<option value="v8">Value 8</option>
					<option value="v9">Value 9</option>
				</select>
			</div>
			<div className="social">
				<FaTwitter />
				<FaYoutube />
				<FaFacebook />
			</div>
		</div>
	);
};
