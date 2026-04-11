import pool from '../db';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM debtors`)
    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({error: 'Error getting debtors'})
  }
})

router.post('/', async (req, res) => {
  try {
    const {store_id, name, phone_number} = req.body

    const result = await pool.query(
      `INSERT INTO debtors (store_id, name, phone_number)
      VALUES ($1, $2, $3) RETURNING *`,
      [store_id, name, phone_number]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({error: 'Error posting debtors'})
  }
})