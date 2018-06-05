import React, { Component } from 'react';
import { connect } from 'react-redux';
import TeamFixtureList from '../components/team-fixture-list';
import spinner from '../images/spinner.svg';


class TeamFixtures extends Component {
  constructor(props){
   super(props);
   this.goBack = this.goBack.bind(this);
   console.log(props.teamFixtures);
  }

  goBack(){
    this.props.history.goBack();
  }

  render() {

    if (!Object.keys(this.props.teamFixtures).length > 0){
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
            <h3>Team Fixtures</h3>
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
        {this.props.teamFixtures.fixtures.map((teamFixtures, index) => {
        return  <TeamFixtureList key={index} fixtures={teamFixtures} />
        })}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  teamFixtures: state.TeamFixtures
})

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamFixtures)