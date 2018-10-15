import numeral from 'numeral';

export const getSortedPlayers = (players) => {
    return players.sort((a, b) => {
        if (a.score > b.score) {
            return -1;
        } else if (a.score < b.score) {
            return 1;
        } else {
            return 0;
        }
    });
};

export const getPositionedPlayers = (players) => {
    let rank = 1;
    return players.map((player, index) => {
        if (index !== 0 && players[index - 1].score > player.score) {
            rank++;
        }

        return {
            ...player,
            rank,
            position: numeral(rank).format('Oo')
        };
    });
};