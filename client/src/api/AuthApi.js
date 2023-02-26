import axios from 'axios';

const Api = axios.create({ baseURL: 'http://localhost:5000' });

export const studentLogin= (formData) => Api.post('/auth/studentlogin', formData);