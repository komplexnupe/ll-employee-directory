import React from 'react';
import EmployeeTable from "./components/EmployeeTable";
import employees from "./employees.json"

import './App.css';


function App() {
  const [filter, filterSet] = React.useState("");
  return (
    <div
      style={{
        margin: "auto",
        width: 1000,
        paddingTop: "1rem",
      }}>
      <h1 className="title">Employee Directory</h1>
      <input 
      placeholder="Search Employee"
        value={filter}
        onChange={(evt) => filterSet(evt.target.value)}
      />
      <table width="100%">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Job Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Region</th>
            <th>Phone Number</th>
            <th>Company Email</th>
          </tr>
        </thead>
        {employees
        .filter((employee) =>
        employee.firstName.toLowerCase().includes(filter.toLowerCase()))
        .map(employee => {
        return (
          <EmployeeTable 
          key={[employee.userId, employee.phoneNumber].join(':')}
            userId={employee.userId}
            jobTitle={employee.jobTitle}
            firstName={employee.firstName}
            lastName={employee.lastName}
            region={employee.region}
            phoneNumber={employee.phoneNumber}
            emailAddress={employee.emailAddress}
          />
        )
      })}
      </table>
    </div>
  );
}

export default App;