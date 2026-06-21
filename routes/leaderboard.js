const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

router.get('/', async (req, res) => {
    try {
        const { difficulty } = req.query;

        let query = 'SELECT score, total, difficulty, percentage FROM scores';
        const params = [];
 
        if (difficulty && ['easy', 'medium'].includes(difficulty)) {
            query += ' WHERE difficulty = ?';
            params.push(difficulty);
        }

        query += ' ORDER BY percentage DESC LIMIT 10';

        const [rows] = await pool.query(query, params);

        res.json(rows);

    }   catch (err) {
        res.status(500).json({ error: err.message });
    }

});


module.exports = router;