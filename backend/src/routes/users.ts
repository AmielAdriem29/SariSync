import pool from '../db';
import express from 'express';
import bcrypt from 'bcrypt';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error){
    console.error(error)
    res.status(500).json({ error: 'Error getting users'})
  }
});

router.post('/', async (req, res) => {
  try {
    const { store_id, username, password, role } = req.body

    if (!username) return res.status(400).json({error:'Username is missing'})
    if (!password) return res.status(400).json({error:'Password is missing'})

    const password_hash = await bcrypt.hash(password, 10)

    const result = await pool.query(
      `INSERT INTO users (store_id, username, password_hash, role) 
      VALUES ($1, $2, $3, $4) RETURNING *`,
      [store_id, username, password_hash, role]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error posting users'})
  }
})

export default router