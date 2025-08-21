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