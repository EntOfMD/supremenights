const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rentalSchema = new Schema({
	id: { type: Number, required: true },
	title: { type: String, required: true, max: [128, 'Too many characters!'] },
	city: { type: String, required: true, lowercase: true },
	street: { type: String, required: true, lowercase: true },
	category: { type: String, required: true, lowercase: true },
	image: { type: String, required: true },
	bedrooms: { type: Number, required: true },
	bathrooms: { type: Number, required: true },
	description: { type: String, required: true },
	dailyRate: { type: Number, required: true },
	shared: { type: Boolean, required: true },
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Rental', rentalSchema);
