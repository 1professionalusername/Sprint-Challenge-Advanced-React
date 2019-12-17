import React from 'react';

const PlayerCard = props => {
    console.log('P Card', props);
    const { player } = props;

    return (
        <div key={player.id}>
            <h2>{player.name} </h2>
            {player.country}
        </div >
    );
};

export default PlayerCard;