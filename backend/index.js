const express = require('express');
const authRoute = require('./routes/auth');
const childRoute = require('./routes/childs');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();
// Configurations
app.set('PORT', 3001 || process.env.PORT);
const PORT = app.get('PORT');

// Database Configuration
const urlDatabase = process.env.DB_URL;

mongoose.connect(
	'mongodb+srv://admin:admin@rest-api-k9fd2.mongodb.net/users?retryWrites=true&w=majority',
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('Database Running')
);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', authRoute);
app.use('/', childRoute);

// App Listen
app.listen(PORT, () => {
	console.log('Hello guys, the app is working!');
});
