const rentals = [
	{
		id: `1`,
		title: `Suites for rent! short or long term!`,
		city: `Negombo`,
		street: `Mark St`,
		category: `Suite`,
		image: `https://placeimg.com/350/250/arch/grayscale`,
		bedrooms: `1`,
		bathrooms: `1`,
		description: `Room in Fernando Hotel`,
		dailyRate: `50`,
		shared: 1,
		createdAt: `11/20/2018`,
	},
	{
		id: `2`,
		title: `Suites for rent! short or long term!`,
		city: `Negombo`,
		street: `Mark St`,
		category: `Suite`,
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
		title: `Suites for rent! short or long term!`,
		city: `Negombo`,
		street: `Mark St`,
		category: `Suite`,
		image: `https://placeimg.com/350/250/arch/grayscale`,
		bedrooms: `3`,
		bathrooms: `1`,
		description: `Room in Fernando Hotel`,
		dailyRate: `150`,
		shared: 0,
		createdAt: `11/20/2018`,
	},
	{
		id: `1`,
		title: `Suites for rent! short or long term!`,
		city: `Negombo`,
		street: `Mark St`,
		category: `Suite`,
		image: `https://placeimg.com/350/250/arch/grayscale`,
		bedrooms: `1`,
		bathrooms: `1`,
		description: `Room in Fernando Hotel`,
		dailyRate: `50`,
		shared: 0,
		createdAt: `11/20/2018`,
	},
];

export const rentalReducer = (state = rentals, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
