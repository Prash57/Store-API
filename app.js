require("dotenv").config();
require('express-async-errors')

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");
// middleware
app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Product Routes</a>');
});
app.use("/api/v1/products", productsRouter);

// products routes

app.use(notFoundMiddleware);
app.use(errorMiddleware);
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connect db
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
