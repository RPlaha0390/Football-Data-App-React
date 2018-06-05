import React from 'react'
import { Link } from 'react-router-dom'


const LeagueList = (props) => {

	return (
		<div className="col-xs-12 col-sm-6 col-md-4">
			<li className="list-group-item list--league">
				<Link to="/league-information"
					className="btn btn-primary btn-block btn--league-list"
					onClick={props.id}>
					{props.league.caption} 
				</Link>

			</li>
		</div>  
	);
}

export default LeagueList;