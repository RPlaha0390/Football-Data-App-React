import React from 'react'


const FixtureList = (props) => {
  
  return (
    <div className="col-sm-6 col-md-6 col-lg-4">
      <div className="panel-group" id="accordion">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href={'#collapse' + props.fixture.matchday} onClick={(e) => {
                e.target.classList.add('open');
              }}>Match Day {props.fixture.matchday}
              </a>
            </h4>
          </div>
          <div id={'collapse' + props.fixture.matchday} className="panel-collapse collapse">
            <div className="panel-body">
              <div className="col-xs-4 col-sm-4 col-md-4">
                {props.fixture.homeTeam.map((homeTeam, index) => {
                  return (
                    <div className="fixture">
                      <li key={index}>{homeTeam}</li>
                    </div>
                  )
                })}
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2">
                {props.fixture.results.map((result, index) => {
                  return (
                    <li className="fixture fixture-result" key={index}>{result.goalsHomeTeam}</li>
                  )
                })}
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2">
                {props.fixture.results.map((result, index) => {
                  return (
                    <li className="fixture fixture-result" key={index}>{result.goalsAwayTeam}</li>
                  )
                })} 
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4">
                {props.fixture.awayTeam.map((awayTeam, index) => {
                  return (
                    <div className="fixture">
                      <li key={index}> {awayTeam}</li>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixtureList;