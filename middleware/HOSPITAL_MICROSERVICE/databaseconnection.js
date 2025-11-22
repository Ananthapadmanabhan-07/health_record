const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.Host_name,
  user: process.env.users,
  password: process.env.password,
  database: process.env.database,
});

// Test connection
(async () => {
  try {
    const  connection = await db.getConnection();
    console.log("SQL connection successful");
     connection.release();
  } catch (err) {
    console.error("SQL connection failed:", err);
  }
})();

module.exports = db;