import React, { Component } from 'react';
import DogDetails from './DogDetails';
import DogList from './DogList';
import { Switch, Route, Redirect } from 'react-router-dom';

class Routes extends Component {
	render() {
		const getDog = props => {
			const name = props.match.params.name;
			const currentDog = this.props.dogs.find(
				dog => dog.name.toLowerCase() === name.toLowerCase()
			);

			return <DogDetails {...props} dog={currentDog} />;
		};
		return (
			<Switch>
				<Route
					exact
					path='/dogs'
					render={props => <DogList dogs={this.props.dogs} {...props} />}
				/>
				<Route exact path='/dogs/:name' render={getDog} />
				<Redirect to='/dogs' />
			</Switch>
		);
	}
}

export default Routes;
