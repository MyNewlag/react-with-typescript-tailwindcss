import type { AddTaskListType } from "@/types/task";
import httpService from "./httpService";

export const editTaskServise=(
    taskId : string ,
    values :Partial<AddTaskListType>
    )=>{
        return httpService(`/tasks/${taskId}` , 'PATCH' ,values)
    }

export const addTaskServise=( values :AddTaskListType )=>
    { 
        return httpService(`/tasks` , 'POST' ,values)
    }

export const deleteTaskServise=(taskId:string)=>
    { 
        return httpService(`/tasks/${taskId}` , 'DELETE')
    }

export const getTaskWithDate=(date:string)=>
    { 
        return httpService(`/tasks?startedAt_like${date}` , 'GET')
    }