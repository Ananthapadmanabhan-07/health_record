const db = require('../databaseconnection');
const jwt = require('jsonwebtoken');




// get all users
exports.getAllUsers = async (req, res) => {
  const Query = 'SELECT * FROM `user_register`';
  try {
    // db is configured to use the promise-based API elsewhere, so use await
    const [rows] = await db.query(Query);
    // return a consistent shape similar to other endpoints
    return res.status(200).json({ existingUser: rows });
  } catch (err) {
    console.error('Error fetching users:', err);
    return res.status(500).json({ error: 'Failed to fetch users' });
  }
}

// adduser
exports.adduser = async (req, res) => {
  console.log("inside add user function");
  
  try {
    const { username, email, password } = req.body;

    const [rows] = await db.query(
      "SELECT user_id FROM user_register ORDER BY user_id DESC LIMIT 1"
    );

    let newUserId = 11111;

    if (rows.length > 0) {
      newUserId = Number(rows[0].user_id) + 1;
    }

    // Insert user
    const insertQuery ="INSERT INTO user_register (user_id, username, email, password) VALUES (?, ?, ?, ?)";

    await db.query(insertQuery, [newUserId, username, email, password]);

    return res.status(201).json({
      message: "User added successfully",
      userId: newUserId,
    });

  } catch (err) {
    console.error("Error in adduser function:", err);
    return res.status(500).send("Internal server error");
  }
};

// user login
exports.userLogin = async (req, res) => {
  console.log("inside login function");

  const { username, password } = req.body;

  try {
    console.log("inside the try block");

    const [rows] = await db.query("SELECT * FROM `user_register` WHERE username = ? AND password = ?",[username, password]);

    console.log("DB Result:", rows);

    if (rows.length === 0) {
      return res.status(406).json("Invalid username or password");
    }

    const existingUser = rows[0];
    // token genration
    const token = jwt.sign({ userId: existingUser.user_id },process.env.secret_key );

    res.status(200).json({ existingUser, token});

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json("Internal server error");
  }
};

