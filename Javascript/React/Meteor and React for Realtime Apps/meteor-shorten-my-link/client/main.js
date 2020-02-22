import React from 'react';
import ReactDOM from 'react-dom';	

import Header from './components/header';
import LinkCreate from './components/LinkCreate';
import { Links } from '../imports/collections/links';
import LinkList from './components/LinkList';

const App = () => {
	return (
		<div>
			<Header />
			<h1>Hello there!</h1>
			<LinkCreate />
			<LinkList />
		</div>
	);
};

Meteor.startup(() => {
	ReactDOM.render(<App />, document.getElementById('app'));
});