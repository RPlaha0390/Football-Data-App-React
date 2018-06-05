import React, { Component } from 'react';
import { connect } from 'react-redux';

import spinner from '../images/spinner.svg';
import FixtureList from '../components/fixture-list';

class LeagueFixtures extends Component {
  constructor(props){
   super(props);
   this.goBack = this.goBack.bind(this); // i think you are missing this
  }

  goBack(){
    this.props.history.goBack();
  }

  render() {
    if (!Object.keys(this.props.leagueFixtures).length > 0){
      return (
        <div>
          <img src={spinner} alt="spinner" />
        </div>
      )
    } 

    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <h3>Fixtures</h3>

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
          {this.props.leagueFixtures.fixtures.map((fixture, index) => {
            return <FixtureList fixture={fixture} key={index}/>
          })}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  leagueFixtures: state.LeagueFixtures
})

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueFixtures)