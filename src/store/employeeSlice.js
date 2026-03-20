import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
    try {
        const employeesState = localStorage.getItem('employees');
        return employeesState ? JSON.parse(employeesState) : [];
    } catch (e) {
        console.error('Erreur lors du chargement depuis localStorage', e);
        return [];
    }
};

export const employeeSlice = createSlice({
    name: "employee",
    initialState: loadFromLocalStorage(),
    reducers: {
        addEmployee: (state, action) => {
            // Ajouter le nouvel employé à la liste
            state.push(action.payload);
            localStorage.setItem('employees', JSON.stringify(state));
        }
    }
});
export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;