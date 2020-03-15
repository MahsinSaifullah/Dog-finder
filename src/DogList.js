import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

class DogList extends Component {
	state = {};
	render() {
		return (
			<div className='DogList'>
				<h1 className='display-1 text-center my-5'>Dog Finder!</h1>

				<div className='row'>
					{this.props.dogs.map(dog => (
						<div
							onClick={() => this.props.history.push(`/dogs/${dog.name}`)}
							className='Dog col-lg-4 text-center'
							key={dog.name}
						>
							<img src={dog.src} />

							<h3>
								<Link className='underline' to={`/dogs/${dog.name}`}>
									{dog.name}
								</Link>
							</h3>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default DogList;
