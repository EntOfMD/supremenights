import React from 'react';
import { Link } from 'react-router-dom';

export function RentalCard(props) {
	const rental = props.rental;

	return (
		<div className={props.colNum}>
			<Link to={`/rentals/${rental.id}`}>
				<div className="card sn-card">
					<img src={rental.image} alt="#" className="card-img-top" />
					<div className="card-block">
						<h6 className="card-subtitle">
							{rental.shared ? `Shared` : `Entire`} {rental.category}
						</h6>
						<h4 className="card-title">
							{rental.bedrooms}BR/{rental.bathrooms}bath {rental.title}
						</h4>
						<p className="card-text">Cheap as Rs.{rental.dailyRate} per night! &#183; Free Cancelation</p>
						<a href="/" target="_blank" rel="noopener noreferrer" className="card-link">
							More Info
						</a>
					</div>
				</div>
			</Link>
		</div>
	);
}
