Tips
====
1.) To use as relative path
pathname: this.props.match.url + '/[next path]';

2.) Determine and style the current active link
import { NavLink } from 'react-router-dom';

Use <NavLink to='/'>Go</NavLink> instead of <Link to='/'>Go</Link>

Then, the active link will have the class "active" and aria-current="true"

You can also customized the added className by
<NavLink to='/' activeClassName='my-active'>Go</NavLink>

activeStyle={{ style }} can set inline style

3.) Pass it and extracting
Passing parameters:
<Route path="/:id" exact component={FullPost} />
<NavLink to={`/${post.id}`}>Go<NavLink>

Accessing parameters:
this.props.match.params.id

4.) Access to Single Route
import { Switch } from 'react-router-rom';

<Switch>
	<Route path="/" exact component={a} />
	<Route path="/new-post" component={b} />
	<Route path="/:id" exact component={c} />
</Switch>

This work by display only 1st match route

5.) Route can be put at anywhere, just need its parent element wrapped by BrowserRouter

6.) Nested Route use relative path
<Route path={this.props.match.url + '/:id'} exact component={abc} />

7.) When use nested route, you api might not refresh when you fecth the api inside componentDidMount() since it is update stage, therefore, you can also load the fetch api inside componentDidUpdate()

Note: history.push('/') allow click back to back, but Redirect are not able to do so.

8.) Redirecting Requests. Note: this.props.history.push('/') is preferred. If don't want allow to back, then use this.props.history.replace('/')
import { Redirect } from 'react-router-dom';

<Switch>
	<Route path="/new-post" component={b} />
	<Route path="/posts" component={b} />
	<Redirect from="/" to="/posts" />
</Switch>

Make achieve conditional redirect


render() {
	let redirect = null;

	if (this.state.submitted) {
		redirect = <Redirect to="/posts"  />;
	}	

	return (
		<div>
			...
			{ redirect }
			...
		</div>
	)
}

9.) To use this.props.history.push('/') by not importing { withRouter } from 'react-router-dom', just simple given the current element this.props property by
<Book {...props} ></Book>

8.) Handle 404 Error
<Route render={() => <h1>Not found</h1>} /> 
Remember, always come last

9.) Load route lazily, which mean load the page/component only when needed in Single Page Application
- Create a higher order component
e.g. asyncComponent.js

import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
	return class extends Component {
		state = {
			component: null
		}

		componentDidMount() {
			importComponent()
				.then(cmp => {
					this.setState({ component: cmp.default });
				});
		}

		render() {
			const c = this.state.component;

			return C ? <C {...this.props} /> : null;
		}
	}
}

export default asyncComponent;

In other file
import asyncComponent from '[the path to asyncComponent.js]';

const AsyncNewPost = asyncComponent(() => {
	return import('./NewPost/NewPost');
});

<Route to="/newpost" component={AsyncNewPost} />

Done :)

10.) To match with certain server when deployment, route needed to be modified to match correctly
<BrowserRouter basename="/my-app">
	
</BrowserRouter>