const moment = require("moment");
const db = require("./db/db");

const userTable = process.env.TEST_TABLE || "table_name";

// login controller
const getLogin = async (req, res) => {
  try {
    const { firstName, lastName, birthDate } = req.body;

    if (!firstName || !lastName || !birthDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const sql = `SELECT consumerId FROM ${userTable} WHERE firstName = ? AND lastName = ? AND birthDate = ?`;
    const [results] = await db
      .promise()
      .query(sql, [firstName, lastName, birthDate]);

    if (results.length === 0) {
      return res.status(401).json({ success: false, message: "Login failed" });
    }

    // consumerId is a unique identifier for the user
    const userId = results[0].consumerId;

    res.json({ success: true, userId, message: "Login successful" });
  } catch (error) {
    console.error("MySQL query error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
// const createUser = async (req, res) => {
//   const { firstName, lastName, birthDate } = req.body;

//   if (!firstName || !lastName || !birthDate) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Missing required fields" });
//   }

//   try {
//     // Convert 'birthday' to 'YYYY-MM-DD' format
//     const formattedBirthday = moment(birthDate, "MM/DD/YYYY").format(
//       "YYYY-MM-DD"
//     );

//     const sql = `INSERT INTO ${userTable} (firstName, lastName, birthDate) VALUES (?, ?, ?, ?, ?)`;
//     const [result] = await db
//       .promise()
//       .query(sql, [firstName, lastName, formattedBirthday]);

//     res
//       .status(201)
//       .json({ success: true, id: result.insertId, message: "User created" });
//   } catch (error) {
//     console.error("MySQL query error:", error);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// };
module.exports = {
  getLogin,
  // createUser,
};
