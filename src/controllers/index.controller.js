import {pool} from '../db.js'

export const obtenerUser = async (req, res) => {
    const [reslt] = await pool.query('SELECT name, email, genre, date_register, hour_register FROM users')
    res.json(reslt)
 }