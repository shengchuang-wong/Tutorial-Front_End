1. Default function argument - Skipped
2. Arrow functions - do not use when
- need 'this'
- when method bind to an object
- when need to add a prototype method
- when you need arguments object
3. NodeList convert to Array - Array.from();
4. Slice(0, index), Slice(index + 1)
5. ESLint <<< Javascript and JSX syntax checker

- npm install -g eslint
> eslint --version
> touch .eslintrc
{
	"env": {
		"es6": true,
		"browser": true
	},
	"extends": "eslint:recommended",
	"rules": {
		"no-console": 0
	}
}

> npm install -g eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

Airbnb
{
	"env": {
		"es6": true,
		"browser": true
	},
	"extends": "airbnb",
	"rules": {
		"no-console": 0
	}
}

> eslint [filename] --fix

- To escape some specify global function by 3rd party, place /* globals [global name] */ at the top of the js file. E.g. /* globals twitter ga */
- Others like specific error, use 
/* eslint-disable [error] */
, For certain line use, 
/* eslint-disable no-extend-native */
/* eslint-enable no-extend-native */
, For all,
/* eslint-disable */
/* eslint-enable */

- Go to search eslint-plugin-xxxx, use it according to its example given. E.g. eslint-plugin-html to check js syntax in html file

- To install eslint in sublime text, go download sublime-linter-eslint 
&& 
sublime-linter-contrib-eslint
- To use it, CTRL + SHIFT + P, and search lint this view

- To create a git checking for eslint before allowing commit

> git init es6git <<< unneccessary to be es6git
> cd [directory]
- open .git/, go to hook, go to commit-msg.sample
- Remove all, and copy the wes bos github eslint 3.0 git pre commit hook and paste the setting, done :)

- CTRL + SHIFT + P, sublimelinter: choose lint mode to set the mode of syntax checking

6. Manually configure webpack
> npm init
> npm install webpack@beta babel-loader babel-core babel-preset-es2015-native-modules --save-dev
- Create a 'webpack.config.js' file 
Content:

const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
	devtool: 'source-map',
	entry: {
		filename: './app.js'
	},
	output: {
		filename: '_build/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015-native-modules']
				}
			}
		]
	},
	plugins: [
		// unglify js
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
			output: { comments: false },
			sourcemap: true
		})

		// env plugin
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
		})
	]
}

- Then, modify the package.json > scripts
"build": "webpack --progress --watch"
> npm run build

Done :)

7. 
8. 
9. 
10. 
11. 
12. 
13. 
14. 
15. 