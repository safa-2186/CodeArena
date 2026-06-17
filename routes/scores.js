const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

router.post('/', async (req, res) => {
    try {
        const {score, total, difficulty} = req.body;

        if (score == null || !total || !difficulty) {
            return res.status(400).json({error: 'score, total and difficulty are required'});
        }

        const percentage = Math.round((score / total) * 100);

        await pool.query(
            'INSERT INTO scores (score, total, difficulty, percentage) VALUES (?, ?, ?, ?)',
            [score, total, difficulty, percentage]
        );

        res.status(201).json({ score, total, percentage });

    }   catch (err) {
        res.status(500).json({ error: err.message });
    }

});


module.exports = router;