import React from 'react';
import PlayerCard from './PlayerCard.js';

const PlayerList = props => {
    console.log('PlayerList', props);
    const { players } = props;

    return (
        <div className='container'>
            {players.map(player => {
                return <PlayerCard player={player} />;
            })}
        </div>
    );
};

export default PlayerList;