import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLeagueTable } from '../actions/league-table';
import { fetchLeagueFixtures } from '../actions/league-fixtures';
import { fetchLeagueTeams } from '../actions/league-teams';

import LeagueButtons from '../components/league-buttons'


class LeagueInfo extends Component {
  constructor(props){
   super(props);
   this.goBack = this.goBack.bind(this); // i think you are missing this
  }

  goBack(){
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <h3>{this.props.leagueInfo.caption}</h3>
          </div>
          <div className="col-xs-12 col-sm-4">
            <button className="btn btn-primary pull-right btn--back" onClick={this.goBack}>Go Back</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
          <hr />
          </div>
        </div>
        <div className="row">
          <LeagueButtons
            getLeagueTable={() => this.props.fetchLeagueTable(this.props.leagueInfo._links.leagueTable.href)}
            getFixtures={() => this.props.fetchLeagueFixtures(this.props.leagueInfo._links.fixtures.href)}
            getTeams={() => this.props.fetchLeagueTeams(this.props.leagueInfo._links.teams.href)} 
          />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  leagueInfo: state.LeagueInfo
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLeagueTable: (url) => {
      dispatch(fetchLeagueTable(url))
    },
    fetchLeagueFixtures: (url) => {
      dispatch(fetchLeagueFixtures(url))
    },
    fetchLeagueTeams: (url) => {
      dispatch(fetchLeagueTeams(url))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueInfo)