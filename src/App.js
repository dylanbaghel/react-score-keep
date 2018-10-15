import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header/Header';
import PlayerList from './components/PlayerList/PlayerList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import { getSortedPlayers, getPositionedPlayers } from './utils/getSortedPlayer';

class App extends Component {
  constructor(props) {
    super(props);
    this.addPlayer = this.addPlayer.bind(this);
    this.incScore = this.incScore.bind(this);
    this.decScore = this.decScore.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
    this.state = {
      players: []
    };
  }

  addPlayer(player) {
    this.setState((prevState) => ({
      players: [
        ...prevState.players,
        player
      ]
    }));
  }

  removePlayer(_id) {
    this.setState((prevState) => ({
      players: prevState.players.filter((player) => player._id !== _id)
    }));
  }

  incScore(_id) {
    this.setState((prevState) => ({
      players: prevState.players.map((player) => {
        if (player._id !== _id) {
          return player;
        }

        player.score++;
        return player;
      })
    }));
  }

  decScore(_id) {
    this.setState((prevState) => ({
      players: prevState.players.map((player) => {
        if (player._id !== _id) {
          return player;
        }

        player.score--;
        return player;
      })
    }));
  }


  render() {
    let players = getPositionedPlayers(getSortedPlayers(this.state.players));
    return (
      <div>
        <Header />
        <div className="wrapper">
          <PlayerList players={players} incScore={this.incScore} decScore={this.decScore} removePlayer={this.removePlayer} />
          <AddPlayer addPlayer={this.addPlayer} />
        </div>
      </div>
    );
  }
}

export default App;
