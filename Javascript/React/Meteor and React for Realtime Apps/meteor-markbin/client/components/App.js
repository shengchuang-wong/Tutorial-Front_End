import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import BinsList from './bins/BinsList';
import BinsMain from './bins/BinsMain';

export default (props) => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<div>
					<Route exact path="/" component={BinsList} />
					<Route path="/bins/:binId" component={BinsMain} />
				</div>
			</div>
		</BrowserRouter>
	);
}