import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import BinsMain from './components/bins/BinsMain';
import BinsList from './components/bins/BinsList';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
	ReactDOM.render(<App />, document.getElementById('app'))
});