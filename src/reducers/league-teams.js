export const fetchLeagueTeamsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LEAGUE_TEAMS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}