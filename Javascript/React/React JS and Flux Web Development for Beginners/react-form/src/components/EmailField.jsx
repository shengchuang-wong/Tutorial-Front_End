var React = require('react');
var createClass = require('create-react-class');

var EmailField = createClass({

	validateEmail: function (email) 
	{
	    var re = /\S+@\S+\.\S+/;
	    return re.test(email);
	},

	getInitialState: function() {
		return { valid: true, value: "" }
	},

	onChange: function(e) {
		var val = e.target.value;

		if (!this.validateEmail(val)) {
			this.setState({ valid: false, value:val });
		} else {
			this.setState({ valid: true, value:val });
		}
	},

	clear: function() {
		this.setState({ valid: true, value: "" });
	},

	render: function() {

		var formClass = this.state.valid ? "form-group" : "form-group has-error";

		return(
			<div className={formClass}>
				<input className="form-control" onChange={this.onChange} placeholder="Email" value={this.state.value} />
			</div>
		);
	}
	
});

module.exports = EmailField;