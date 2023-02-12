import express from 'express';
import {  AddCourse , getAllCourse }  from '../Controllers/AdminController.js';

const router = express.Router();

router.post('/addCourse', AddCourse)
router.get('/getAllCourse/:class', getAllCourse)




export default router;