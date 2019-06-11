import React from "react";

export default function Table(props) {
  return (
    <table className="table table-dark table-fixed">
      <thead>
        <tr>
          <th className="col-md-4"> Name</th>
          <th className="col-md-4">Gender</th>
          <th className="col-md-4">Height</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="col-md-4">{props.name}</td>
          <td className="col-md-4">{props.gender}</td>
          <td className="col-md-4">{props.height}</td>
        </tr>
      </tbody>
    </table>
  );
}
