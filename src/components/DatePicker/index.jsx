import { useState } from "react";   


function DatePicker({ label, id, dateChange }) {
    const [date, setDate] = useState("");

    return (
        <div className="datePicker">
            <label htmlFor={id}>{label}</label>
            <input 
                type="date" 
                id={id} 
                value={date}
                onChange={(e) => {
                    setDate(e.target.value);
                    dateChange(e.target.value);
                }}
            />
        </div>
    )


}
export default DatePicker