import { useNavigate } from "react-router";

function EmployeeList() {
    const navigate = useNavigate();

    return (
        <div id="employee-div" className="container">
            <h1 className="h2">Current Employees</h1>
            <table id="employee-table" className="display"></table>
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