import { Router } from 'express'
import {obtenerUser} from '../controllers/index.controller.js'
import { createComments, getComments } from '../controllers/comments.controller.js';

const router = Router()

//obtener todos los usuarios 
router.get('/users' , obtenerUser ); 

//comentar libros
router.post('/comments', createComments);
//Obtener libro por id
router.get('/comments', getComments)


export default router 