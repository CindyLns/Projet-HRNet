import statesData from '../../datas/states.json'
import { useState } from "react";   

function SelectMenu({ label,  id }) {
    const [state, setState] = useState ("")

    return (
        <div className="select-menu">
            <label htmlFor={label}>{label}</label>
            <select name={id} id={id} value={state} onChange={(e) => setState(e.target.value)}>
                {statesData.map((option, index) => (
                    <option key={index} value={option.name}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}
export default SelectMenu