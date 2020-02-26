import React, { createContext, useState } from 'react';

export const StateContext = createContext({});

const StateProvider = ({ children }) => {
	const [ navActive, setNavActive ] = useState(false);

	return <StateContext.Provider value={{ navActive, setNavActive }}>{children}</StateContext.Provider>;
};

export default StateProvider;
