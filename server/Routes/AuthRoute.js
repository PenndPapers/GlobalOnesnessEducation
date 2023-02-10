import express from 'express';
import { studentlogin, teacherlogin ,studentregister} from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/studentlogin', studentlogin)
router.post('/teacherlogin', teacherlogin)
router.post('/studentregister', studentregister)



export default router;