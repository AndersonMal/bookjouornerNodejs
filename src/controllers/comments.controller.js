import {pool} from '../db.js'

// Obtener nombre del usuario, id del usuario y comentario del usuario a un libro (por su id)
export const getComments = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT comments.user_id, users.name AS userName, comments.commentary FROM Comments JOIN books ON comments.book_id = books.book_id JOIN users ON comments.user_id = users.user_id WHERE  books.book_id = ?', [req.params.id]);

        if (rows.length === 0) {
            return res.status(404).json({
                message: 'Comentario no encontrado'
            });
        }

        res.json(rows[0]);
    } catch (error) {
        console.error('Error al obtener comentarios por ID de libro:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


//comentar libros
export const createComments = async (req, res) => {
    try {
        const { user_id, commentary } = req.body;
        const book_id = req.params.id; // Obtén el book_id de los parámetros de la ruta

        const [rows] = await pool.query('INSERT INTO Comments(commentary, user_id, book_id) VALUES (?, ?, ?)', [commentary, user_id, book_id]);
        
        res.send({
            user_id,
            commentary,
        });
    } catch (error) {
        console.error('Error al comentar el libro:', error);
        res.status(500).send('Error interno del servidor');
    }
};
