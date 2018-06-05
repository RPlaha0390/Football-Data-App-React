import React, { Component } from 'react';
import { connect } from 'react-redux';

import TeamsList from '../components/teams-list';
import { fetchTeamPlayers } from '../actions/team-players';
import { fetchTeamFixtures } from '../actions/team-fixtures';
import spinner from '../images/spinner.svg';

class LeagueTeams extends Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack(){
    this.props.history.goBack();
  }

  render() {
    if (!Object.keys(this.props.leagueTeams).length > 0) {
      return (
        <div>
          <img src={spinner} alt="spinner" />
        </div>
      )
    } 
    
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h3>Teams</h3>
          </div>
          <div className="col-xs-12 col-sm-6">
            <button className="btn btn-primary pull-right btn--back" onClick={this.goBack}>Go Back</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
          <hr />
          </div>
        </div>
        <div className="row">
          {this.props.leagueTeams.teams.map((teams, index) => {
            return (
              <TeamsList 
                teams={teams} 
                key={index} 
                getTeamPlayers={() => this.props.fetchTeamPlayers(this.props.leagueTeams.teams[index]._links.players.href)}
                getTeamFixtures={() => this.props.fetchTeamFixtures(this.props.leagueTeams.teams[index]._links.fixtures.href)}
              />
            ) 
          })}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  leagueTeams: state.LeagueTeams
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeamPlayers: (url) => {
      dispatch(fetchTeamPlayers(url))
    },
    fetchTeamFixtures: (url) => {
      dispatch(fetchTeamFixtures(url))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueTeams)