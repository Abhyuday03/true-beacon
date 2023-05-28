const fs = require("fs");
const csv = require("fast-csv");
const data = [];
const pool = require("../db");
const queries = require("../queries");
const { error } = require("console");


const addPricesFromCsv = (req, res) => {
    fs.createReadStream("./historical_prices.csv")
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => console.error(error))
      .on("data", (row) => data.push(row))
      .on("end", () => {data.forEach((data) => {
           pool.query(queries.insertPrice, [
             data.date,
             data.price,
             data.instrument_name,
           ],(error,results)=>{
            if(error) throw error;
            console.log((results.rows))
           });
        // console.log(data.price);
      });
    });
    
  res.send("using api route");
};

const getPrices=(req,res)=>{
    symbol=req.query.symbol
    fromDate=req.query.fromDate
    toDate=req.query.toDate
    pool.query(
      queries.getPrices,
      [symbol, fromDate, toDate],
      async (error, results) => {
        if (error) throw error;
        results.rows.sort((a, b) => new Date(a.date) - new Date(b.date));
        res.status(200).json(results.rows);
      }
    );

}



module.exports = {
  addPricesFromCsv,
  getPrices
};
