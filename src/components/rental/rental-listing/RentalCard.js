import React from 'react';
import { Link } from 'react-router-dom';

export function RentalCard(props) {
	const rental = props.rental;

	return (
		<div className={props.colNum}>
			<Link className="rental-detail-link" to={`/rentals/${rental.id}`}>
				<div className="card sn-card">
					<img src={rental.image} alt={rental.title} className="card-img-top" />
					<div className="card-block">
						<h6 className={`card-subtitle ${rental.category}`}>
							{rental.shared ? `Shared` : `Entire`} {rental.category}
						</h6>
						<h4 className="card-title">
							{rental.bedrooms}BR/{rental.bathrooms}bath {rental.title}
						</h4>
						<p className="card-text">Cheap as Rs.{rental.dailyRate} per night! &#183; Free Cancelation</p>
					</div>
				</div>
			</Link>
		</div>
	);
}
