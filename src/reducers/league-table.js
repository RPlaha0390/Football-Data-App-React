export const fetchLeagueTableReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LEAGUE_TABLE_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}