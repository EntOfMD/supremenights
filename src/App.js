import React, { Component } from 'react';
import { Header } from './shared/Header';
import { RentalCard } from './components/rental/RentalCard';

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
							<RentalCard />
							<RentalCard />
							<RentalCard />
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default App;
