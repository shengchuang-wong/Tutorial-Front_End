import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
