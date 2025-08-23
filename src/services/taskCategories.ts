import type { AddCategoriesType, CategoriesListItemType } from "../types/taskCategories"
import httpService from "./httpService"


export const getTaskCategories=async()=>{
    const res=await httpService<CategoriesListItemType[]>("/taskCategories" ,"GET")
if (res.status==200) {
    return res.data
}
return null
}


export const addTaskCategories=(data : AddCategoriesType)=>{
    return  httpService<CategoriesListItemType>("/taskCategories" ,"POST" , data)

}


export const deleteTaskCategories=(id:string)=>{
    return  httpService<CategoriesListItemType>(`/taskCategories/${id}` ,"DELETE")

}


export const editTaskCategories=(id:string , data : AddCategoriesType)=>{
    return  httpService<CategoriesListItemType>(`/taskCategories/${id}` ,"PUT" , data)
}
