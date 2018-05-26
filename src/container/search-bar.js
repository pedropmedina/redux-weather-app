import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	state = { term: '' };

	onInputChange = event => {
		const { value } = event.target;
		this.setState({ term: value });
	};

	onFormSubmit = event => {
		event.preventDefault();
		const { term } = this.state;
		this.props.dispatch(fetchWeather(term));
		this.setState({ term: '' });
	};

	render() {
		const { term } = this.state;

		return (
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input
					type="text"
					placeholder="Get a five-day forecast in your favorite citites."
					className="form-control"
					value={term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</span>
			</form>
		);
	}
}

export default connect()(SearchBar);
