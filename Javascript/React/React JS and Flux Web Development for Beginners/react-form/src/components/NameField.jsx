var React = require('react');
var createClass = require('create-react-class');

var NameField = createClass({

	getInitialState: function() {
		return { value: "" };
	},

	onChange: function(e) {
		this.setState({ value: e.target.value });
	},

	clear: function() {
		this.setState({ value: "" });
	},

	render: function() {
		return (
			<input className="form-control" placeholder={this.props.type + " Name"} onChange={this.onChange} value={this.state.value} />
		);
	}
});

module.exports = NameField;