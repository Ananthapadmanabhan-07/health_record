const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./databaseconnection');
const router = require('./Router');

const app =express();
require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());
app.use(router);
app.use(express.json());
const PORT = 5002;



app.listen(PORT, () => {
    console.log(`hospital microservice running on port ${PORT}`);
});

app.get("/hospital", (req, res) => {
    res.send("hospital microservice is running");
});