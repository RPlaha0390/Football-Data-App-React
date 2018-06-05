function createObject(data) {
  let myArray = data.fixtures;


  const res = myArray.reduce(function(res, currentValue) {
    if ( res.indexOf(currentValue.matchday) === -1 ) {
      res.push(currentValue.matchday);
    }
    return res;

  }, []).map(function(matchday) {
    return {
      matchday: matchday,

      awayTeam: myArray.filter(function(elem) {
        return elem.matchday === matchday;
      }).map(function(elem) { return elem.awayTeamName; }),

      homeTeam: myArray.filter(function(elem) {
        return elem.matchday === matchday;
      }).map(function(elem) { return elem.homeTeamName; }),

      results: myArray.filter(function(elem) {
        return elem.matchday === matchday;
      }).map(function(elem) { return elem.result; })
    }
  });

  data.fixtures = res;

  return data;
}

export const fetchLeagueFixturesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LEAGUE_FIXTURES_SUCCESS':


      var fixtures = createObject(action.payload);

			
      return fixtures;
    default:
      return state;
  }
}

