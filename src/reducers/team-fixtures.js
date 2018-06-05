export const fetchTeamFixturesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TEAM_FIXTURES_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}