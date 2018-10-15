import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let playerName = this.refs.playerName.value;
        if (playerName) {
            this.refs.playerName.value = '';
            this.props.addPlayer({
                _id: uuid(),
                name: playerName,
                score: 0
            });
        }
    }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit} className="add-player">
                    <input className="add-player__input" type="text" placeholder="Add Player" ref="playerName" autoComplete="off" name="playerName"/>
                    <button className="button">Add Player</button>
                </form>
            </div>
        );
    }   
}

AddPlayer.propTypes = {
    addPlayer: PropTypes.func.isRequired
};

export default AddPlayer;