1. Axios interceptoprs to execute code globally
- Go to index.js

import axios from 'axios'

axios.interceptors.request.use(request => {
	console.log(request);

	// Edit request config
	return request;
}, error => {
	console.log(error);
	return Promise.reject(error);
});

2. Axios set default global configuration

- In the component files
axios.get('./posts'); <<< relatvie path

- In the index.js
axios.defaults.baseUrl = 'https://xxx.com'; <<< set base url for the request

others use case could be like
> axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

3. Creating and using axios instances
- Create seperate file for axios. e.g. axios.js

import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://xxx.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance


- In the components file
import axios from 'the separate axios file';

3. Base practical if you create higher order components with axios, to remove it when not use

componentWillMount() {
	this.[yourVariable] = axios.interceptors.....
}

componentWillUnmount() {
	axios.interceptors.request.eject(this.[yourVariable]);
}