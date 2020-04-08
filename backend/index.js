const express = require('express');
const app = express();
const authRoute = require('./routes/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', authRoute);

app.listen(3000, () => {
	console.log('Hello guys, the app is working!');
});
