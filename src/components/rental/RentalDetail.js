import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class RentalDetail extends React.Component {
	render() {
		return (
			<div>
				<h1>this is ID: {this.props.match.params.id}</h1>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps)(RentalDetail);
