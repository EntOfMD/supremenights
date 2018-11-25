import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import * as redux from 'redux';
import { Provider } from 'react-redux';

import { Header } from './shared/Header';
import RentalList from './components/rental/RentalList';
import { RentalDetail } from './components/rental/RentalDetail';

import './App.css';

class App extends Component {
	render() {
		/* this is a bad place to put the store, but will be moved in the future */
		const store = redux.createStore(() => {
			return {
				rentals: [
					{
						id: `1`,
						title: `Suites for rent! short or long term!`,
						city: `Negombo`,
						street: `Mark St`,
						category: `Suite`,
						image: `https://placeimg.com/350/250/arch/grayscale`,
						bedrooms: `1`,
						bathrooms: `1`,
						description: `Room in Fernando Hotel`,
						dailyRate: `50`,
						shared: 1,
						createdAt: `11/20/2018`,
					},
					{
						id: `2`,
						title: `Suites for rent! short or long term!`,
						city: `Negombo`,
						street: `Mark St`,
						category: `Suite`,
						image: `https://placeimg.com/350/250/arch/grayscale`,
						bedrooms: `2`,
						bathrooms: `1`,
						description: `Room in Fernando Hotel`,
						dailyRate: `100`,
						shared: 0,
						createdAt: `11/20/2018`,
					},
					{
						id: `3`,
						title: `Suites for rent! short or long term!`,
						city: `Negombo`,
						street: `Mark St`,
						category: `Suite`,
						image: `https://placeimg.com/350/250/arch/grayscale`,
						bedrooms: `3`,
						bathrooms: `1`,
						description: `Room in Fernando Hotel`,
						dailyRate: `150`,
						shared: 0,
						createdAt: `11/20/2018`,
					},
					{
						id: `1`,
						title: `Suites for rent! short or long term!`,
						city: `Negombo`,
						street: `Mark St`,
						category: `Suite`,
						image: `https://placeimg.com/350/250/arch/grayscale`,
						bedrooms: `1`,
						bathrooms: `1`,
						description: `Room in Fernando Hotel`,
						dailyRate: `50`,
						shared: 0,
						createdAt: `11/20/2018`,
					},
				],
			};
		});
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div className="App">
						<Header />
						<div className="container">
							<Route exact path="/" render={() => <Redirect to={`/rentals`} />} />
							<Route exact path={`/rentals`} component={RentalList} />
							<Route exact path={`/rentals/:id`} component={RentalDetail} />
						</div>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
