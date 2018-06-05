import React from 'react'
import { Link } from 'react-router-dom'

const LeagueButtons = (props) => {
  return (
    <div className="">
      <div className="col-xs-12 col-sm-4">
        <Link to="/league-table" className="btn btn-primary btn-block btn--league-info" onClick={props.getLeagueTable}>View Table</Link>
      </div>
      <div className="col-xs-12 col-sm-4">
        <Link to="/league-fixtures" className="btn btn-primary btn-block btn--league-info" onClick={props.getFixtures}>View Fixtures</Link>
      </div>
      <div className="col-xs-12 col-sm-4">
        <Link to="/league-teams" className="btn btn-primary btn-block btn--league-info" onClick={props.getTeams}>View Teams</Link>
      </div>
    </div>
  );
}

export default LeagueButtons;