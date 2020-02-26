import React, { useContext } from 'react';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import { Link } from 'react-router-dom';
import { StateContext } from '../Context';

export default function Banner() {
	const { navActive, setNavActive } = useContext(StateContext);

	const handleClick = () => {
		setNavActive(!navActive);
		window.location.reload();
	};

	return (
		<section>
			<section id="navigation">
				<div id="container">
					<h2>
						<div className="line">
							<Link to="/" onClick={handleClick}>
								<span>Case Studies</span>
							</Link>
						</div>
						<div className="line">
							<Link to="">
								<span>Approach</span>
							</Link>
						</div>
						<div className="line">
							<Link to="">
								<span>Services</span>
							</Link>
						</div>
						<div className="line">
							<Link to="">
								<span>About us</span>
							</Link>
						</div>
					</h2>
					<h2>
						<div className="line">
							<span>Contact</span>
							<h1>Email</h1>
							<div className="line">
								<Link to="">
									<span>Get in touch with us</span>
								</Link>
							</div>
							<div className="line">
								<Link to="">
									<span>Get a free audit</span>
								</Link>
							</div>
							<h1>Phone</h1>
							<span>+41 (0)788.888.888 </span>
						</div>
					</h2>
				</div>
			</section>
			<section className="main">
				<div className="container">
					<div className="row">
						<h2>
							<div className="line">
								<span>Creating unique brands is</span>
							</div>
							<div className="line">
								<span>what we do.</span>
							</div>
						</h2>
						<div className="btn-row">
							<Link to="">
								More about us <RightArrow />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
