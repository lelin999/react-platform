import React, { Component } from 'react';
import "./Counter.css"

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}

	increment() {
		this.setState({count: this.state.count + 1});
	}

	render() {
		let buttonStyle = {
			backgroundColor: 'red'
		}

		if (this.state.count > 14) {
			buttonStyle = {
				backgroundColor: 'blue'
			}
		}

		return(
			<div className="counter">
				<div className="nameDisplay">
					<h3>Hello {this.props.name}</h3>
				</div>
				<div className="button">
					<button 
						onClick={() => this.increment()}
						style={buttonStyle}
					>
						Click Me!
					</button>
				</div>
				<div className="countDisplay">
					<h1>{this.state.count}</h1>
				</div>
			</div>
		)
	}
}

export default Counter;