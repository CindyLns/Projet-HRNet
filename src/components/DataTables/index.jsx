import { useState } from "react";   
import { useSelector } from "react-redux";


function DataTables() {
   const [entries, setEntries] = useState("10");
   const employees = useSelector((state) => state.employee);
   const [searchTerm, setSearchTerm] = useState('')

   const filteredEmployees = employees.filter((employee) => {
    const term = searchTerm.toLowerCase();
    return (
      employee.firstName?.toLowerCase().includes(term) ||
      employee.lastName?.toLowerCase().includes(term) ||
      employee.department?.toLowerCase().includes(term) ||
      employee.city?.toLowerCase().includes(term) ||
      employee.country?.toLowerCase().includes(term) ||
      employee.street?.toLowerCase().includes(term) ||
      employee.zipCode?.toLowerCase().includes(term) ||
      employee.startDate?.toLowerCase().includes(term) ||
      employee.dateOfBirth?.toLowerCase().includes(term)
    );
  });

    return (
        <div className="dataTables_wrapper">
            <div className="dataTables_top">
                <div className="dataTables_length">
                    <label htmlFor="employee-table_length">Show 
                        <select name="employee-table_length" aria-controls="employee-table" value={entries} onChange={(e) => setEntries(e.target.value)}>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select> entries
                    </label>
                </div>
                <div className="dataTables_filter">
                    <label htmlFor="employee-table_filter">
                        Search:
                        <input type="search" name="search" placeholder="" aria-controls="employee-table"  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    </label>
                </div>
            </div>
            <table className="employee-table">
                <thead>
                    <tr role="row">
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Start Date</th>
                        <th>Department</th>
                        <th>Date of Birth</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.map((employee, index) => (
                        <tr key={index} role="row" className="odd">
                            <td className="sorting">{employee.firstName}</td>
                            <td className="sorting">{employee.lastName}</td>
                            <td className="sorting">{employee.startDate}</td>
                            <td className="sorting">{employee.department}</td>
                            <td className="sorting">{employee.dateOfBirth}</td>
                            <td className="sorting">{employee.street}</td>
                            <td className="sorting">{employee.city}</td>
                            <td className="sorting">{employee.country}</td>
                            <td className="sorting">{employee.zipCode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="dataTables_bottom">
                <div className="dataTables_info" id="employee-table_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                <div className="dataTables_paginate paging_simple_numbers" id="employee-table_paginate"><a className="paginate_button previous disabled" aria-controls="employee-table" data-dt-idx="0" tabindex="-1" id="employee-table_previous">Previous</a><span></span><a className="paginate_button next disabled" aria-controls="employee-table" data-dt-idx="1" tabindex="-1" id="employee-table_next">Next</a></div>
            </div>
           
         
        </div>
    )


}
export default DataTables