const express = require('express');
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();
// Configurations
app.set('PORT', 3000 || process.env.PORT);
const PORT = app.get('PORT');

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
app.use(cors());
// Routes
app.use('/', authRoute);

// App Listen
app.listen(PORT, () => {
	console.log('Hello guys, the app is working!');
});
