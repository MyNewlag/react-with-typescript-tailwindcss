import { useEffect, useState } from "react";
import { getTaskCategories } from "../../services/taskCategories";
import type { CategoriesListItemType } from "../../types/taskCategories";
import {  } from "react-icons/ri";
import { errorToast, successToast } from "../../utils/toastUtils";
import AddModalDialog from "./partial/AddModalDialog";
import TableCategory from "./partial/tableCategory";

const Categories = () => {

const [categories , setCategories]=useState<CategoriesListItemType[]>([])


const handleGetTashCategories=async()=>{
    const res=await getTaskCategories()
    if (res) {
         setCategories(res)
         successToast("عملیات با موفقیت انجام شد")
        }else{
            errorToast()
        }
    }

    const handleGetCategory=(data:CategoriesListItemType)=>{
        setCategories([...categories , data])
    }
    
    useEffect(()=>{
        handleGetTashCategories()
    },[])

    return (
    <div >
        <div className="flex justify-between items-center px-2 ">
            <h1 className="py-5 text-lg font-bold"> لیست دسته بندی وظایف</h1>
            <AddModalDialog setCategories={handleGetCategory}/>
        </div>

        <TableCategory categories={categories}/>
    </div>
    );
}

export default Categories;
