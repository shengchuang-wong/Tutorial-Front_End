------ Webpack (Skipped)
------ Redux-Saga (Skipped)

Tips
====
1. import React, { PureComponent } form 'react';
PureComponent same as the Component, but it will execute the shouldComponentUpdate() by default with looking whether any props or state is changed, if yes, then update, vice versa.

2. Correctly setState
this.setState(prevState, props) => {
	return {
		toggleClicked prevState.toggleClicked + 1;
	}
}

3. Check type of props
- npm install --save prop-types

import PropTypes from 'prop-types';

[ClassName].propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed:  PropTypes.func	
};

4. Tiny combination
componentDidMount() {
	if(this.props.position === 0) {
		this.inputElement.focus();
	}
}

<input position={index} ref={(inp) => { this.inputElement = inp }}