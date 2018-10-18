import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onPlayerNameChange = this.onPlayerNameChange.bind(this);
        this.state = {
            playerName: props.player ? "abhi" : ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.player) {
            this.props.updatePlayer(this.props.player._id, this.state.playerName);
        } else {
            if (this.state.playerName.trim()) {
                this.props.addPlayer({
                    _id: uuid(),
                    name: this.state.playerName,
                    score: 0
                });
    
                this.setState(() => ({
                    playerName: ''
                }));
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.player) {
            this.setState(() => ({
                playerName: nextProps.player.name
            }));
        } else {
            this.setState(() => ({
                playerName: ''
            }));
        }
    }

    onPlayerNameChange(e) {
        const playerName = e.target.value;
        this.setState(() => ({
            playerName
        }));
    }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit} className="add-player">
                    <input 
                    className="add-player__input" 
                    type="text" placeholder="Add Player" 
                    autoComplete="off"
                    value={this.state.playerName}
                    onChange={this.onPlayerNameChange} 
                    />
                    <button className="button">{this.props.player ? "Edit Player" : "Add Player"}</button>
                </form>
            </div>
        );
    }   
}

AddPlayer.propTypes = {
    addPlayer: PropTypes.func.isRequired
};

export default AddPlayer;