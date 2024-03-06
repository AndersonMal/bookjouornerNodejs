import { Router } from 'express';
import { createComments, getComments } from '../controllers/comments.controller.js';

const router = Router()


router.get('/api/books/:id/comments' , getComments)
router.post('/api/books/:id/comments' , createComments )

export default router