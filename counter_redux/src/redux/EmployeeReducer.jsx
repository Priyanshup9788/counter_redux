import { ADD_EMP, VIEW_EMP } from "./action";

const initialState = {
    employee : [
        {
            name:"Priyanshu",
            email:"priyanshu3357@gmail.com"
        },
        {
            name:"Vishv",
            email:"vishv0444@gmail.com"
        }
    ]
}

const EmplyeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMP:
            {
                return { ...state.employee, employee: [...state.employee , action.payload] };
            }
        case VIEW_EMP:
            {
                return state;
            }
        default:
            {
                return state;
            }
    }
}

export default EmplyeeReducer;