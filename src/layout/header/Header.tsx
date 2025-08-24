import { RxHamburgerMenu } from "react-icons/rx";
import { useAppDispatch } from "../../redux/reduxHooks";
import { setShowSidebar } from "../../redux/ui-managment/uiManagments";
import { BellIcon, ShieldUser } from "lucide-react";
import { convertMiladiToJalali } from "@/utils/dateUtils";
import { AiFillGoogleCircle } from "react-icons/ai";

const Header = () => {

    const dispatch = useAppDispatch()
    
    return (
            <section id="header" 
            className="fixed top-0 left-0 h-app_header_h w-full bg-white
             dark:bg-gray-700 md:pr-app_sidebar_w shadow-lg">

               <div className="flex h-full items-center justify-between px-4">
                
                 <button  className="md:hidden" onClick={()=>dispatch(setShowSidebar(true))}>
                    <RxHamburgerMenu size={24}/>
                </button>

                <p className="text-gray-500 hidden md:block">{convertMiladiToJalali(undefined , "dddd ، jD jMMMM jYYYY")}</p>
                <span className="flex items-center gap-4">
                    <span className="relative">
                        <BellIcon className="text-gray-500"/>
                        <AiFillGoogleCircle  className=" absolute top-0 right-0 text-red-500 animate-ping" size={10}/>
                    </span>
                    <span className="flex justify-center items-center size-10 right-1 rounded-full">
                        <ShieldUser className="text-sky-500" size={27}/>
                    </span>
                    <p className="text-gray-400">نام کاربر</p>
                </span>
               </div>
            </section>
    );
}

export default Header;
