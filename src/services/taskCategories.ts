import type { CategoriesListItemType } from "../types/taskCategories"
import httpService from "./httpService"


export const getTaskCategories=async()=>{
    const res=await httpService<CategoriesListItemType[]>("/taskCategories" ,"GET")
if (res.status==200) {
    return res.data
}
return null
}


export const addTaskCategories=()=>{
    return  httpService<CategoriesListItemType>("/taskCategories" ,"POST" ,{
           title: "2 تست",
           description: "توضیحات تست 2",
           icon: "work_icon",
           userId: "1",
           createdAt: "2024-01-01T20:00:00.000Z"
    })

}