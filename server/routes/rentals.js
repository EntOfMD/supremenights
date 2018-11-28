const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('', (req, res) => {
	Rental.find({}, (err, list) => {
		res.json(list);
	});
});

router.get('/:id', (req, res) => {
	const rentalId = req.params.id;
	Rental.findById(rentalId, (err, list) => {
		if (err) {
			res.status(422).send({ errors: [{ title: 'Search Error!', detail: `Could not find id of ${rentalId}` }] });
		} else {
			res.json({ list });
		}
	});
});

module.exports = router;
