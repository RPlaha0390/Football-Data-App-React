import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlayerList from '../components/player-list';
import spinner from '../images/spinner.svg';

class TeamPlayers extends Component {
  constructor(props){
   super(props);
   this.goBack = this.goBack.bind(this);
  }

  goBack(){
    this.props.history.goBack();
  }

  render() {

    if (!Object.keys(this.props.teamPlayers).length > 0){
      return (
        <div>
          <h1><img src={spinner} alt="spinner"/></h1>
        </div>
      )
    }
     
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <h3>Players</h3>
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
          {this.props.teamPlayers.players.map((player, index) => {
            return <PlayerList player={player} key={index}/>
          })}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  teamPlayers: state.TeamPlayers
})

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamPlayers)