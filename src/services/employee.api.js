import axios from 'axios';
import config from '../config.json'

const { TOKEN } = config;

const api = axios.create({
    baseURL: `https://crudcrud.com/api/${TOKEN}`,
});

export default api;