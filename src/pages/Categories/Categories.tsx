import { useEffect, useState } from "react";
import { addTaskCategories, getTaskCategories } from "../../services/taskCategories";
import type { CategoriesListItemType } from "../../types/taskCategories";
import { convertMiladiToJalali } from "../../utils/dateUtils";
import {  } from "react-icons/ri";
import { BsTrash3 , BsPencil  } from "react-icons/bs";
import { errorToast, successToast } from "../../utils/toastUtils";
import AddModalDialog from "./partial/AddModalDialog";

const Categories = () => {



const [data , setData]=useState<CategoriesListItemType[]>([])


const handleGetTashCategories=async()=>{
    const res=await getTaskCategories()
    if (res) {
         setData(res)
         successToast("عملیات با موفقیت انجام شد")
         console.log(res);
        }else{
            errorToast()
        }
    }

    const handleAddCategory=async()=>{
        const res=await addTaskCategories()
        if (res.status==201) {
            setData([...data , res.data])
              successToast("دسته بندی با موفقیت اضافه شد")
        }
    }
    
    useEffect(()=>{
        handleGetTashCategories()
    },[])

    return (
    <div >
        <div className="flex justify-between items-center px-2 ">
            <h1 className="py-5 text-lg font-bold"> لیست دسته بندی وظایف</h1>
            <AddModalDialog/>

        </div>
        <table className="table w-full [&>*]:text-center rounded-lg overflow-hidden shadow-sm
         bg-white dark:bg-gray-600 dark:shadow-gray-500">
            <thead>
                <tr className="border-b dark:border-b-gray-500 h-12 [&>th]:px-2 [&>th]:md:px-3">
                    <th className="hidden md:table-cell">#</th>
                    <th >عنوان</th>
                    <th className="hidden md:table-cell">توضیحات</th>
                    <th >تاریخ اجرا</th>
                    <th >عملیات</th>
                </tr>
            </thead>

            <tbody className="md:mx-3 text-gray-600 dark:text-gray-400 [&>td]:px-2 [&>td]:md:px-3">
                {
                    data.map(d=>(
                    <tr key={d.id} className="h-9 border-b border-dashed dark:border-b-gray-500 shadow-gray-500 
                    [&>td]:px-2 [&>td]:md:px-3 last:border-0">
                        <td className="px-2 md:px-3 hidden md:table-cell ">{d.id}</td>
                        <td>{d.title}</td>
                        <td className="hidden md:table-cell">{d.description}</td>
                        <td>{convertMiladiToJalali(d.createdAt,"jYYYY/jMM/jD HH:mm")}</td>
                        <td >
                            <span className="flex justify-center items-center h-full w-full gap-3">
                            <BsTrash3 className="text-red-400 cursor-pointer"/> 
                            <BsPencil className="text-blue-400 cursor-pointer"/>
                            </span>
                       </td>
                    </tr>

                    ))
                }
            </tbody>
        </table>


    </div>
    );
}

export default Categories;
