import pool from '../db';
import express from 'express';

const router = express.Router()

router.get('/', async (req,res) => {
  try {
    const result = await pool.query(`SELECT * from products`)
    res.json(result.rows)
  } catch (error) {
        console.error(error);
    res.status(500).json({ error: `Error! abt getting products`})
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, barcode, category, cost_price, retail_price, current_stock, min_stock, store_id } = req.body;
    const result = await pool.query(`INSERT INTO products (name, barcode, category, cost_price, retail_price, current_stock, min_stock, store_id) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *`, [name, barcode, category, cost_price, retail_price, current_stock, min_stock, store_id]);
    res.status(201).json(result.rows[0])
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Error posting products`})
  }
})

export default router
