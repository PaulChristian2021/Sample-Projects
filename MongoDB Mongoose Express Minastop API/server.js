require("dotenv").config();
const port = process.env.PORT || 2022;
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_CONNECTION_URL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('***SERVER.JS***')
  console.error(err)
})
db.once('open', () => {
  console.log('***SERVER.JS***')
  console.log('Connected to database!')
})

app.use(express.json())

const productsRouter = require('./routes/products')
app.use('/products', productsRouter)

const helpArticlesRouter = require('./routes/helpArticles')
app.use('/help', helpArticlesRouter)

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log("=========" + port + "=========");
})