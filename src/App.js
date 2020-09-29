import React from 'react';
import EmployeeTable from "./components/EmployeeTable";
import employees from "./employees.json"
import EmployeeJumbo from './components/EmployeeJumbo';

import './App.css';


function App() {
  const [filter, filterSet] = React.useState("");
  // const [data, dataList] = useState(employees);

  // const sortByJob = () => {
  //   // const title = event.target.value
  //   const sorted = [...data].sort((a, b) => {
  //     if (a.jobTitle < b.jobTitle) {
  //       return -1;
  //     }
  //     if (a.jobTitle > b.jobTitle) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   dataList(sorted);
  // };

  return (
    <span>
    <EmployeeJumbo/>
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
    </span>
  );
}

export default App;