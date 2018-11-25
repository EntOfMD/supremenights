import React from 'react';

export class RentalDetail extends React.Component {
	render() {
		return (
			<div>
				<h1>this is ID: {this.props.match.params.id}</h1>
			</div>
		);
	}
}
