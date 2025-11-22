const db = require('../databaseconnection');
const jwt = require('jsonwebtoken');


// hospital registration

exports.hospitalRegistration = async (req, res) => {
  console.log("inside the hospital registration");
  
  try{
    const { hospital_name,city,place,phone_number } = req.body;

     const [rows] = await db.query(
      "SELECT seriel_number FROM hospital ORDER BY seriel_number DESC LIMIT 1"
    );

    let NEWseriel_number = 11111;

    if (rows.length > 0) {
      NEWseriel_number = Number(rows[0].seriel_number) + 1;
    }

    // Insert user
    const insertQuery ="INSERT INTO hospital (seriel_number, hospital_name, city, place,phone_number) VALUES (?, ?, ?, ?,?)";

    await db.query(insertQuery, [NEWseriel_number, hospital_name, city, place,phone_number]);

    return res.status(201).json({
      message: "hospital added successfully",
      seriel_number: NEWseriel_number,
    });

  }catch(err){
    console.error("Hospital Registration error:", err);
    res.status(500).json("Internal server error");
  }
}