import pool from '../db';
import express from 'express';

const router = express.Router()

router.get('/products', async (req,res) => {
  try {
    const result = await pool.query('SELECT * from products')
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: 'Error! products.ts'})
  }
})


export default router
