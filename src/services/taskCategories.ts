import type { AddCategoriesType, CategoriesListItemType } from "../types/taskCategories"
import httpService from "./httpService"


export const getTaskCategories=async()=>{
    const res=await httpService<CategoriesListItemType[]>("/taskCategories" ,"GET")
if (res.status==200) {
    return res.data
}
return null
}


export const getTaskCategoriesWithTaskService=()=>{
    return  httpService("/taskCategories?_embed=tasks" ,"GET" )

}


export const addTaskCategories=(data : AddCategoriesType)=>{
    return  httpService("/taskCategories" ,"POST" , data)

}


export const deleteTaskCategories=(id:string)=>{
    return  httpService(`/taskCategories/${id}` ,"DELETE")

}


export const editTaskCategories=(id:string , data : AddCategoriesType)=>{
    return  httpService(`/taskCategories/${id}` ,"PUT" , data)
}
