class Holding {
  constructor({
    holding_id,
    tradingsymbol,
    exchange,
    isin,
    quantity,
    authorised_date,
    average_price,
    last_price,
    close_price,
    pnl,
    day_change,
    day_change_percentage,
  }) {
      (this.holding_id = holding_id),
      (this.tradingsymbol = tradingsymbol),
      (this.exchange = exchange),
      (this.isin = isin);
      (this.quantity = quantity);
      (this.authorised_date = authorised_date);
      (this.average_price = average_price);
      (this.last_price = last_price);
      (this.close_price = close_price);
      (this.pnl = pnl);
      (this.day_change = day_change);
      (this.day_change_percentage = day_change_percentage);
  }
}

module.exports = {
  Holding,
};
