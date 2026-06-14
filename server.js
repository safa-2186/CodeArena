const express = require('express');
const app = express();

app.use(express.static('Front-end'));

app.listen(3000, () => {
    console.log('Server is running!');
});