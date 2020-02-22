import React from 'react';
import ReactDOM from 'react-dom';

import EmployeeList from './components/EmployeeList';

const App = () => {
	return (
		<div>
			<EmployeeList />
		</div>
	);
};

Meteor.startup(() => {
	// React render call
	ReactDOM.render(<App />, document.getElementById('app'));
});