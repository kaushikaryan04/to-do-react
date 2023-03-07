import axios from 'axios';

const baseURL = "http://127.0.0.1:8000/"
// axios.defaults.baseURL = baseURL;
const axiosInstance = axios.create({
    baseURL :baseURL, // url 
    headers : {
        Authorization : localStorage.getItem('access_token') ?  `JWT ${localStorage.getItem('access_token')}`: null,
        'content-Type' : 'application/json',
        'accept' :  'application/json',
    }
})

const authAxios = axios.create({
    baseURL:baseURL,
    headers:{
        Authorization: `JWT ${localStorage.getItem('access_token')}`
    }
})
export default axiosInstance;