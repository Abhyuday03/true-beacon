const pool = require("../db");
const queries = require("../queries");
const userModel = require("../Models/user");
const bcrypt = require("bcryptjs");

const signUpUser = async (req, res) => {
  let user = new userModel.User(req.body);
  console.log(user.broker);

  let result = await pool.query(
    queries.checkEmailExists,
    [user.email],
    async (error, result) => {
      if (result.rows.length) {
        res.status(400).send({ status: "Email Already Exists" });
      } else {
        user.password = await userModel.hashPassword(user.password);
        console.log(user.password);
        pool.query(
          queries.saveUser,
          [
            user.user_name,
            user.email,
            user.created_at,
            user.user_type,
            user.broker,
            user.password,
          ],
          async (error, result) => {
            if (error) throw error;
            user = result.rows[0].result;
            token = await userModel.generateAuthToken(user);
            pool.query(
              queries.addToken,
              [token, user.user_id],
              (error, result) => {
                if (error) throw error;
                user = result.rows[0].result;
                console.log(user);
                res
                  .status(200)
                  .json({ status: "success", data: result.rows[0].result });
              }
            );
          }
        );
      }
    }
  );

  //    res.send("hjj")
};

const loginUser = async (req, res) => {
  const userBody = new userModel.User(req.body);
  let result = await pool.query(
    queries.getUserbyEmail,
    [userBody.email],
    async (error, result) => {
      if (error) throw error;
      let user = result.rows[0];
      const isMatch = await bcrypt.compare(userBody.password, user.password);
      if (isMatch) {
        token = await userModel.generateAuthToken(user);
        pool.query(queries.addToken, [token, user.user_id], (error, result) => {
          if (error) throw error;
          user = result.rows[0].result;
          res
            .status(200)
            .json({ status: "success", data: result.rows[0].result });
        });
      } else res.status(200).send({ status: "Incorrect email or password" });
    }
  );
};

const logoutUser = async (req, res) => {
  const userBody = new userModel.User(req.body);
  pool.query(
    queries.checkEmailExists,
    [userBody.email],
    async (error, result) => {
      if (result.rows.length) {
        pool.query(queries.deleteToken, [userBody.user_id], (error, result) => {
          if (error) throw error;
          res.status(200).send({ status: "success" });
        });
      } else res.status(400).send({ status: "user does not exists" });
    }
  );
};

module.exports = {
  signUpUser,
  loginUser,
  logoutUser,
};
