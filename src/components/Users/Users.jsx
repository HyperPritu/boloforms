import React from 'react';
import './users.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation } from 'swiper';

function Users() {
	return (
		<section className="users section">
			<h2 className="section__title">BoloForms Is Used By</h2>

			<Swiper
				className="users__container"
				spaceBetween={20}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Navigation]}>
				{Data.map(({ id, img }) => {
					return (
						<SwiperSlide className="users__card" key={id}>
							<img src={img} alt="" className="user__img" />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}

export default Users;
