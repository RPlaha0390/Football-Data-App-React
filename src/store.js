import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import createHistory from 'history/createBrowserHistory';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import logger from 'redux-logger';


import { fetchLeaguesReducer } from './reducers/leagues';
import { fetchLeagueInfoReducer } from './reducers/league-info';
import { fetchLeagueTableReducer } from './reducers/league-table';
import { fetchLeagueFixturesReducer } from './reducers/league-fixtures';
import { fetchLeagueTeamsReducer } from './reducers/league-teams';
import { fetchTeamPlayersReducer } from './reducers/team-players';
import { fetchTeamFixturesReducer } from './reducers/team-fixtures';


export const history = createHistory()
const initialState = {}
const middleware = [
  thunk,
  logger
]

const rootReducer = combineReducers({
  fetchLeagues: fetchLeaguesReducer,
  LeagueInfo: fetchLeagueInfoReducer,
  LeagueTable: fetchLeagueTableReducer,
  LeagueFixtures: fetchLeagueFixturesReducer,
  LeagueTeams: fetchLeagueTeamsReducer,
  TeamPlayers: fetchTeamPlayersReducer,
  TeamFixtures: fetchTeamFixturesReducer
});

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleware)))

let persistor = persistStore(store)

export { store, persistor }