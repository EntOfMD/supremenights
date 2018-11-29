const Rental = require('./models/rental');

class seedDB {
	constructor() {
		this.rentals = [
			{
				id: `1`,
				title: `New house for rent`,
				city: `Negombo`,
				street: `Mark St`,
				category: `house`,
				image: `https://placeimg.com/350/250/arch/grayscale`,
				bedrooms: `1`,
				bathrooms: `1`,
				description: `Newly renovated single family house in city suburbs`,
				dailyRate: `50`,
				shared: 1,
				createdAt: `11/20/2018`,
			},
			{
				id: `2`,
				title: `Suites for rent! `,
				city: `Negombo`,
				street: `Mark St`,
				category: `suite`,
				image: `https://placeimg.com/350/250/arch/grayscale`,
				bedrooms: `2`,
				bathrooms: `1`,
				description: `Room in Fernando Hotel`,
				dailyRate: `100`,
				shared: 0,
				createdAt: `11/20/2018`,
			},
			{
				id: `3`,
				title: `Flat for rent`,
				city: `Negombo`,
				street: `Mark St`,
				category: `flat`,
				image: `https://placeimg.com/350/250/arch/grayscale`,
				bedrooms: `3`,
				bathrooms: `1`,
				description: `Room in Fernando Hotel`,
				dailyRate: `150`,
				shared: 0,
				createdAt: `11/20/2018`,
			},
			{
				id: `4`,
				title: `Unique hut!`,
				city: `Negombo`,
				street: `Mark St`,
				category: `hut`,
				image: `https://placeimg.com/350/250/arch/grayscale`,
				bedrooms: `4`,
				bathrooms: `4`,
				description: `fanciest hut in the wuuuurrld!`,
				dailyRate: `50`,
				shared: 0,
				createdAt: `11/20/2018`,
			},
		];
	}

	async removeDB() {
		await Rental.deleteMany({});
	}
	pushRentalstoDB() {
		this.rentals.forEach((rental) => {
			const newRental = new Rental(rental);
			newRental.save();
		});
	}

	seedDb() {
		this.removeDB();
		this.pushRentalstoDB();
	}
}

module.exports = seedDB;
