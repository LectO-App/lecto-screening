import React from 'react';
import { Link } from 'react-router-dom';

import dot1 from '../assets/dots/dot-1.svg';
import dot2 from '../assets/dots/dot-2.svg';
import dot3 from '../assets/dots/dot-3.svg';
import Header from '../components/Header';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';

const prevArrow = clickHandler => {
	return <div className='arrow left' onClick={clickHandler}></div>;
};
const nextArrow = clickHandler => {
	return <div className='arrow right' onClick={clickHandler}></div>;
};
const sliderItem = item => {
	return <div className='slider-item'>{item}</div>;
};

const Landing = () => {
	return (
		<div className='landing-container'>
			<Header />
			<main className='landing-page'>
				<section className='main-section'>
					<h1 className='title'>
						Un <strong>sistema virtual</strong> para diagnosticar posible <strong>dislexia y discalculia</strong>,
						avalado por científicos.
					</h1>

					<div className='steps-container'>
						<div className='step' data-delay={100}>
							<div className='number-container'>
								<img src={dot1} alt='' />
								<span className='number'>✅</span>
							</div>
							<span className='label'>Regístrate y agrega a tus pacientes</span>
						</div>
						<div className='step' data-delay='300'>
							<div className='number-container'>
								<img src={dot2} alt='' />
								<span className='number'>📝</span>
							</div>
							<span className='label'>Realiza el test</span>
						</div>
						<div className='step' data-delay='500'>
							<div className='number-container'>
								<img src={dot3} alt='' />
								<span className='number'>💯</span>
							</div>
							<span className='label'>¡Visualiza los resultados y el diagnóstico!</span>
						</div>
					</div>
					<Link to='/login' className='button'>
						¡Empezar ahora!
					</Link>
				</section>
				<section className='about-section'>
					<div className='item-container'>
						<h2 className='title'>¿Cómo funciona?</h2>
						<p className='text'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, consequuntur esse saepe laudantium alias
							eos? Eligendi laborum velit rerum aliquid iusto distinctio architecto explicabo, quasi enim cumque fugit?
							Facilis, deserunt!
						</p>
					</div>
					<div className='item-container'>
						<h2 className='title'>Respaldo científico</h2>
						<div className='carousel-container'>
							<Carousel
								emulateTouch
								swipeable
								showThumbs={false}
								showIndicators={false}
								interval={0}
								autoPlay={false}
								showStatus={false}
								dynamicHeight
								renderArrowPrev={prevArrow}
								renderArrowNext={nextArrow}
								renderItem={sliderItem}
							>
								<div>
									<ReactPlayer
										controls
										width='100%'
										url='https://www.youtube.com/watch?v=u9QJYweVceY&ab_channel=SaludEmocionalMedicinaTV'
									/>
								</div>
								{/* <div>
									<img src='https://picsum.photos/300/200' />
								</div>
								<div>
									<img src='https://picsum.photos/300/200' />
								</div> */}
							</Carousel>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Landing;
