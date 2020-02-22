import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


export default function(ComposedComponent) {

	class Authentication extends Component {
		
		static contexTypes = {
			router: React.PropTypes.object
		}

		componentWillMount() {
			if (!this.props.authenticated) {
				// this.context.router.push('/');
				browserHistory.push('/');
			}
		}

		componentWillUpdate(nextProps) {
			if (!nextProps.authenticated) {
				browserHistory.push('/');
			}
		}

		render() {
			// console.log(this.context);
			return <ComposedComponent {...this.props} />
		}
	}

	function mapStateToProps(state) {
		return { authenticated: state.authenticated };
	}

	return connect(mapStateToProps)(Authentication);
}