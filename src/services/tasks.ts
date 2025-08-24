import type { AddTaskListType } from "@/types/task";
import httpService from "./httpService";

export const editTaskServise=(
    taskId : string ,
    values :Partial<AddTaskListType>
    )=>{
        return httpService(`/tasks/${taskId}` , 'PATCH' ,values)
}