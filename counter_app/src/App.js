import React, { Component } from 'react';
import Counter from "./Components/Counter/Counter.js"

class App extends Component { 
	constructor(props) {
		super(props);
	}

  render(){
    return(
      <Counter name="Howard" />
    )
  }
}
export default App;