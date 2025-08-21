import type { ComponentProps } from "react";
import { ImSpinner9 } from "react-icons/im";

const AppButton = ({ className ,loading , ...rest} : ComponentProps<"button"> & {loading?:boolean}) => {
    return (
        <button  className={`${className} text-white bg-blue-700
        hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
        text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
        dark:focus:ring-blue-800 disabled:opacity-60`}  {...rest} disabled={loading} >
            {loading ? <div className="flex items-center justify-center gap-5"
            >"لطفا صبر کنید" <ImSpinner9 className="animate-spin"/>
            </div>: "ثبت"}
            </button>
    );
}

export default AppButton;
