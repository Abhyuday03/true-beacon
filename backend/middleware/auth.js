const jwt = require("jsonwebtoken");
const userModel = require("../Models/user");
const pool = require("../db");
const queries = require("../queries");

const auth = async (req, res, next) => {
  try {
    // let user = new userModel.User()
    let user;
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    await pool.query(
      queries.findUserByIdAndToken,
      [decoded._id, token],
      async (error, result) => {
        if (error) throw error;
        user = result.rows[0];

        if (!user) {
          throw error;
        }

        req.token = token;
        req.user = user;
        next();
      }
    );
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
