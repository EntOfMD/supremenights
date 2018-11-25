import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class RentalDetail extends React.Component {
	componentWillMount() {
		/* Dispatch action */
		const rentalId = this.props.match.params.id;
		this.props.dispatch(actions.fetchRentalById(rentalId));
	}

	render() {
		const rental = this.props.rental;
		if (rental) {
			return (
				<div>
					<h3>Post title: {rental.title}</h3>
					<h3>Post ID: {rental.id}</h3>
					<h3>Post Description: {rental.description}</h3>
					<h3>
						Post Bed/Bath count:&nbsp;
						{rental.bedrooms}
						{rental.bedrooms > 1 ? ' Bedrooms' : ' Bedroom'}
						&nbsp; and &nbsp;
						{rental.bathrooms}
						{rental.bathrooms > 1 ? ' Bathrooms' : ' Bathroom'}
					</h3>
				</div>
			);
		} else return `cannot find that post`;
	}
}

function mapStateToProps(state) {
	return {
		rental: state.rental.data,
	};
}

export default connect(mapStateToProps)(RentalDetail);
