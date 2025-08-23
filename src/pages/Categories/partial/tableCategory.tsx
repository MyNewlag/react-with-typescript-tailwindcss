
import { deleteTaskCategories } from "@/services/taskCategories";
import type { CategoriesListItemType } from "@/types/taskCategories";
import { confirmAlert } from "@/utils/alertUtils";
import { convertMiladiToJalali } from "@/utils/dateUtils";
import { BsTrash3 , BsPencil  } from "react-icons/bs";

type TableCategoryProps = {
        categories:CategoriesListItemType[]
        setCategories : React.Dispatch<React.SetStateAction<CategoriesListItemType[]>>
         setOpen:(isOpen:boolean)=>void
         setSelectedItem:(item:CategoriesListItemType)=>void
}

const TableCategory = ({categories ,setCategories  , setOpen ,setSelectedItem }:TableCategoryProps )=>{


    const handleDelete=async (id:string)=>{
    const confirm =await confirmAlert("حذف دسته بندی","آیا مطمعن هستید؟")
       if (confirm.isConfirmed) {
        deleteTaskCategories(id)
        const newData=categories.filter(c=>c.id!=id)
        setCategories(newData)
       }
    }
    
    return (
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
            categories.map(d=>(
            <tr key={d.id} className="h-9 border-b border-dashed dark:border-b-gray-500 shadow-gray-500 
            [&>td]:px-2 [&>td]:md:px-3 last:border-0">
                <td className="px-2 md:px-3 hidden md:table-cell ">{d.id}</td>
                <td>{d.title}</td>
                <td className="hidden md:table-cell">{d.description}</td>
                <td>{convertMiladiToJalali(d.createdAt,"jYYYY/jMM/jD HH:mm")}</td>
                <td >
                    <span className="flex justify-center items-center h-full w-full gap-3">
                    <BsTrash3 className="text-red-400 cursor-pointer" 
                    onClick={()=>handleDelete(d.id)}/> 
                    <BsPencil className="text-blue-400 cursor-pointer"
                     onClick={()=>{setOpen(true)
                        setSelectedItem(d)}}
                       />
                    </span>
                </td>
            </tr>

            ))
            }
            </tbody>
        </table>
    );
}

export default TableCategory;
