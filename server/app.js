'use strict';

const path = require('path');
const express = require('express');

const app = express();

app.use('/static', express.static(path.join(__dirname, `./static/`)));

app.use('/api', (req, res, next) => res.json({}));

const serverPort = process.env.PORT;

app.listen(serverPort, () => {
    console.log(`Listening ${serverPort}`);
});

process.on('SIGINT', () => {
    process.exit();
});
