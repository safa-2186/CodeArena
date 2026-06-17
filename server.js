require('dotenv').config() ;

const express = require('express') ;
const cors = require('cors') ;


const questionsRouter = require('./routes/questions');
const scoresRouter = require('./routes/scores');
const leaderboardRouter = require('./routes/leaderboard');

const app = express() ;
const PORT = process.env.PORT || 3000 ;

app.use(cors()) ;
app.use(express.json()) ;

<<<<<<< HEAD
app.get("/", (req, res) => {
    res.send("CodeArena Server is Running!");
});
=======
app.use('/api/questions', questionsRouter);
app.use('/api/scores', scoresRouter);
app.use('/api/leaderboard', leaderboardRouter);

>>>>>>> 2f1401dea6adeb059e8ca215e97daa59d07103e7

app.listen(PORT, () => {
    console.log('Server is running')
});


