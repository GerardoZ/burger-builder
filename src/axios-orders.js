import axios from 'axios';

const intstance = axios.create({
    baseURL: 'https://react-my-burger-cd9a0.firebaseio.com/'
});

export default intstance;
