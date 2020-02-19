import React, { useState, useEffect } from 'react';
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';
import gsap from 'gsap';

export default function Cases() {
	const [ x, setX ] = useState(0);
	const tl = gsap.timeline({ defaults: { duration: 1, ease: 'elastic.out(1, 1)' } });
	const [ width, setWidth ] = useState();

	useEffect(
		() => {
			if (window.innerWidth <= 2560) setWidth(-4270);
			if (window.innerWidth <= 1920) setWidth(-3200);
			if (window.innerWidth <= 1440) setWidth(-2400);
			if (window.innerWidth <= 1024) setWidth(-1705);
		},
		[ window.innerWidth ]
	);

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

	const handleClickL = () => {
		if (window.innerWidth < 1024) return;
		else if (x < 0 && !tl.isActive()) {
			tl.fromTo('.cases .row', 1, { x: x }, { x: x + 640 > 0 ? 0 : x + 640 });
			setX(x + 640 > 0 ? 0 : x + 640);
		}
	};

	const handleClickR = () => {
		if (window.innerWidth < 1024) return;
		else if (x > width && !tl.isActive()) {
			tl.fromTo('.cases .row', 1, { x: x }, { x: x - 640 < width ? width : x - 640 });
			setX(x - 640 < width ? width : x - 640);
		}
	};

	return (
		<section className="cases">
			<div className="container">
				<div className="navigation">
					<div className={`cases-arrow prev ${x === 0 ? 'disabled' : ''}`} onClick={handleClickL}>
						<CasesPrev />
					</div>
					<div className={`cases-arrow next  ${x === width ? 'disabled' : ''}`} onClick={handleClickR}>
						<CasesNext />
					</div>
				</div>
				<div className="row" onWheel={(e) => scrolling(e)}>
					{caseStudies.map((caseItem) => (
						<div className="case" key={caseItem.id}>
							<div className="case-details">
								<span>{caseItem.subtitle}</span>
								<h2>{caseItem.title}</h2>
							</div>
							<div className="case-image">
								<img src={require(`../assets/${caseItem.img}`)} alt={caseItem.title} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

const caseStudies = [
	{
		id: 1,
		subtitle: 'Bored of Authority',
		title: 'Speaks to your individual passion with BOA',
		img: 'Nikhil_2-e1491985779844.png'
	},
	{
		id: 2,
		subtitle: 'Skin Elixir',
		title: 'The innovative anti-aging serum',
		img: 'maxresdefault.jpg'
	},
	{
		id: 3,
		subtitle: 'Just Away',
		title: 'The cleaning kit for airpods',
		img: 'AwayKit_case-study.jpg'
	},
	{
		id: 4,
		subtitle: 'Glitty',
		title: 'Wooden Dress for Apple Devices',
		img: 'images.jpg'
	},
	{
		id: 5,
		subtitle: 'Ecorce Verte',
		title: 'Handcrafted Swiss Cosmetic Products',
		img: 'EcorceVerte_case-study-2250x1805.jpg'
	},
	{
		id: 6,
		subtitle: 'Postfinance',
		title: 'Promoting employees on Instagram',
		img: 'Postfinance_case-study.jpg'
	},
	{
		id: 7,
		subtitle: 'Vibration Workingshare',
		title: 'A local Coworking Space & Community',
		img: 'coworking_case-study.png'
	},
	{
		id: 8,
		subtitle: 'Carhelpf',
		title: 'Hassle-free Car Servicing & Repair',
		img: 'Carhelper_case-study-2250x1309.jpg'
	}
];
