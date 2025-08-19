
export const getTaskCategories=async()=>{
    const res=await fetch("http://localhost:3001/taskCategories")
    const data=await res.json()
    return data
    
}