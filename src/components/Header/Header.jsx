import React, { useEffect, useState, useRef } from 'react';
import './header.css';
import logo from '../../assets/logo-text.e6f7617c.svg';
import Dropdown from './Dropdown';

function Header() {
	const ref = useRef(null);

	const [toggleDropDown, setToggleDropDown] = useState(false);
	const [toggleNav, setToggleNav] = useState(false);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setToggleDropDown(false);
			}
		};
		document.addEventListener('click', handleClickOutside, true);

		return () => document.removeEventListener('click', handleClickOutside, true);
	}, []);

	return (
		<header className="header">
			<nav className="nav container">
				<img className="nav__logo" src={logo} alt="logo" />

				<div ref={ref} className={toggleNav ? 'nav__menu show__menu' : 'nav__menu'}>
					<ul className="nav__list grid">
						<li
							className="nav__item"
							onClick={() => {
								setToggleDropDown(!toggleDropDown);
							}}>
							<span className="nav__link">
								Products <i className="uil uil-angle-down"></i>
							</span>
						</li>

						<li className="nav__item">
							<a className="nav__link" href="/">
								Pricing
							</a>
						</li>

						<li className="nav__item">
							<a className="nav__link" href="/">
								Guides
							</a>
						</li>

						<li className="nav__item">
							<a className="nav__link" href="/">
								Templates
							</a>
						</li>

                        <li className={!toggleNav ? 'nav__item hide__item' : 'nav__item'}>
							<a className="nav__link" href="/">
								About Us
							</a>
						</li>
					</ul>
					{toggleDropDown && <Dropdown toggle={toggleDropDown} close={()=>{setToggleDropDown(false)}} />}

					<div className="nav__button">
						<button className="button button__outlined">Install Now</button>
						<button className="button">BoloForms Premium</button>
					</div>
				</div>

				<div
					className="nav__toggle"
					onClick={() => {
						setToggleNav(!toggleNav);
					}}>
					{!toggleNav ? <i className="uil uil-bars"></i> : <i className="uil uil-multiply"></i>}
				</div>
			</nav>
		</header>
	);
}

export default Header;
