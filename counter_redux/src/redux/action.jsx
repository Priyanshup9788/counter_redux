export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_EMP = "ADD_EMP"
export const VIEW_EMP = "VIEW_EMP"

export const increment = ()=>({
    type:INCREMENT,
});

export const decremnet = ()=>({
    type:DECREMENT,
});

export const addEmp = (newEmp)=>({
    type:ADD_EMP,
    payload:newEmp
});

export const viewEmp = ()=>({
    type:VIEW_EMP
})