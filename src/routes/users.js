import { Router } from 'express'
import {getUsers, createUsers, updateUsers, deleteUsers} from '../controllers/users.controller.js'

const router = Router()



router.get('/users' , getUsers)
router.post('/users' , createUsers )
router.put('/users' , updateUsers )
router.delete('/users' , deleteUsers)

export default router