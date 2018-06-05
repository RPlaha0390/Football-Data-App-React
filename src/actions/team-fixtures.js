import axios from 'axios';

export const fetchTeamFixtures = (url) => {
  console.log(url);
  return (dispatch) => {
    return axios.get(url, {
      headers: {
        'X-Auth-Token': 'f3437f1a7d194a35ad8572244d391bde'
      }
    }).then(response => {
        dispatch(fetchTeamFixturesSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchTeamFixturesSuccess = (teamFixtures) => {
  return {
    type: 'FETCH_TEAM_FIXTURES_SUCCESS',
    payload: teamFixtures
  }
};