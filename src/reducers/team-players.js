function sortPlayersByPosition(data) {
	const positions = [
  	'Keeper', 'Defender', 'Centre-Back', 'Right-Back', 'Left-Back', 'Defensive Midfield',
		'Central Midfield', 'Attacking Midfield','Right Midfield', 'Left Midfield','Right Wing', 'Left Wing', 'Secondary Striker', 'Centre-Forward',
	];

	let playersGroupedByPosition = data.players.sort((a, b) => {return positions.indexOf(a.position) - positions.indexOf(b.position)});

	data.players = playersGroupedByPosition

	return data;
}

export const fetchTeamPlayersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TEAM_PLAYERS_SUCCESS':

   		var sortedPlayers = sortPlayersByPosition(action.payload);
      return sortedPlayers;
    default:
      return state;
  }
}