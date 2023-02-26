import express from 'express';
import { studentlogin, teacherlogin ,studentregister, changepassword,adminlogin, adminregister} from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/studentlogin', studentlogin)
router.post('/teacherlogin', teacherlogin)
router.post('/adminlogin',adminlogin)
router.post('/studentregister', studentregister)
router.post('/adminregister', adminregister)
router.post('/changepassword', changepassword)



export default router;