import { useNavigate } from "react-router";
import { useState } from "react";
import SelectMenu from "../../components/SelectMenu";
import DatePicker from "../../components/DatePicker";
import { ModalDialog } from "react-modal-cindy";

function CreateEmployee() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [department, setDepartment] = useState("")
    const [isOpenModal, setIsOpenModal] = useState(false)

    const openModal = () => setIsOpenModal(true)
    const closeModal = () => setIsOpenModal(false)

    const submit = (e) => {
        e.preventDefault()
        openModal()
    }

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

                    <DatePicker label="Date of Birth" id="date-of-birth" />

                    <DatePicker label="Start Date" id="start-date" />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" value={street} onChange={(e) => setStreet(e.target.value)} />

                        <label htmlFor="city">City</label>
                        <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />

                        <SelectMenu label="State" id="state" />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input type="number" id="zip-code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </form>

                <button type="submit" onClick={openModal}>Save</button>
                <ModalDialog
                    isOpen={isOpenModal}
                    title="Employee Created!"
                    message=""
                    closeModal={closeModal}
                />
            </div>
        </div>
    )
}

export default CreateEmployee