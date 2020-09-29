import React from "react";

function EmployeeTable(props) {
  return (
      <tbody>
      <tr>
          <td>{props.userId}</td>
          <td>{props.jobTitle}</td>
          <td>{props.firstName}</td>
          <td>{props.lastName}</td>
          <td>{props.region}</td>
          <td>{props.phoneNumber}</td>
          <td>{props.emailAddress}</td>
        </tr>
      </tbody>
    );
}

export default EmployeeTable;