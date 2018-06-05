import React from 'react'

const Table = (props) => {
  console.log(props);
  return (
    <tr>
    	<td className="position">{props.standing.position}</td>
    	<td className="team">
        <img className="team__badge img-responsive" src={props.standing.crestURI} alt="Team Logo" />
        <span className="team__name">{props.standing.teamName}</span>
      </td>
    	<td>{props.standing.wins}</td>
    	<td>{props.standing.losses}</td>
    	<td>{props.standing.draws}</td>
        <td>{props.standing.points}</td>
    </tr>
  );
}

export default Table;