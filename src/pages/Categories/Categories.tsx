import { useEffect, useState } from "react";
import { getTaskCategories } from "../../services/taskCategories";
import type { CategoriesListItemType } from "../../types/taskCategories";
import {  } from "react-icons/ri";
import { errorToast } from "../../utils/toastUtils";
import AddModalDialog from "./partial/AddModalDialog";
import TableCategory from "./partial/tableCategory";

const Categories = () => {

const [categories , setCategories]=useState<CategoriesListItemType[]>([])
 const [open ,setOpen]=useState(false)
    const [selectedItem , setSelectedItem]=useState<CategoriesListItemType>()
    

const handleGetTaskCategories=async()=>{
    const res=await getTaskCategories()
    if (res) {
         setCategories(res)
        }else{
            errorToast()
        }
    }

    const handleAddCategory=(data:CategoriesListItemType)=>{
        if (selectedItem) {
            setCategories(oldArr=>{
                const newArr=[...oldArr]
                const index=newArr.findIndex(o=>o.id==selectedItem.id)
                newArr[index]=data
                return newArr
            })
        }else{
            setCategories([...categories , data])
        }
    }
    

    useEffect(()=>{
        handleGetTaskCategories()
    },[])

    return (
    <div >
        <div className="flex justify-between items-center px-2 ">
            <h1 className="py-5 text-lg font-bold"> لیست دسته بندی وظایف</h1>
            <AddModalDialog setCategories={handleAddCategory} open={open} setOpen={setOpen}
            selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
        </div>

            <TableCategory categories={categories} setCategories={setCategories} setOpen={setOpen}
             setSelectedItem={setSelectedItem} />
    </div>
    );
}

export default Categories;
