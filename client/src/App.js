import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import PlayerList from './components/PlayerList.js';
import Navbar from './components/NavBar.js';

function App() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data)
        setPlayers(res.data);
      })
      .catch(error => {
        console.log('err', error)
      })

  }, [])

  return (
    <div className="App">
      <title>2019 Women's World Cup</title>
      <Navbar />
      <PlayerList players={players} />
    </div>
  );
}
export default App;