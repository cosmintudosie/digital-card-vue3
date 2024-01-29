const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
//dotenv.config();
const port = process.env.PORT || 1338;
dotenv.config({ path: "../config.env" });
const app = express();
const path = require("path");

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://digital-card.kokosan96.repl.co/register'); // Permite accesul doar de la originea specificată
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Metodele HTTP permise
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Antetele permise
  next();
});
// const products = require("./routes/api/products");
// const orders = require("./routes/api/orders");
const users = require("./routes/api/users");

// app.use("/api/products", products);
// app.use("/api/orders", orders);
app.use("/api/users", users);

// app.use(express.static(path.join(__dirname, '../', 'dist')));

//   app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../', 'dist', 'index.html'));
// });

app.listen(9000, function () {
  console.log("App listening on", 9000);
});
