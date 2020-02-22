1. Debug with Chrome Developer Tools
- Google chrome developer console
- Sources
- localhost > go into the file
- click the line numnber of the code line you want to debug
- execute it, and now, it will idle
- you can examine the state now or just press the next in the bottom left side

2. Debug with React Developer Tools
- React Developers Tools extension in Chrome
- F12
- Choose React
- Easily examine the state by click the line

3. Use Error Boundaries
Only use this when you are aware of the error and you could not control them, this will work in production, not visible in development.

- Create folder named "ErrorBoundary"
- Inside, create file name "ErrorBoundary.js" (file name is not restricted)

Inside the file created:
import React, { Component } from 'react';

class ErrorBoundary extends Component {
	
	state = {
		hasError: false,
		errorMessage: ''
	}

	componentDidCatch = (error, info) {
		this.setState({ hasError: true, errorMessage: error })
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong</h1>;
		} else {
			return this.props.children;
		}
	}

}

export default ErrorBoudary;

In another file:
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js';

return (
	<ErrorBoundary key={i}>
		<Person></Person>
	</ErrorBoundary>
);

