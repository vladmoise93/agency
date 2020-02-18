import React, { useEffect } from 'react';
import Header from './components/header';
import './styles/App.scss';
import Banner from './components/banner';
import Cases from './components/cases';
import IntroOverlay from './components/introOverlay';
import gsap from 'gsap';
import { HashRouter as Router } from 'react-router-dom';

function App() {
	useEffect(() => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		//timeline
		const tl = gsap.timeline();

		tl
			.from('.line span', 1.8, {
				y: 100,
				ease: 'power4.out',
				delay: 1,
				skewY: 7,
				stagger: {
					amount: 0.3
				}
			})
			.to('.overlay-top', 1.6, {
				height: 0,
				ease: 'expo.inOut',
				stagger: {
					amount: 0.4
				}
			})
			.to('.overlay-bottom', 1.6, {
				width: 0,
				ease: 'expo.inOut',
				delay: -0.8,
				stagger: {
					amount: 0.4
				}
			})
			.to('.intro-overlay', 0, { css: { display: 'none' } })
			.from('.case-image img', 1.6, {
				scale: 1.4,
				ease: 'expo.inOut',
				delay: -2,
				stagger: {
					amount: 0.4
				}
			});
	}, []);

	return (
		<div className="App">
			<Router>
				<IntroOverlay />
				<Header />
				<Banner />
				<Cases />
			</Router>
		</div>
	);
}

export default App;
