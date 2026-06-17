const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

function shuffle(arr) {

    const a = [...arr];

    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [a[i], a[j]] = [a[j], a[i]];
    }

    return a ;

}


router.get('/', async (req, res) => {

    try {
        const { difficulty } = req.query ;

        if (!['easy', 'medium'].includes(difficulty)) {
            return res.status(400).json({ error: 'difficulty must be easy or medium'});
        }

        const [rows] = await pool.query(
            'SELECT * FROM questions WHERE difficulty = ? ORDER BY RAND() LIMIT 5',
            [difficulty]
        );

        const questions = rows.map(q => {
            const options = typeof q.options === 'string' ? JSON.parse(q.options) : q.options;
            const paired = options.map((text, i) => ({ text, isCorrect: i === Number(q.answer) }));
            const shuffled = shuffle(paired);

            return {
                id: q.id,
                type: q.type,
                text: q.question_text,
                code: q.code,
                options: shuffled.map(p => p.text),
                answer: shuffled.findIndex(p => p.isCorrect),
                explanation: q.explanation

            };
        });

        res.json(questions);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }

});

module.exports = router;