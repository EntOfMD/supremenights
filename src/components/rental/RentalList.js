import React from 'react';
import { RentalCard } from './RentalCard';

export class RentalList extends React.Component {
	constructor() {
		super();
		this.state = {
			rentals: [1, 2, 3],
		};
	}

	renderRentals() {
		return this.state.rentals.map((rental) => {
			return <RentalCard />;
		});
	}

	/* 	addListing() {
		const listings = this.state.rentals;
		listings.push(1);

		this.setState({
			listings,
		});
	} */

	render() {
		return (
			<section id="rentalListing">
				<h1 className="page-title">Your home in the Jewel of Indian Ocean</h1>
				<div className="row">
					{/* rental properties should display below here */}
					{this.renderRentals()}
				</div>
				{/* <button
					onClick={() => {
						this.addListing();
					}}
				>
					Add Listing
				</button> */}
			</section>
		);
	}
}
