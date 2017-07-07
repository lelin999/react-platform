import React, { Component } from 'react';
import Clock from "./Components/Clock/Clock.js";

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	addClock() {

	}

  render(){
	  return(
  	  <div className="App">
  	  	<button className="add" onClick={() => this.addClock()}>
  	  		Add Clock
  	  	</button>
  	  	<Clock />

  	  </div>
    )
  }
}
export default App;