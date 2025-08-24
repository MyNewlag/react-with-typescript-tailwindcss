import AppButton from "@/components/sharedComponents/AppButton";
import { getTaskWithDate } from "@/services/tasks";
import type { TaskListType } from "@/types/task";
import { useEffect, useState } from "react";

const Dashbords = () => {
    const [todayTasks , setTodayTasks]=useState<TaskListType[]>([])

    const handleGetTodayTask=async()=>{
      const today = new Date().toISOString().split("T")[0]
      console.log(today);
      const res= await getTaskWithDate(today)
      console.log(res);
      if (res.status==200) {
        setTodayTasks(res.data)
      }
    }

    useEffect(()=>{
        handleGetTodayTask()
    },[])
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full max-w-96 h-full flex flex-col gap-10">
                {todayTasks.length ?(
                    <ul className="space-y-3 p-4 bg-white data:bg-gray-800 shadow-lg rounded-lg">
                        {todayTasks.map(task=>(
                           <li key={task.id} className="w-full rounded-sm border-gray-400 border py-2 px-3
                           hover:shadow-md cursor-pointer transition-all">
                            {task.title}
                           </li> 
                        ))
                        }
                    </ul>
                ):(
                    <h1 className="text-center w-full">امروز تسکی نداری...</h1>
                )}
                <AppButton title="افزودن تسک جدید"/>
            </div>
        </div>
    );
}

export default Dashbords;
