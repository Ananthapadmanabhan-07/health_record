const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app =express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

const PORT = 4000;


// USER SERVICE URL
const USER_SERVICE = "http://localhost:5001";

// HOSPITAL SERVICE URL
const HOSPITAL_SERVICE = "http://localhost:5002";

// user service routing
app.use("/users", async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: USER_SERVICE + req.url,
            data: req.body,
            headers: {
                "Authorization": req.headers["authorization"] || "",
                "Content-Type": "application/json"
            }
        });
        res.status(response.status).send(response.data);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// hospital service routing
app.use("/hospitals", async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: HOSPITAL_SERVICE + req.url,
            data: req.body,
            headers: req.headers
        });
        res.status(response.status).send(response.data);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.listen(PORT,() =>{
    console.log(`Api gateway running on port ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send(" health record  server running successfully");
})




// // database

// app.get('/create-table', (req, res) => {
//   const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS user_register (
//       user_id INT AUTO_INCREMENT PRIMARY KEY,
//       username VARCHAR(100) NOT NULL,
//       email VARCHAR(100) NOT NULL UNIQUE,
//       password VARCHAR(255) NOT NULL
//     );
//   `;

//   db.query(createTableQuery, (err, result) => {
//     if (err) {
//       console.error(' Error creating table:', err);
//       res.status(500).send('Error creating table');
//     } else {
//       console.log('Table created successfully');
//       res.send('Table created successfully!');
//     }
//   });
// });