import { Router } from 'express';
import { getBooks,  getBook, postBooks } from '../controllers/books.controller.js';

const router = Router()


router.get('/api/books' , getBooks)

router.get('/api/books/:id' , getBook)

router.post('/api/books/create' , postBooks)


export default router