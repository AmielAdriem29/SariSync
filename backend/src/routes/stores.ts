import pool from '../db';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM stores');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getting stores' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, hostname, address } = req.body;
    const result = await pool.query(
      'INSERT INTO stores (name, hostname, address) VALUES ($1, $2, $3) RETURNING *',
      [name, hostname, address]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error posting stores' });
  }
});

export default router;