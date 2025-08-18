import { AiFillHome } from "react-icons/ai";
import {  useAppSelector } from "../../redux/reduxHooks";
import SidebarItems from "./sidebarItems";
import TopActionElements from "./TopActionElements";
import { BiSolidCategory } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";

const Sidebar = () => {

    const {showSidebar}=useAppSelector(state=>state.uiManageReducer)
     

    return (
        <section id="sidebar"
         className={`p-3 fixed md:right-0 top-0 w-app_sidebar_w h-screen transition-all bg-white
          dark:bg-gray-700  border-l border-gray-500 md:block ${showSidebar ? "right-0" : "-right-app_sidebar_w"}`}>
            
        <div className="h-full w-full"> 
            <TopActionElements/>
             <hr className="my-5 border-b dark:border-gray-500"/>
             <ul className="space-y-4">
             <SidebarItems title="داشبرد" Icon={AiFillHome} />
             <SidebarItems title="دسته بندی ها" Icon={BiSolidCategory} />
             <SidebarItems title="تسک ها" Icon={FaTasks } />
             </ul>
         </div>
         </section>
         
    );
}

export default Sidebar;
