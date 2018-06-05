export const fetchLeaguesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LEAGUES_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

