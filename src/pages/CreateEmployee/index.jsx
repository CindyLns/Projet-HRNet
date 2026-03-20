import { useNavigate } from "react-router";
import { useState } from "react";
import SelectMenu from "../../components/SelectMenu";
import DatePicker from "../../components/DatePicker";
import { ModalDialog } from "react-modal-cindy";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../store/employeeSlice";

function CreateEmployee() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [department, setDepartment] = useState("Sales")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [startDate, setStartDate] = useState("")
    const [country, setCountry] = useState("Alabama")
    const [isOpenModal, setIsOpenModal] = useState(false)

    const openModal = () => setIsOpenModal(true)
    const closeModal = () => setIsOpenModal(false)

    const submit = (e) => {
        e.preventDefault()
        const newEmployee = {
            firstName,
            lastName,
            dateOfBirth, 
            startDate,   
            street,
            city,
            country,      
            zipCode,
            department
        };
        dispatch(addEmployee(newEmployee));
        openModal()
    };

    return (
        <div>
            <div className="title">
                <div className="heading">
                    <h1>HRnet</h1>
                    <a className="link" href="#" onClick={(e) => {
                        e.preventDefault();
                        navigate('/employee-list');
                    }}>
                        View Current Employees
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="container">
                <h2 className="h2">Create Employee</h2>

                <form id="create-employee" className="form-employee" onSubmit={submit}>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                    <DatePicker label="Date of Birth" id="date-of-birth"  dateChange={(value) => setDateOfBirth(value)}  />

                    <DatePicker label="Start Date" id="start-date"  dateChange={(value) => setStartDate(value)} />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" value={street} onChange={(e) => setStreet(e.target.value)} />

                        <label htmlFor="city">City</label>
                        <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />

                        <SelectMenu label="State" id="country"  optionChange={(value) => setCountry(value)} />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input type="number" id="zip-code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Legal">Legal</option>
                    </select>

                    <button type="submit">Save</button>
                    <ModalDialog
                        isOpen={isOpenModal}
                        title="Employee Created!"
                        message=""
                        closeModal={closeModal}
                    />
                </form>

            </div>
        </div>
    )
}

export default CreateEmployee