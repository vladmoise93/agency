import React from 'react';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import { Link } from 'react-router-dom';

export default function Banner() {
	return (
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
	);
}
