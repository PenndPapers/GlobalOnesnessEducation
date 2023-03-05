import axios from 'axios';

const Api = axios.create({ baseURL: 'http://localhost:5000' });

export const studentLogin= (formData) => Api.post('/auth/studentlogin', formData);

export const adminLogin= (formData) => Api.post('/auth/adminlogin', formData);

export const teacherLogin= (formData) => Api.post('/auth/teacherlogin', formData);

export const ChangePassword = (formData) => Api.post('/auth/changepassword', formData);

export const forgotPassword = (formData) => Api.post('/auth/forgotpassword', formData);