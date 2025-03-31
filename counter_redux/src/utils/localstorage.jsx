export const loadState = ()=>{
    try{
        const allEmp = localStorage.getItem('employee');
        if (allEmp === null) return undefined; 
        return JSON.parse(allEmp);

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