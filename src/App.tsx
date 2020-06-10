import React from 'react';
import logo from './logo.svg';
import './App.css';

import Renderer from './components/renderer'

class App extends React.Component {
  state = {
    isHidden: false
  }

  componentDidMount() {
    this.setState({ isHidden: true })
  }

  render() {
    const { isHidden } = this.state
    return (
      <div className="App">
        {/* <header className={`App-header Force-top ${isHidden ? 'hidden' : null}`}>
          <p>
            A visualization
          </p>
        </header> */}
        <Renderer />
      </div>
    );
  }
}

export default App;
