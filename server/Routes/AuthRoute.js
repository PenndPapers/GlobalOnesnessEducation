import express from 'express';
import { studentlogin, teacherlogin ,studentregister, changepassword} from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/studentlogin', studentlogin)
router.post('/teacherlogin', teacherlogin)
router.post('/studentregister', studentregister)
router.post('/changepassword', changepassword)



export default router;