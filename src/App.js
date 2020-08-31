import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "mohib"};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState((pervState, props) => ({
       name: pervState.name.toUPperCase()
    })
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.name}</p>
        <button type="button" onClick={this.handleClick}>
        UPPERCASE
        </button>
      </div>
    )
  }
}

export default App;
