import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:5000" });

export const getAllImportantPdf = (studentId) => Api.get(`/student/getAllImportantPYQ/${studentId}`);

export const addImportantNotes = (data) => Api.post('/student/addImportantNotes', data);
export const addImportantPYQ = (data) => Api.post('/student/addImportantPYQ', data);
export const addFeedback = (data) => Api.post('/student/feedback', data);