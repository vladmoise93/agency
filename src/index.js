import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StateContext from './Context';

ReactDOM.render(
	<StateContext>
		<App />
	</StateContext>,
	document.getElementById('root')
);
