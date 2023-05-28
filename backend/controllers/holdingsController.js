const userModel = require("../Models/user");
const holdingModel = require("../Models/holding");
const pool = require("../db");
const queries = require("../queries");
const { error } = require("console");


const addHolding = (req, res) => {
  let holding = new holdingModel.Holding(req.body);
  pool.query(
    queries.addHolding,
    [
      holding.authorised_date,
      holding.average_price,
      holding.close_price,
      holding.day_change,
      holding.day_change_percentage,
      holding.exchange,
      holding.isin,
      holding.last_price,
      holding.pnl,
      holding.quantity,
      holding.tradingsymbol,
    ],
    (error, result) => {
      if (error) throw error;
      res.status(200).json({
        status: "success",
        data: {
          message: "holding added Successfully",
        },
      });
    }
  );
};

const getHoldings = (req, res) => {
  pool.query(queries.getHoldings,(error, result) => {
    if (error) throw error;
    const holdings = result.rows;
    res.status(200).json(holdings);
  });
};

module.exports = {
  getHoldings,
  addHolding
};
