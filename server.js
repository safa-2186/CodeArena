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

app.get("/", (req, res) => {
    res.send("CodeArena Server is Running!");
});

app.listen(PORT, () => {
    console.log('Server is running')
});


