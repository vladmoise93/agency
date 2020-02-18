import React from 'react';
import { Link } from 'react-router-dom';

export default function header() {
	return (
		<div className="header">
			<div className="container">
				<div className="row">
					<div className="logo">
						<Link to=""> AGENCY. </Link>
					</div>
					<div className="nav">
						<span />
						<span />
					</div>
				</div>
			</div>
		</div>
	);
}
