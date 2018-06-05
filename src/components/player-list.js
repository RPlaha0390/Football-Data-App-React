import React from 'react';
import moment from 'moment';

const PlayerList = (props) => {
  return (
    <div className="col-xs-12 col-sm-4">
      <div className="panel panel-primary player-panel">
        <div className="panel-heading">{props.player.name}</div>
        <div className="panel-body">
          <p>Position: <span>{props.player.position}</span></p>
          <p>Nationality: <span>{props.player.nationality}</span></p>
          <p>Age: <span>{moment().diff(props.player.dateOfBirth, 'years', false)}</span></p>
          <p>Contract Expiry: <span>{moment(props.player.contractUntil).format('MMMM Do YYYY')}</span></p>
        </div>
      </div>
    </div>
  );
}

export default PlayerList;