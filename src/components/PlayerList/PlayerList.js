import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import Player from './../Player/Player';

const PlayerList = (props) => {
    const { players } = props;
    return (
        <div className="player-list">
            {
                players.length > 0 ? (
                    <FlipMove maintainContainerHeight={true}>
                        {
                            players.map((player) => {
                                return <Player key={player._id} player={player} incScore={props.incScore} decScore={props.decScore} removePlayer={props.removePlayer} />
                            })
                        }
                    </FlipMove>
                ) : (
                        <div className="card">
                            <p className="card__zero">Add First Player To Get Started</p>
                        </div>
                    )
            }
        </div>
    );
};

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
};

export default PlayerList;