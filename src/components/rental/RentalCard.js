import React from 'react';

export function RentalCard() {
	return (
		<div className="col-md-3 col-xs-6">
			<div className="card sn-card">
				<img
					src="http://www.mysrilankaholidays.com/gallery/tea-trails-1.jpg"
					alt="#"
					className="card-img-top"
				/>
				<div className="card-block">
					<h6 className="card-subtitle">Whole House</h6>
					<h4 className="card-title">2BR/1bath full kitchen bungalow</h4>
					<p className="card-text">Cheap as $100 per night! &#183; Free Cancelation</p>
					<a href="/" target="_blank" rel="noopener noreferrer" className="card-link">
						More Info
					</a>
				</div>
			</div>
		</div>
	);
}
