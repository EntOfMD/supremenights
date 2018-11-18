import React, { Component } from 'react';
import { Header } from './shared/Header';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<p class="main">This is from App.js component</p>
			</div>
		);
	}
}

export default App;
