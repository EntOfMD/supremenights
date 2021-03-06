import { FETCH_RENTALS, FETCH_RENTALS_BY_ID_SUCCESS, FETCH_RENTALS_BY_ID_INIT } from './types';

const rentals = [
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

const fetchRentalByIdInit = () => {
	return {
		type: FETCH_RENTALS_BY_ID_INIT,
	};
};

const fetchRentalByIdSuccess = (rental) => {
	return {
		type: FETCH_RENTALS_BY_ID_SUCCESS,
		rental,
	};
};

export const fetchRentals = () => {
	return {
		type: FETCH_RENTALS,
		rentals,
	};
};

export const fetchRentalById = (rentalId) => {
	return function(dispatch) {
		dispatch(fetchRentalByIdInit());
		/* Waits ms to replicate server call */
		setTimeout(() => {
			const rental = rentals.find((rental) => rental.id === rentalId);
			dispatch(fetchRentalByIdSuccess(rental));
		}, 400);
	};
};
