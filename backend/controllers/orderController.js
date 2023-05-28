const orderModel = require("../Models/order");
const userModel = require("../Models/user");
const pool = require("../db");
const queries = require("../queries");
const { error } = require("console");

const addOrder = (req, res) => {
  let order = new orderModel.Order(req.body);
  pool.query(
    queries.addOrder,
    [order.user_id, order.symbol, order.price, order.quantity],
    (error, result) => {
      if (error) throw error;
      order = result.rows[0].result;
      res.status(200).json({
        status: "success",
        data: {
          message: "Order Placed Successfully",
          order_id: order.order_id,
        },
      });
    }
  );
};

const getOrder = (req, res) => {
  const user = new userModel.User(req.user);
  pool.query(queries.getOrders, [user.user_id], (error, result) => {
    if (error) throw error;
    const order = result.rows;
    res.status(200).json(order);
  });
};

module.exports = {
  addOrder,
  getOrder,
};
