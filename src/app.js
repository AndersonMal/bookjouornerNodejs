import express from 'express'
import usersRoutes from './routes/users.js'
import commentRoutes from './routes/comments.js'
import booksRoutes from './routes/books.js'
import indexRoutes from './routes/index.routes.js'



const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use(usersRoutes)
app.use(commentRoutes)
app.use(booksRoutes)

app.use((req, res, next) =>{
    res.status(404).json({
        message:'endpoint not fount'
    })
})

export default app;