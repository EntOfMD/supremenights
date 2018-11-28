//module imports
const express = require('express'),
	mongoose = require('mongoose');

const app = express();
const config = require('./config/dev'),
	Rental = require('./models/rental'),
	seedDB = require('./seedDB'),
	rentalRoutes = require('./routes/rentals');

const PORT = process.env.PORT || 3001;

//middleware
app.use('/api/v1/rentals', rentalRoutes);

// database
mongoose.connect(
	config.getDbConnectionString(),
	{ useNewUrlParser: true },
	(err) => {
		if (err) {
			throw err;
		} else {
			console.log(`Successfully connected to database.`);
			const seed = new seedDB();
			seed.seedDb();
		}
	}
);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
