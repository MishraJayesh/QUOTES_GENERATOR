const express = require('express');
const path = require('path');

const app = express();

const PORT = 8000;

app.use(express.static('Quotes'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/Quotes/index.html'));
});

app.listen(PORT, console.log("Server Is Running On Port",PORT));