import { useState } from "react";   


function DataTables() {
   const [entries, setEntries] = useState("")

    return (
        <div>
            <div className="dataTables_length" id="employee-table_length">
                <label htmlFor="employee-table_length">Show 
                    <select name="employee-table_length" aria-controls="employee-table" value={entries} onChange={(e) => setEntries(e.target.value)}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> entries
                </label>
            </div>
            <div id="employee-table_filter" className="dataTables_filter"><label htmlFor="employee-table_filter">Search:<input type="search" className="" placeholder="" aria-controls="employee-table"/></label></div>
            <table>
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
            </table>
            <div className="dataTables_info" id="employee-table_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
            <div className="dataTables_paginate paging_simple_numbers" id="employee-table_paginate"><a className="paginate_button previous disabled" aria-controls="employee-table" data-dt-idx="0" tabindex="-1" id="employee-table_previous">Previous</a><span></span><a className="paginate_button next disabled" aria-controls="employee-table" data-dt-idx="1" tabindex="-1" id="employee-table_next">Next</a></div>
         
        </div>
    )


}
export default DataTables