import express from 'express';
import {AddImportantNotes, AddImportantPYQ,getAllImportantNotes,getAllImportantPYQ} from '../Controllers/StudentController.js';

const router = express.Router();

router.post('/addImportantNotes', AddImportantNotes)
router.post('/addImportantPYQ', AddImportantPYQ)
router.get('/getAllImportantNotes/:studentId', getAllImportantNotes)
router.get('/getAllImportantPYQ/:studentId', getAllImportantPYQ)

export default router;