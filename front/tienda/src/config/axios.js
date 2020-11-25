import axios from 'axios';

const gestorAxios = axios.create({
    baseURL: 'http://localhost:4000'
});

export default gestorAxios;