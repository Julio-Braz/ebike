import axios from 'axios';

const api = axios.create({
    baseURL:'http://10.0.1.16:3000'
})

export default api;