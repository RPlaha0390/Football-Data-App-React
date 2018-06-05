import React from 'react';
import { Link } from 'react-router-dom';

const TeamsList = (props) => {
  return (
    <div className="col-sm-6 col-md-4">
        <div className="well">
          <div className="col-sm-3">
            <img className="img-responsive" src={props.teams.crestUrl} alt={props.teams.shortName}/>
          </div>
          <div className="col-sm-9">
            <p>{props.teams.name}</p>
            <div className="clear"></div>
            <div className="button-container">
              <Link to="/team-players" className="btn btn-primary btn-sm" onClick={props.getTeamPlayers}>Players</Link>
              <Link to="/team-fixtures" className="btn btn-primary btn-sm" onClick={props.getTeamFixtures}>Fixtures</Link>
            </div>
          </div>
        </div>
    </div>
  );
}

export default TeamsList;