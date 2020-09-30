import React, { useEffect, useState } from 'react';
import EmployeeTable from "./components/EmployeeTable";
import employees from "./employees.json"
import EmployeeJumbo from './components/EmployeeJumbo';

import './App.css';


function App() {
  const [filter, filterSet] = useState("");
  const [data, dataSet] = useState([]);

  useEffect(() => {
    dataSet(employees)
  }, []);

  console.log('DATA---> ', data)

  const sorted = [...data].sort((a, b) => {
    let jobTitleA = a.jobTitle.toLowerCase();
    let jobTitleB = b.jobTitle.toLowerCase();

        if (jobTitleA < jobTitleB) {
          return -1;
        } else if (jobTitleA > jobTitleB) {
          return 1;
        }
        return 0;
     
    });
  
  //  console.log("Sorted===>", sorted);
    return (
      <span>
        <EmployeeJumbo />
        <div
          style={{
            margin: "auto",
            width: 1000,
          }}>
          <h1 className="title">Employee Directory</h1>
          <input
            placeholder="Search Employee"
            value={filter}
            onChange={(evt) => filterSet(evt.target.value)}
          />
          <table className="mt-2" width="100%">
            <thead className="bg-secondary text-white">
              <tr>
                <th>User ID</th>
                <th onClick= {(event) => dataSet(sorted)}>Job Title</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Region</th>
                <th>Phone Number</th>
                <th>Company Email</th>
              </tr>
            </thead>
            {data
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
      </span>
    );
  }

export default App;