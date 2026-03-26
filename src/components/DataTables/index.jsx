import { useState, useEffect } from "react";   
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";    


function DataTables() {
   const [entries, setEntries] = useState("10");
   const employees = useSelector((state) => state.employee);
   const [searchTerm, setSearchTerm] = useState('');
   const [currentPage, setCurrentPage] = useState(1);
   const [sorting, setSorting] = useState({
        key: null,
        direction: "asc",
    });

   useEffect(() => {
       setCurrentPage(1);
   }, [entries, searchTerm]);

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

    const sortedEmployees = [...filteredEmployees].sort((a, b) => {
        if (!sorting.key) return 0;

        const aValue = a[sorting.key]?.toString().toLowerCase() || "";
        const bValue = b[sorting.key]?.toString().toLowerCase() || "";

        if (aValue < bValue) return sorting.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sorting.direction === "asc" ? 1 : -1;

        return 0;
    });

    const handleSort = (key) => {
    let direction = "asc";

    if (sorting.key === key && sorting.direction === "asc") {
        direction = "desc";
    }

    setSorting({ key, direction });
    };

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }   
    };

    const nextPage = () => {
        if (currentPage < Math.ceil(filteredEmployees.length / parseInt(entries))) {
            setCurrentPage(currentPage + 1);
        }
    };

    const entriesPerPage = parseInt(entries);
    const totalPages = Math.ceil(sortedEmployees.length / entriesPerPage);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    const currentEmployees = sortedEmployees.slice(startIndex, endIndex);
    const numberPages = Array.from({ length: totalPages }, (_, i) => i);

    const goToPage = (page) => {
        setCurrentPage(page);
    };



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
                        <th className="dataTables_heading" onClick={() => handleSort("firstName")}>
                            First Name
                            <span className="icon_caret">
                                <i className={`fa-solid fa-caret-up ${sorting.key === "firstName" && sorting.direction === "asc" ? "color_active" : ""}`}></i>
                                <i className={`fa-solid fa-caret-down ${sorting.key === "firstName" && sorting.direction === "desc" ? "color_active" : ""}`}></i>
                            </span>

                        </th>
                        <th className="dataTables_heading" onClick={() => handleSort("lastName")}>
                            Last Name
                            <span className="icon_caret">
                                <i className={`fa-solid fa-caret-up ${sorting.key === "lastName" && sorting.direction === "asc" ? "color_active" : ""}`}></i>
                                <i className={`fa-solid fa-caret-down ${sorting.key === "lastName" && sorting.direction === "desc" ? "color_active" : ""}`}></i>
                            </span>
                        </th>
                        <th className="dataTables_heading" onClick={() => handleSort("startDate")}>
                            Start Date
                            <span className="icon_caret">
                                <i className={`fa-solid fa-caret-up ${sorting.key === "startDate" && sorting.direction === "asc" ? "color_active" : ""}`}></i>
                                <i className={`fa-solid fa-caret-down ${sorting.key === "startDate" && sorting.direction === "desc" ? "color_active" : ""}`}></i>
                            </span>
                        </th>
                        <th className="dataTables_heading" onClick={() => handleSort("department")}>
                            Department
                            <span className="icon_caret">
                                <i className={`fa-solid fa-caret-up ${sorting.key === "department" && sorting.direction === "asc" ? "color_active" : ""}`}></i>
                                <i className={`fa-solid fa-caret-down ${sorting.key === "department" && sorting.direction === "desc" ? "color_active" : ""}`}></i>
                            </span>
                        </th>
                        <th className="dataTables_heading" onClick={() => handleSort("dateOfBirth")}>
                            Date of Birth
                            <span className="icon_caret">
                                <i className={`fa-solid fa-caret-up ${sorting.key === "dateOfBirth" && sorting.direction === "asc" ? "color_active" : ""}`}></i>
                                <i className={`fa-solid fa-caret-down ${sorting.key === "dateOfBirth" && sorting.direction === "desc" ? "color_active" : ""}`}></i>
                            </span>
                        </th>
                        <th className="dataTables_heading" onClick={() => handleSort("street")}>
                            Street
                            <span className="icon_caret">
                                <i className={`fa-solid fa-caret-up ${sorting.key === "street" && sorting.direction === "asc" ? "color_active" : ""}`}></i>
                                <i className={`fa-solid fa-caret-down ${sorting.key === "street" && sorting.direction === "desc" ? "color_active" : ""}`}></i>
                            </span>
                        </th>
                        <th className="dataTables_heading" onClick={() => handleSort("city")}>
                            City
                            <span className="icon_caret">
                                <i className={`fa-solid fa-caret-up ${sorting.key === "city" && sorting.direction === "asc" ? "color_active" : ""}`}></i>
                                <i className={`fa-solid fa-caret-down ${sorting.key === "city" && sorting.direction === "desc" ? "color_active" : ""}`}></i>
                            </span>
                        </th>
                        <th className="dataTables_heading" onClick={() => handleSort("country")}>
                            State
                            <span className="icon_caret">
                                <i className={`fa-solid fa-caret-up ${sorting.key === "country" && sorting.direction === "asc" ? "color_active" : ""}`}></i>
                                <i className={`fa-solid fa-caret-down ${sorting.key === "country" && sorting.direction === "desc" ? "color_active" : ""}`}></i>
                            </span>
                        </th>
                        <th className="dataTables_heading" onClick={() => handleSort("zipCode")}>
                            Zip Code
                            <span className="icon_caret">
                                <i className={`fa-solid fa-caret-up ${sorting.key === "zipCode" && sorting.direction === "asc" ? "color_active" : ""}`}></i>
                                <i className={`fa-solid fa-caret-down ${sorting.key === "zipCode" && sorting.direction === "desc" ? "color_active" : ""}`}></i>
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentEmployees.map((employee, index) => (
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
                <div className="dataTables_info" id="employee-table_info" role="status" aria-live="polite">Showing {startIndex + 1} to {Math.min(endIndex, sortedEmployees.length)} of {sortedEmployees.length} entries</div>
                <div className="dataTables_paginate paging_simple_numbers" id="employee-table_paginate">
                    <Link className={`paginate_button previous ${currentPage === 1 ? 'disabled' : ''}`} aria-controls="employee-table" data-dt-idx="0" tabIndex="-1" id="employee-table_previous" onClick={previousPage}>Previous</Link>
                    <span className="number_pages">
                        {numberPages.map((index) => (
                        <button key={index} className={`paginate_button ${index === currentPage - 1 ? 'current' : ''}`} aria-controls="employee-table" onClick={() => goToPage(index + 1)}>{index + 1}</button>
                        ))}
                    </span>
                    <Link className={`paginate_button next ${currentPage === totalPages ? 'disabled' : ''}`} aria-controls="employee-table" data-dt-idx="1" tabIndex="-1" id="employee-table_next" onClick={nextPage}>Next</Link>
                </div>
            </div>
           
         
        </div>
    )


}
export default DataTables