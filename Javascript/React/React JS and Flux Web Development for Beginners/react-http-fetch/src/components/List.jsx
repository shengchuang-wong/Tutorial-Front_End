var React = require('react');
var ListItem = require('./ListItem.jsx');
var createReactClass = require('create-react-class');
var HTTP = require('../services/htppservice');

var List = createReactClass({

	getInitialState: function() {
		return { ingredients: [] };
	},

	componentWillMount: function() {
		HTTP.get('/ingredients')
		.then(function(data) {
			console.log("DATA ", data);
			this.setState({ ingredients: data });		
		}.bind(this));
	},

	render: function() {

		var listItems = this.state.ingredients.map(function(item) {
			return <ListItem key={item.id} ingredient={item.text} />;
		});

		return (<ul>{listItems}</ul>);

	}
});

module.exports = List;