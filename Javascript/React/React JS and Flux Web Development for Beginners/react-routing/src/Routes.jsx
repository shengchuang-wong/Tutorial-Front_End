var React = require('react');

var ReactRouter = require('react-router');
var RouterDOM = require('react-router-dom');
var HashRouter = RouterDOM.HashRouter;
var Route = RouterDOM.Route;
var Switch = RouterDOM.Switch;

var Header = require('./components/Header.jsx');
var Footer = require('./components/Footer.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');


var Routes = (
	<div>
		<HashRouter>
			<Route path="/" component={Header} />
		</HashRouter>

		<HashRouter>
			<Switch>
				<Route path="/page1" component={Page1} />
				<Route path="/page2" component={Page2} />
			</Switch>
		</HashRouter>

		<HashRouter>
			<Route path="/" component={Footer} />
		</HashRouter>
	</div>
);



module.exports = Routes;