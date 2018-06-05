import React from 'react';
import moment from 'moment';

const TeamFixtureList = (props) => {
  console.log(props);
  return (
    <div className="col-sm-6 col-md-4">
        <div className="panel-group" id="accordion">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h4 className="panel-title">Matchday {props.fixtures.matchday}</h4>
          </div>
          <div className="panel-body">
            <p className="pull-right"><span>{moment(props.fixtures.date).format('DD/MM/YYYY')}</span></p>
            <div className="clearfix"></div>
            <p className="panel__fixture">{props.fixtures.homeTeamName} <span>{props.fixtures.result.goalsHomeTeam} - </span><span>{props.fixtures.result.goalsAwayTeam}</span> {props.fixtures.awayTeamName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamFixtureList;