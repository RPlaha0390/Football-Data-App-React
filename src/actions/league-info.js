import axios from 'axios';

export const fetchLeagueInfo = (id) => {
  return (dispatch) => {
    return axios.get(`http://api.football-data.org/v1/competitions/${id}`, {
      headers: {
        'X-Auth-Token': 'f3437f1a7d194a35ad8572244d391bde'
      }
    }).then(response => {
        dispatch(fetchLeagueInfoSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const fetchLeagueInfoSuccess = (selectedLeague) => {
  return {
    type: 'FETCH_LEAGUE_INFORMATION_SUCCESS',
    payload: selectedLeague
  }
};