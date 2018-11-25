import React from 'react';
import { RentalCard } from './RentalCard';

export class RentalList extends React.Component {
	constructor() {
		super();
		this.state = {
			rentals: [
				{
					id: `1`,
					title: `Suites for rent! short or long term!`,
					city: `Negombo`,
					street: `Mark St`,
					category: `Suite`,
					image: `http://via.placeholder.com/350x250`,
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
					image: `http://via.placeholder.com/350x250`,
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
					image: `http://via.placeholder.com/350x250`,
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
					image: `http://via.placeholder.com/350x250`,
					bedrooms: `1`,
					bathrooms: `1`,
					description: `Room in Fernando Hotel`,
					dailyRate: `50`,
					shared: 0,
					createdAt: `11/20/2018`,
				},
			],
		};
	}

	renderRentals() {
		return this.state.rentals.map((rental, index) => {
			return <RentalCard key={index} colNum="col-md-4 col-xs-6" rental={rental} />;
		});
	}

	render() {
		return (
			<section id="rentalListing">
				<h1 className="page-title">Your home in the Jewel of Indian Ocean</h1>
				<div className="row">
					{/* rental properties should display below here */}
					{this.renderRentals()}
				</div>
			</section>
		);
	}
}
