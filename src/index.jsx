import React from 'react';
import './index.scss';
import {First} from './router/index';
import ReactDOM from "react-dom";

function Index() {
	return (
		<First/>
	);
}


// ========================================

ReactDOM.render(
	<Index />,
	document.getElementById('root')
);