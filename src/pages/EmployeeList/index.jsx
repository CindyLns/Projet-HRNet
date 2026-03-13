import { useNavigate } from "react-router";
import DataTables from "../../components/DataTables";

function EmployeeList() {
    const navigate = useNavigate();

    return (
        <div id="employee-div" className="container">
            <h1 className="h2">Current Employees</h1>
            <DataTables />
            <a className="link" href="#" onClick={(e) => {
                e.preventDefault();
                navigate('/');
            }}>
            <i className="fa-solid fa-arrow-left"></i>
            Home
            </a>
      </div>
    )
}

export default EmployeeList