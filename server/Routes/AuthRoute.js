import express from 'express';
import { studentlogin, teacherlogin ,studentregister, changepassword,adminlogin, adminregister, teacherregister,forgotpassword} from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/studentregister', studentregister)
router.post('/studentlogin', studentlogin)
router.post('/changepassword', changepassword)

router.post('/teacherlogin', teacherlogin)
router.post('/teacherregister', teacherregister)

router.post('/adminlogin',adminlogin)
router.post('/adminregister', adminregister)
router.post('/forgotpassword', forgotpassword)


export default router;