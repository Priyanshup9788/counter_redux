export const loadState = ()=>{
    try{
        let allEmp = localStorage.getItem("employee");
        return allEmp ? JSON.parse(allEmp) : [];
    }catch(err){
        console.log(err);
        return undefined;
    }
}

export const saveState = (state)=>{
    try{
        localStorage.setItem("employee",JSON.stringify(state.employee))
    }catch(err)
    {
        console.log(err);
    }
}