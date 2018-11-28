//module imports
const express = require('express'),
	mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const config = require('./config/dev'),
	Rental = require('./models/rental');

/* database */
mongoose.connect(
	config.getDbConnectionString(),
	{ useNewUrlParser: true },
	(err) => {
		if (err) {
			throw err;
		} else {
			console.log(`Successfully connected to database.`);
		}
	}
);
app.get('/rentals', (req, res) => {
	res.json({ success: true });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
