import { getTaskCategoriesWithTaskService } from '@/services/taskCategories';
import { editTaskServise } from '@/services/tasks';
import type { TaskListType } from '@/types/task';
import type { CategoriesWithTaskListItemType } from '@/types/taskCategories';
import { compareDate, convertMiladiToJalali, getDatesInRange } from '@/utils/dateUtils';
import  { useEffect, useState } from 'react';

const Taskes = () => {

    const [dates , setDates]=useState<{miladi:string , jalali:string}[]>([])
    const [taskCats , setTaskCays]=useState<CategoriesWithTaskListItemType[]>([])

    const generatDatesInRings=()=>{
         const resDatas=getDatesInRange(3,5)
        const restJalaliDates=resDatas.map(date => ({
            miladi:date,
            jalali:convertMiladiToJalali(date,'jD jMMMM jYYYY')
        }))
        setDates(restJalaliDates)
    }

    const handleGetTasks=async()=>{
        const res=await getTaskCategoriesWithTaskService()        
       if (res.status==200) {
        setTaskCays(res.data)
       }
    }

    const handleChangIsDone=async(task:TaskListType)=>{
         const res=await editTaskServise(task.id , {isDone:!task.isDone})
            if (res.status==200) {
            handleGetTasks()
            }
    }

    useEffect(()=>{
        generatDatesInRings()
    },[])

    useEffect(()=>{
        if(dates.length) {
        handleGetTasks()
        }
    },[dates])

    return (
        <div>
            <h1 className='py-5 text-lg font-bold'>لیست تسک ها</h1>
            <table className='table w-full rounded-lg overflow-hidden shadow-lg bg-white
            dark:bg-gray-600 dark:shadow-gray-500'>
                <thead>
                    <tr className='border-b dark:border-b-gray-500 h-12 [&>th]:md:px-3
                    [&>th]:text-center '>
                        <th className='hidden md:table-cell'>تاریخ</th>
                       {
                        taskCats.map(tc=>(
                            <th key={tc.id}>{tc.title}</th>
                        ))
                       }
                    </tr>
                </thead>
                <tbody className='md:text-3 text-gray-800 dark:text-gray-400'>
                    {
                    dates.map((date)=>(
                        <tr key={date.miladi} className='h-9 border-b border-dashed dark:border-b-gray-500
                        shadow-gray-500 [&>td]:px-2 [&>td]:md:px-3 [&>td]:text-center last:border-b-0'>

                        <td className='hidden md:table-cell'>{date.jalali}</td>
                        {
                        taskCats.map(tc=>(
                            <td key={tc.id} className=' text-center space-x-1 '>
                                <div className='flex justify-center gap-2 flex-wrap'>
                                {tc.tasks.map(task=>(
                                    <span key={task.id} className={`rounded-sm text-white cursor-pointer
                                     ${ task.isDone ? "bg-green-400" : "bg-blue-400"}`} 
                                    onClick={()=>handleChangIsDone(task)}>
                                       {compareDate(task.startedAt , date.miladi) && task.title} 
                                    </span>
                                ))}
                             </div>
                            </td>
                        ))
                        }
                    </tr>
                    ))
                }

                </tbody>
            </table>
        </div>
    );
}

export default Taskes;
