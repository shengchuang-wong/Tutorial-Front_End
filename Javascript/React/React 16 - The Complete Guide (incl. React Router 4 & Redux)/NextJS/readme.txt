NextJS is for reactjs which act like react-router but with different approach, noted that in order to run NextJs, NodeJs is required.

Readme
======
1. Installation
- npm init
- npm install --save next react react-dom
- In package.json
{
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start"
	}
}

2. Create a folder name pages, every folder within it act as the pathname which load its own index.js
e.g.

/pages/auth/index.js 

const IndexPage = () => (
	<div>
		Index Page
	</div>
);

export default IndexPage;

https://xxx.com/auth

3. To use navigation
import Link from 'next/link';

<p>Go to <Link href="/auth"><a>Auth</a></Link></p>

href="[folder name]"
<a></a> Tag is still needed

Alternative

import Router from 'next/router';
<button onClick={() => Router.push('/auth')}>Go to Auth</button>

4. To style elements
<style jsx>{`
	div {
		background-color: black;
	}
`}</style>

4. To generate 404 Error Page, create filename "_error.js" under "pages" directory

Style it and export, ez!

5. Special Lifecycle, good for async fetch api
- Inside component

static async getInitialProps(contect) {
	console.log(context);

	// fetch your own api here and return
	return {todoList: []};
}

Under render() > return, access it by {this.props.todoList}


To use it in functional components

const Page = ({ stars }) => (
	<div>
		Next stars: {stars}
	</div>
);

Page.getInitialProps = async ({ req }) => {
	const res = await fetch('xxxx');
	const json = await res.json();
	return { stars: json.stargazers_count }
}

export defautl Page