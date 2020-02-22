Packages
========
1. npm install --save radium <<< allow pseudo selector and media queries in react

import Radium from 'radium';
export default Radium(App);

-------

To apply hover:

import Radium from 'radium'
const style = {
	backgroundColor: 'green',
	':hover': {
		backgroundColor: 'lightGreen'
	}
}
or 
style[':hover'] = {
	
}

<p className={style}></p>


To apply media queries:
import Radium, { StyleRoot } from 'radium'
const style = {
	'@media (min-width: 500px)': {
		width: '450px';
	}
}

<StyleRoot>
	<p className={style}></p>
</StyleRoot>


Tips
====
1. Access parent content (can be html markup)
Parent
import MyPhoto from './MyPhoto';
<MyPhoto>This is my photo</MyPhoto>
<MyPhoto><div className="lol">Haha</div></MyPhoto>

Child:
{this.props.children}

2. Preferred way to clone data in state
const persons = this.state.persons.slice();
or
const persons = [...this.state.persons];
or
const persons = Object.assign({}, this.state.persons); <<< traditional method

3. Dynamically assign class
const classes = [];

if() {
	classes.push('red');
}

if() {
	classes.push('bold');
}

<p className={classes.join('')}></p>

4. To achieve css modules(each css file bind to specify js only)
- npm run eject
go to config > webpack.config.development and prod, line around 162, saw test: /\.css, under options {}, add these lines

modules: true,
localIdentName: '[name]__[local]__[hash:base64:5]'

To use it
import classes from './App.css';
<div className={classes.myDiv}>Haha</div>

It can even figure out the style of selected class, e.g.
.App button.Red:hover {
	
}

const class_button = classes.Red;