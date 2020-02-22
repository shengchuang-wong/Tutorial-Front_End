var React = require('react');
var createClass = require('create-react-class');

var Header = createClass({
	render: function() {
		return (
			<div>
				<h1>Header</h1>
				<h2>Try to go to Page1 or Page2</h2>
			</div>
		);
	}
});

module.exports = Header;