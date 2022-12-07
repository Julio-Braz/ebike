import axios from 'axios';

const api = axios.create({
    baseURL:'https://192.168.122.1'
})

export default api;