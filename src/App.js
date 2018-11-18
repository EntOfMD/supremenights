import React, { Component } from 'react';
import { Header } from './shared/Header';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<section id="rentalListing">
						<h1 className="page-title">Your home in the Jewel of Indian Ocean</h1>
						<div className="row">
							{/* rental properties should display below here */}
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
							<div className="col-md-3 col-xs-6">
								<div className="card sn-card">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEcWm2yv2teIBn9oRqE8SekFHSeWdl8aCsstxSsqJorRYpu40gg"
										alt="#"
										className="card-img-top"
									/>
									<div className="card-block">
										<h6 className="card-subtitle">Unique Design</h6>
										<h4 className="card-title">2BR/2bath UNIQUE bungalow</h4>
										<p className="card-text">Cheap as $200 per night! &#183; Free Cancelation</p>
										<a href="/" target="_blank" rel="noopener noreferrer" className="card-link">
											More Info
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-xs-6">
								<div className="card sn-card">
									<img
										src="http://www.lankaholidays.com/pics/41706/115712590.jpg"
										alt="#"
										className="card-img-top"
									/>
									<div className="card-block">
										<h6 className="card-subtitle">Luxury Bungalow</h6>
										<h4 className="card-title">5BR/5Bath Luxury Bungalow w/ Pool!</h4>
										<p className="card-text">Cheap as $300 per night! &#183; Free Cancelation</p>
										<a href="/" target="_blank" rel="noopener noreferrer" className="card-link">
											More Info
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default App;
