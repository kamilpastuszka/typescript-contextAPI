import React from "react";

export default function Table(props) {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Height</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.gender}</td>
          <td>{props.height}</td>
        </tr>
      </tbody>
    </table>
  );
}
