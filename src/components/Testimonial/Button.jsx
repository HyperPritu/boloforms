import './button.css';

import React from 'react';

function Button() {
	return (
		<section className="buttons">
			<div className="grid button__container">
				<div className="button__grid">
					<button className="button button__flex button__button">
						<i class="uil uil-cloud-download button__icon"></i>Install for Free
					</button>
					<button className="button button__outlined button__flex button__button">
						<i class="uil uil-rocket button__icon"></i>Boloforms Premium
					</button>
				</div>
				<div className="button__check">
					<span>
						<svg className="button__icon" stroke="currentColor" fill="#16a34a" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
						</svg>
						Trusted by 50000+ Businesses
					</span>

					<span>
						<svg className="button__icon" stroke="currentColor" fill="#16a34a" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
						</svg>
						30 Days Money Back Guarantee
					</span>

					<span>
						<svg className="button__icon" stroke="currentColor" fill="#16a34a" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
						</svg>
						1-1 Zoom & WhatsApp Onboarding
					</span>
				</div>
			</div>
		</section>
	);
}

export default Button;
