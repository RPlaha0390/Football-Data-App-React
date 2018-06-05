import axios from 'axios';

export const fetchLeagueTable = (url) => {
  

  return (dispatch) => {
    return axios.get(url, {
      headers: {
        'X-Auth-Token': 'f3437f1a7d194a35ad8572244d391bde'
      }
    }).then(response => {
        dispatch(fetchLeagueTableSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const fetchLeagueTableSuccess = (leagueTable) => {
  return {
    type: 'FETCH_LEAGUE_TABLE_SUCCESS',
    payload: leagueTable
  }
};