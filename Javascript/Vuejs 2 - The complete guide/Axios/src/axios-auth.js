import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vuejs-http-ea1e2.firebaseio.com/'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;