import { AiFillHome } from "react-icons/ai";
import SidebarItems from "./sidebarItems";
import TopActionElements from "./TopActionElements";
import { BiSolidCategory } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import SidebarContainer from "../../component/container/SidebarContainer";

const Sidebar = () => {

    return (
        <SidebarContainer>   
        <div className="h-full w-full"> 
            <TopActionElements/>
             <hr className="my-5 border-b dark:border-gray-500"/>
             <ul className="space-y-4">
             <SidebarItems to={"/"} title="داشبرد" Icon={AiFillHome} />
             <SidebarItems to={"/categories"} title="دسته بندی ها" Icon={BiSolidCategory} />
             <SidebarItems to={"/tasks"} title="تسک ها" Icon={FaTasks } />
             </ul>
         </div>
        </SidebarContainer>    
         
    );
}

export default Sidebar;
