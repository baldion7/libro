import express from 'express'
import { createComent, getComents } from '../controller/coments.js'

const router = express.Router();
router.get('/comments',getComents );
router.post('/comments',createComent );

export default router;