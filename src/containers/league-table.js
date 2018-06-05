import React, { Component } from 'react';
import { connect } from 'react-redux';

import spinner from '../images/spinner.svg';
import Table from '../components/league-table';


class LeagueTable extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  
  }

  goBack(){
    this.props.history.goBack();
  }


  render() {
    if (!Object.keys(this.props.leagueTable).length > 0){
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
            <h3>{this.props.leagueTable.leagueCaption}</h3>
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
          <div className="col-xs-12">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <p className="long">Position</p>
                    <p className="short">Pos</p>
                  </th>
                  <th>
                    <p>Team</p>
                  </th>
                  <th>
                    <p className="long">Wins</p>
                    <p className="short">W</p>
                  </th>
                  <th>
                    <p className="long">Draws</p>
                    <p className="short">D</p>
                  </th>
                  <th>
                    <p className="long">Losses</p>
                    <p className="short">L</p>
                  </th>
                  <th>
                    <p className="long">Points</p>
                    <p className="short">Pts</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.props.leagueTable.standing.map((standing, index) => {
                  return <Table standing={standing} key={index}/> 
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div> 
    )
  }
}


const mapStateToProps = (state) => ({
  leagueTable: state.LeagueTable
})

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueTable)