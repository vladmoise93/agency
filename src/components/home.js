import React from 'react';
import Banner from './banner';
import Cases from './cases';
import Header from './header';
import IntroOverlay from './introOverlay';

export default function Home() {
	return (
		<div>
			<IntroOverlay />
			<Header />
			<Banner />
			<Cases />
		</div>
	);
}
