import axios from 'axios';

export const fetchLeagueTeams = (url) => {
  return (dispatch) => {
    return axios.get(url, {
      headers: {
        'X-Auth-Token': 'f3437f1a7d194a35ad8572244d391bde'
      }
    }).then(response => {
        dispatch(fetchLeagueTeamsSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const fetchLeagueTeamsSuccess = (leagueTeams) => {
  return {
    type: 'FETCH_LEAGUE_TEAMS_SUCCESS',
    payload: leagueTeams
  }
};