import { toast, type ToastPosition, type TypeOptions } from "react-toastify";

export const showToast=(
    text:string,
    icon:TypeOptions ="info",
    autoClose?:number | false,
    position :ToastPosition = "top-center"  
)=>{
return toast(
    text ,
    { closeOnClick : true,
        autoClose,
        type:icon,
        rtl:true,
        // position : position
        position
    }
)
}

export const errorToast=(text="عملیات ناموفق")=>{
    return showToast(text , "error" )
}

export const successToast=(text="عملیات موفق")=>{
    return showToast(text , "success" )
}