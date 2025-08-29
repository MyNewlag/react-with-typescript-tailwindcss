

import AppButton from "@/components/sharedComponents/AppButton";
import AppInput from "@/components/sharedComponents/AppInput";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
 } from "@/components/ui/dialog";
import type { CategoriesListItemType } from "@/types/taskCategories";
import { useEffect, useState, type FormEvent } from "react";
import AppSelect from './../../../components/sharedComponents/AppSelect';
import { getTaskCategories } from "@/services/taskCategories";
import { errorToast, successToast } from "@/utils/toastUtils";
import { addTaskServise } from "@/services/tasks";

const AddTaskModal = ({open , setOpen ,handleRefresh}:{open:boolean ,setOpen:(isOpen:boolean)=>void ,handleRefresh:()=>void }) => {

    const [title , setTitle]=useState("")
    const [selectCategoryId , setSelectCategoryId]=useState<string>()
    const [isLoading , setIsLoading]=useState(false)
    const [categories , setCategories]=useState<CategoriesListItemType[]>([])

    const handleGetTaskCategories=async()=>{
       const res=await getTaskCategories()
       if (res) {
            setCategories(res)
           }else{
               errorToast()
           }
       }

       useEffect(()=>{
        handleGetTaskCategories()
       },[])
   
       console.log(categories);
       

    const handleAddTask=async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!selectCategoryId || !title.trim()) return errorToast("فیلدها باید پر شوند")
        setIsLoading(true)
    const today = new Date().toISOString()
    const res=await addTaskServise({
        createdAt:today,
        startedAt:today,
        isDone:false,
        taskCategoryId:selectCategoryId,
        title
    })
    setIsLoading(false)
    if(res.status==201){
      successToast()
      handleRefresh()
      setTitle("")  
      setOpen(false)
    }
    }

    return (
        <div>
             <Dialog open={open} onOpenChange={setOpen}>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                        </DialogTitle>
                    <DialogDescription>
                    
    
                <form className="max-w-sm mx-auto space-y-5" onSubmit={handleAddTask} >
                  
                    <AppSelect 
                     title="دسته بندی"
                      onChange={(id)=>setSelectCategoryId(id)}
                      options={categories.map(category=>({
                        title:category.title,
                        value:category.id
                      }))}/>

                    <AppInput title="عنوان" id="title" 
                      value={title} onChange={(e)=>setTitle(e.target.value)}
                     placeholder="عنوان را وارد کنید" required/>

                    <AppButton  type="submit" isLoading={isLoading} />
                </form>
                
    
                </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddTaskModal;
