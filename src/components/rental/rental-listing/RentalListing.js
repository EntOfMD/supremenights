import React from 'react';
import { RentalList } from './RentalList';
import { connect } from 'react-redux';

import * as actions from 'actions';

class RentalListing extends React.Component {
	componentWillMount() {
		/* dispatch is available because of connect() */
		this.props.dispatch(actions.fetchRentals());
	}

	render() {
		return (
			<section id="rentalListing">
				<h1 className="page-title">Your home in the Jewel of Indian Ocean</h1>
				<RentalList rentals={this.props.rentals} />
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		rentals: state.rentals.data,
	};
}

export default connect(mapStateToProps)(RentalListing);
