import { RxHamburgerMenu } from "react-icons/rx";
import { useAppDispatch } from "../../redux/reduxHooks";
import { setShowSidebar } from "../../redux/ui-managment/uiManagments";

const Header = () => {

    const dispatch = useAppDispatch()
    
    return (
            <section id="header" 
            className="fixed top-0 left-0 h-app_header_h w-full bg-white dark:bg-gray-700 md:pr-app_sidebar_w
            shadow-lg">
               <div className="flex h-full items-center p-2">
                 <button  className="md:hidden" onClick={()=>dispatch(setShowSidebar(true))}>
                    <RxHamburgerMenu size={24}/>
                </button>
               </div>
            </section>
    );
}

export default Header;
