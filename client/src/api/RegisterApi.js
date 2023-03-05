import axios from 'axios';

const Api = axios.create({ baseURL: 'http://localhost:5000' });

   

export const ApplyRegisteration= (formData) => Api.post('/registration/Applyregistration', formData);