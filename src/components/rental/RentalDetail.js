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
					<h5>Post title: {rental.title}</h5>
					<h5>Post ID: {rental.id}</h5>
					<h5>Post Description: {rental.description}</h5>
					<h5>
						Post Bed/Bath count:&nbsp;
						{rental.bedrooms}
						{rental.bedrooms > 1 ? ' Bedrooms' : ' Bedroom'}
						&nbsp; and &nbsp;
						{rental.bathrooms}
						{rental.bathrooms > 1 ? ' Bathrooms' : ' Bathroom'}
					</h5>
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
