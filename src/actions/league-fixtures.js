import axios from 'axios';

export const fetchLeagueFixtures = (url) => {
  return (dispatch) => {
    return axios.get(url, {
      headers: {
        'X-Auth-Token': 'f3437f1a7d194a35ad8572244d391bde'
      }
    }).then(response => {
        dispatch(fetchLeagueFixturesSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const fetchLeagueFixturesSuccess = (leagueFixtures) => {
  return {
    type: 'FETCH_LEAGUE_FIXTURES_SUCCESS',
    payload: leagueFixtures
  }
};