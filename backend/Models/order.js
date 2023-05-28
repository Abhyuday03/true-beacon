class Order {
  constructor({
    user_id,
    order_id,
    symbol,
    price,
    quantity,
  }) {
    (this.user_id = user_id),
      (this.order_id = order_id),
      (this.symbol = symbol),
      (this.price = price),
      (this.quantity = quantity)
  }
}

module.exports={
    Order
}