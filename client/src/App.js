import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import PlayerList from './components/PlayerList.js';
import Navbar from './components/NavBar.js';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data)

        this.setState({
          setPlayers: res.data
        })
      })

      .catch(error => {
        console.log('err', error)
      })
  }


  render() {
    return (
      <div className="App">
        <title>2019 Women's World Cup</title>
        <Navbar />
        <PlayerList players={this.state.players} />
      </div>
    )
  }
}
export default App;