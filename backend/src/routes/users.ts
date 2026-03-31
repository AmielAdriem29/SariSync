import pool from '../db';
import express from 'express';

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
    const { store_id, username, password_hash, role } = req.body
    const result = await pool.query(
      `INSERT INTO users (store_id, username, password_hash, role) 
      VALUES ($1, $2, $3, $4) RETURNING *`,
      [store_id, username, password_hash, role]
    )
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error posting users'})
  }
})

export default router