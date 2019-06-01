import React from "react";

export default function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Height</th>
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
