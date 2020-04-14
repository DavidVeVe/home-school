<<<<<<< HEAD
<<<<<<< HEAD
const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
=======
=======
>>>>>>> 87f89eb705752ed61028c36808a984913ad8ccdb
const express = require('express');
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();
// Configurations
app.set('PORT', 3001 || process.env.PORT);
const PORT = app.get('PORT');
<<<<<<< HEAD
>>>>>>> 4a733467f82770fab716cde2af5c94753138bbca
=======
>>>>>>> 87f89eb705752ed61028c36808a984913ad8ccdb

// Database Configuration
const urlDatabase = process.env.DB_URL;
mongoose.connect(
  urlDatabase,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Database Running')
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
<<<<<<< HEAD
<<<<<<< HEAD

app.use("/", authRoute);

app.listen(3000, () => {
  console.log("Hello guys, the app is working!");
=======
=======
>>>>>>> 87f89eb705752ed61028c36808a984913ad8ccdb
app.use(cors());
// Routes
app.use('/', authRoute);

// App Listen
app.listen(PORT, () => {
<<<<<<< HEAD
	console.log('Hello guys, the app is working!');
>>>>>>> 4a733467f82770fab716cde2af5c94753138bbca
=======
  console.log('Hello guys, the app is working!');
>>>>>>> 87f89eb705752ed61028c36808a984913ad8ccdb
});
