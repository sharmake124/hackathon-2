const db = require("../db/db");

const table = process.env.TEST_TABLE;

// GET LES TOP 3 PRODUITS DU CONSOMMATEUR PAS ECOLO
const getProduct = async (req, res) => {
  const sql = `SELECT productName, alt_name FROM ${table} WHERE consumerId= ? limit 3`;

  try {
    const [results] = await db.promise().query(sql, [req.params.id]);

    res.json(results);
  } catch (error) {
    console.error("MySQL query error:", error);
    res.status(500).send("Internal Server Error");
  }
};

// GET LE CONSUMMER ID EN FONCTION DE SES INFOS
const getSingleConsumer = async (req, res) => {
  const sql = `SELECT consumerId FROM ${table} WHERE firstName = ? AND lastName = ? AND birthDate = ?`;

  try {
    const [results] = await db
      .promise()
      .query(sql, [
        req.query.firstName,
        req.query.lastName,
        req.query.birthDate,
      ]);
    res.json(results);
  } catch (error) {
    console.error("MySQL query error:", error);
    res.status(500).send("Internal Server Error");
  }
};

// LE PRODUIT FINAL EN FONCTION DU QUESTIONNAIRE
const getBonusProduct = async (req, res) => {
  const sql = `SELECT alt_name FROM ${table} WHERE hairColor= ? AND hairShape = ? AND hairType = ? limit 1`;

  try {
    const [results] = await db
      .promise()
      .query(sql, [
        req.query.hairColor,
        req.query.hairShape,
        req.query.hairType,
      ]);
    console.log(res.json(results));
  } catch (error) {
    console.error("MySQL query error:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getProduct,
  getSingleConsumer,
  getBonusProduct,
};
