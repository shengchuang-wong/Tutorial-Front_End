import React, { Component } from 'react';
import Accounts from './Accounts';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Header extends Component {

	onBinClick(e) {
		e.preventDefault();

		Meteor.call('bins.insert', (error, bindId) => {
			this.props.history.push(`/bins/${bindId}`)
		});
	}

	render() {
		return (
			<nav className="nav navbar-default">
				<div className="navbar-header">
					<Link to="/" className="navbar-brand">Markbin</Link>
				</div>
				<ul className="nav navbar-nav">
					<li>
						<Accounts />
					</li>
					<li>
						<a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
					</li>
				</ul>
			</nav>
		);
	}

};

export default withRouter(Header);