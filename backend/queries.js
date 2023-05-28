const insertPrice= "INSERT INTO prices (date, price, symbol) VALUES ($1, $2, $3)";
const getPrices = "SELECT * FROM prices WHERE symbol = $1 and date >= $2::date and date<=$3::date";
const saveUser ="INSERT INTO users (user_name, email, created_at, user_type, broker, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING json_build_object('user_id',users.user_id, 'user_name',users.user_name,'email',users.email,'broker', users.broker,'user_type', users.user_type, 'created_at',users.created_at) AS result";
const checkEmailExists = "SELECT s FROM users s WHERE s.email = $1";
const getUserbyEmail ="SELECT * FROM users WHERE email = $1";

const addToken ="UPDATE users SET token = $1 WHERE user_id = $2 RETURNING json_build_object('user_id',users.user_id, 'user_name',users.user_name,'email',users.email,'broker', users.broker,'user_type', users.user_type, 'created_at',users.created_at, 'token',users.token) AS result";
const findUserByIdAndToken = "SELECT * FROM users WHERE user_id = $1 and token = $2"
const deleteToken = "UPDATE users SET token=NULL where user_id =$1"
const addOrder ="INSERT INTO orders (user_id, symbol, price, quantity) VALUES ($1, $2, $3, $4) RETURNING json_build_object('order_id',orders.order_id) AS result";
const getOrders = "SELECT * FROM orders WHERE user_id = $1"
const addHolding ="INSERT INTO holdings (authorised_date,average_price,close_price,day_change,day_change_percentage,exchange,isin,last_price,pnl,quantity,tradingsymbol) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
const getHoldings="SELECT * FROM holdings"

module.exports = {
  insertPrice,
  getPrices,
  saveUser,
  checkEmailExists,
  addToken,
  getUserbyEmail,
  findUserByIdAndToken,
  deleteToken,
  addOrder,
  getOrders,
  addHolding,
  getHoldings
};