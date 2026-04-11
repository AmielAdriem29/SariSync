import pool from '../db';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM stock_movements');
    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({error: 'Error getting stock movements'})
  }
})

router.post('/', async (req, res) => {
  try {
    const {product_id, user_id, type, quantity, reason} = req.body

    const result = await pool.query(
      `INSERT INTO stock_movements (product_id, user_id, type, quantity, reason)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
       [product_id, user_id, type, quantity, reason]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({error: 'Error posting stock movements'})
  }
})