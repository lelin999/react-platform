import React, { Component } from 'react';

class Clock extends Component { 
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	removeClock() {

	}

	render() {
		return(
			<div className="Clock">
				<button className="remove" onClick={() => this.removeClock()}>
					Remove Clock
				</button>
			</div>
		)
	}
}

export default Clock;