import AppButton from "@/components/sharedComponents/AppButton";
import AppInput from "@/components/sharedComponents/AppInput";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addTaskCategories } from "@/services/taskCategories";
import type { AddCategoriesType, CategoriesListItemType } from "@/types/taskCategories";
import { successToast } from "@/utils/toastUtils";
import { useState, type FormEvent } from "react";

const initialValues={
        title : "",
        description:"",
        createdAt: new Date().toISOString(),
        userId:"1",
        icon:"test_icon"
    }
const AddModalDialog = ({setCategories}:{setCategories : (data:CategoriesListItemType)=> void }) => {

    const [open ,setOpen]=useState(false)
    const [loading ,setLoading]=useState(false)
    const [values , setValues]=useState<AddCategoriesType>(initialValues)

        const handleAddCategory=async(e:FormEvent<HTMLFormElement>)=>{
            setLoading(true)
            e.preventDefault()
            const res=await addTaskCategories(values)
            if (res.status==201) {
                setCategories(res.data)
                 successToast("دسته بندی با موفقیت اضافه شد")
                 setOpen(false)
                 setValues(initialValues)
                 setLoading(false)
            }
        }
    
    return (
        <div>
            <Dialog open={open} onOpenChange={(isOpen)=>setOpen(isOpen)}>
                <DialogTrigger className="text-white bg-sky-500 rounded-lg px-2 py-2">
                    افزودن دسته بندی 
                    </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>افزودن دسته بندی جدید</DialogTitle>
                    <DialogDescription>
                    
    
                <form className="max-w-sm mx-auto" onSubmit={handleAddCategory}>

                    <AppInput title="عنوان" id="title"  value={values.title}
                     onChange={(e)=>setValues({... values , title:e.target.value})}
                     placeholder="عنوان را وارد کنید" required/>

                    <AppInput title="توضیحات" id="description"  value={values.description}
                     onChange={(e)=>setValues({... values , description:e.target.value})}
                     placeholder="توضیحات را وارد کنید" required/>


                    <AppButton  type="submit"  loading={loading}/>
                </form>
                
    
                </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddModalDialog;
