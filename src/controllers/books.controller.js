import {pool} from '../db.js'

export const postBooks = async (req, res) => {
   try {
       const { title, author, descriptions, image_url, book_genre, num_pages, rating } = req.body;
       const [rows] = await pool.query('INSERT INTO Books (title, author, descriptions, image_url, book_genre, num_pages, rating) VALUES  (?, ?, ?, ?, ?, ?, ?)', [title, author, descriptions, image_url, book_genre, num_pages, rating]);
       
       res.send({
            title, author, descriptions, image_url, book_genre, num_pages, rating,
       });
   } catch (error) {
       console.error('Error al subir el libro:', error);
       res.status(500).send('Error interno del servidor');
   }
};


// Obtiene todos los libros guardados en la BD
export const getBooks = async (req, res) => {
   try {
       const [rows] = await pool.query('SELECT * FROM books');

       if (rows.length === 0) {
           return res.status(404).json({
               message: 'No se encontraron libros'
           });
       }

       res.json(rows);
   } catch (error) {
       console.error('Error al obtener libros:', error);
       res.status(500).json({ error: 'Error interno del servidor' });
   }
};


// Obtiene un libro en específico por su ID
export const getBook = async (req, res) => {
   try {
       const [rows] = await pool.query('SELECT * FROM Books WHERE book_id = ?', [req.params.id]);

       if (rows.length === 0) {
           return res.status(404).json({
               message: 'Libro no encontrado'
           });
       }

       res.json(rows[0]);
   } catch (error) {
       console.error('Error al obtener un libro por ID:', error);
       res.status(500).json({ error: 'Error interno del servidor' });
   }
};
