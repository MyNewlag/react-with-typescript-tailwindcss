import Swal, { type SweetAlertIcon } from 'sweetalert2'

export const successAlertModal=(
    title:string ,
    text:string ,
     icon : SweetAlertIcon)=>{
    
return Swal.fire({
  title,
  text,
  icon,
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
}


export const confirmAlert=(
    title:string,
    text:string,
    icon:SweetAlertIcon = "success",
)=>{
    return Swal.fire({
     title,
     text,
    icon,
   showCancelButton: true,
   confirmButtonText:"تایید",
     cancelButtonText : "انصراف",
   confirmButtonColor: "#ff0000",
   cancelButtonColor: "gray",
    })
}