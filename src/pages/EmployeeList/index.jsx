import { useNavigate } from "react-router";

function EmployeeList() {
    const navigate = useNavigate();

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                navigate('/');
            }}>Home</a>


      </div>
    )
}

export default EmployeeList