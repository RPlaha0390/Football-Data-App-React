import axios from 'axios';

export const fetchLeagues = () => {
  return (dispatch) => {
    return axios.get('http://api.football-data.org/v1/competitions/', {
      headers: {
        'X-Auth-Token': 'f3437f1a7d194a35ad8572244d391bde'
      }
    }).then(response => {
        dispatch(fetchLeaguesSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchLeaguesSuccess = (leagues) => {
  return {
    type: 'FETCH_LEAGUES_SUCCESS',
    payload: leagues
  }
};