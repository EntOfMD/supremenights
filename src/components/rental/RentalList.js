import React from 'react';
import { RentalCard } from './RentalCard';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class RentalList extends React.Component {
	renderRentals() {
		return this.props.rentals.map((rental, index) => {
			return <RentalCard key={index} colNum="col-md-4 col-xs-6" rental={rental} />;
		});
	}

	componentWillMount() {
		/* dispatch is available because of connect() */
		this.props.dispatch(actions.fetchRentals());
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

function mapStateToProps(state) {
	return {
		rentals: state.rentals.data,
	};
}

export default connect(mapStateToProps)(RentalList);
