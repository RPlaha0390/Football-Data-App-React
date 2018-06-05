import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Nav from './components/nav';
import Leagues from './containers/leagues';
import LeagueInfo from './containers/league-info';
import LeagueTable from './containers/league-table';
import LeagueFixtures from './containers/league-fixtures';
import LeagueTeams from './containers/league-teams';
import TeamPlayers from './containers/team-players';
import TeamFixtures from './containers/team-fixtures';

// import store, { history } from './store';
import { persistor, store, history } from './store';

import './styles/main.scss';

render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container">
          <Route path='/' component={Nav} />
          <Route exact path='/' component={Leagues} />
          <Route exact path='/league-information' component={LeagueInfo} />
          <Route exact path='/league-table' component={LeagueTable} />
          <Route exact path='/league-fixtures' component={LeagueFixtures} />
          <Route exact path='/league-teams' component={LeagueTeams} />
          <Route exact path='/team-players' component={TeamPlayers} />
          <Route exact path='/team-fixtures' component={TeamFixtures} />
        </div>
      </ConnectedRouter>
    </Provider>
  </PersistGate>,
  document.querySelector('#root')
)