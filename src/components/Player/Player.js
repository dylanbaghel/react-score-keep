import React from 'react';
import PropTypes from 'prop-types';

import { capitalize } from './../../utils/capitalize';

class Player extends React.Component {
    render() {
        const { player } = this.props;
        const playerRankClassName = `player--position-${player.rank}`;
        return (
            <div className={`card ${playerRankClassName} ${player.dim}`} onClick={() => {
                this.props.findPlayer(player._id);
            }}>
                <div className="player">
                    <div>
                        <h2 className="player__name">{capitalize(player.name)}</h2>
                        <p className="player__stats">{player.position} place {player.score} point(s).</p>
                    </div>
                    <div className="player__actions">
                        <button className="button button-round" onClick={(e) => {
                            e.stopPropagation();
                            this.props.incScore(player._id);
                        }}>+</button>
                        <button className="button button-round" onClick={(e) => {
                            e.stopPropagation();
                            this.props.decScore(player._id);
                        }}>-</button>
                        <button className="button button-round" onClick={(e) => {
                            e.stopPropagation();
                            this.props.removePlayer(player._id);
                        }}>X</button>
                    </div>
                </div>
            </div>
        );
    }
};

Player.propTypes = {
    player: PropTypes.object.isRequired
};

export default Player;