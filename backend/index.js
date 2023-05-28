const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const priceRoutes = require("./routes/prices");
const userRoutes = require("./routes/user");
const orderRoutes = require("./routes/orders");
const holdingRoutes = require("./routes/holdings");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));

app.use(cors());
app.use("/api/v1/prices", priceRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/holdings", holdingRoutes);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
