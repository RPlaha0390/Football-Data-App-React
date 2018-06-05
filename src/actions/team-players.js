import axios from 'axios';

export const fetchTeamPlayers = (url) => {
  return (dispatch) => {
    return axios.get(url, {
      headers: {
        'X-Auth-Token': 'f3437f1a7d194a35ad8572244d391bde'
      }
    }).then(response => {
        dispatch(fetchTeamPlayersSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchTeamPlayersSuccess = (players) => {
  return {
    type: 'FETCH_TEAM_PLAYERS_SUCCESS',
    payload: players
  }
};
