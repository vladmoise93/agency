import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import Home from './components/home';
import gsap from 'gsap';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
	useEffect(() => {
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

	const [ x, setX ] = useState(0);
	const [ width, setWidth ] = useState();
	const tl = gsap.timeline({ defaults: { duration: 1, ease: 'elastic.out(1, 1)' } });

	useEffect(() => {
		if (window.innerWidth <= 2560) setWidth(-4270);
		if (window.innerWidth <= 1920) setWidth(-3200);
		if (window.innerWidth <= 1440) setWidth(-2400);
		if (window.innerWidth <= 1024) setWidth(-1705);
	}, []);

	const scrolling = (e) => {
		if (window.innerWidth < 1024) return;
		else {
			let delta = e.deltaY;
			if (delta > 0) {
				if (x > width && !tl.isActive()) {
					gsap.to('.cases .row', { x: x - 340 < width ? width : x - 340, ease: 'ease.in' });
					setX(x - 340 < width ? width : x - 340);
				}
			}
			if (delta < 0) {
				if (x < 0 && !tl.isActive()) {
					gsap.to('.cases .row', { x: x + 340 > 0 ? 0 : x + 340, ease: 'ease.in' });
					setX(x + 340 > 0 ? 0 : x + 340);
				}
			}
		}
	};

	return (
		<div className="App" onWheel={(e) => scrolling(e)}>
			<Router>
				<Route exact path="/" component={Home} />
			</Router>
		</div>
	);
}

export default App;
