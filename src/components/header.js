import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import { StateContext } from '../Context';
import gsap from 'gsap';

export default function Header() {
	const { navActive, setNavActive } = useContext(StateContext);

	const tl = gsap.timeline({ defaults: { duration: 1, ease: 'elastic.inOut(0.1, 1)' } });

	useEffect(
		() => {
			if (navActive) {
				tl.fromTo('#navigation', 1, { height: 0 }, { height: 500 });
				gsap.to('#container', 0, { delay: 0.5, opacity: 1 });
			} else {
				tl.to('#navigation', 1, { height: 0 });
				gsap.to('#container', 0, { opacity: 0 });
			}
		},
		[ navActive ]
	);
	const handleClick = () => {
		if (!tl.isActive()) setNavActive(!navActive);
	};

	return (
		<div className="header">
			<div className="container">
				<div className="row">
					<div className="logo">
						<Link to="">AGENCY.</Link>
					</div>
					<div className="nav">
						<div className={`btn-row ${navActive ? '' : 'hidden'}`} onClick={handleClick}>
							<RightArrow />
						</div>
						<span className={`${navActive ? 'hidden' : ''}`} />
						<span className={`${navActive ? 'hidden' : ''}`} />
					</div>
				</div>
			</div>
		</div>
	);
}
