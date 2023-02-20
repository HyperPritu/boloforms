import React from 'react';
import './dropdown.css';
import icon1 from '../../assets/TP.5489abce.svg';
import icon2 from '../../assets/FA.c696cc9e.svg';
import icon3 from '../../assets/S.87bf14fd.svg';

function Dropdown({toggle, close}) {
	return (
		<div className={toggle ? 'nav__dropdown active' : 'nav__dropdown'}>
            <i class="uil uil-multiply nav__dropdown__close" onClick={close}></i>
			<div className="dropdown__item">
				<img className="dropdown__icon" src={icon1} alt="" />
				<div className="dropdown__content">
					<h4 className="dropdown__title">Form Approvals</h4>
					<p className="dropdown__subtitle">Create interactive workflows, approval flows & automate processes using Google Forms.</p>
				</div>
			</div>

			<div className="dropdown__item">
				<img className="dropdown__icon" src={icon2} alt="" />
				<div className="dropdown__content">
					<h4 className="dropdown__title">SheetGod</h4>
					<p className="dropdown__subtitle">AI-powered Excel magic made easy!</p>
				</div>
			</div>

			<div className="dropdown__item">
				<img className="dropdown__icon" src={icon3} alt="" />
				<div className="dropdown__content">
					<h4 className="dropdown__title">Signature</h4>
					<p className="dropdown__subtitle">Add Signature href your Google Forms</p>
				</div>
			</div>
		</div>
	);
}

export default Dropdown;
