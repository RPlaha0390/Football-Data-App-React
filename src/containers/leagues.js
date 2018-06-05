import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLeagues } from '../actions/leagues';
import { fetchLeagueInfo } from '../actions/league-info';
import LeagueList from '../components/league-list';
import spinner from '../images/spinner.svg';

export class Leagues extends Component {
	
	render() {
		if (!this.props.leagues.length) {
			return (
				<div>
					<img src={spinner} alt="spinner" />
				</div>	
			)
		}

		return (
			<div>
				<div className="row">
					<div className="col-xs-12">
					<h3>Select a League</h3>
			  	</div>
				</div>
				<div className="row">
          <div className="col-xs-12">
          <hr />
          </div>
        </div>
				<div className="row">
				  	<ul className="list-group list">
						{this.props.leagues.map((league, index) => {
						  return <LeagueList league={league} key={index} id={() => this.props.fetchLeagueInfo(league.id)} /> 
						})}
				  	</ul>
				</div>
		 	</div>
		)
	}

	componentDidMount() {
		this.props.fetchLeagues();
	}
}


const mapStateToProps = (state) => ({
	leagues: state.fetchLeagues
})

const mapDispatchToProps = (dispatch) => {
	return {
		fetchLeagues: () => {
		  dispatch(fetchLeagues())
		},
		fetchLeagueInfo: (id) => {
		  dispatch(fetchLeagueInfo(id))
		}
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Leagues)