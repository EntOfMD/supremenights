import { FETCH_RENTALS, FETCH_RENTALS_BY_ID_SUCCESS } from './types';

const rentals = [
	{
		id: `1`,
		title: `New house for rent`,
		city: `Negombo`,
		street: `Mark St`,
		category: `Suite`,
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
		id: `4`,
		title: `Suites for rent! short or long term!`,
		city: `Negombo`,
		street: `Mark St`,
		category: `Suite`,
		image: `https://placeimg.com/350/250/arch/grayscale`,
		bedrooms: `4`,
		bathrooms: `4`,
		description: `Room in Fernando Hotel`,
		dailyRate: `50`,
		shared: 0,
		createdAt: `11/20/2018`,
	},
];

export const fetchRentals = () => {
	return {
		type: FETCH_RENTALS,
		rentals,
	};
};

export const fetchRentalById = (rentalId) => {
	return function(dispatch) {
		/* Waits ms to replicate server call */
		setTimeout(() => {
			const rental = rentals.find((rental) => rental.id === rentalId);
			dispatch(fetchRentalByIdSuccess(rental));
		}, 1000);
	};
};

const fetchRentalByIdSuccess = (rental) => {
	return {
		type: FETCH_RENTALS_BY_ID_SUCCESS,
		rental,
	};
};
