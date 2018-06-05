export const fetchLeagueInfoReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LEAGUE_INFORMATION_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}