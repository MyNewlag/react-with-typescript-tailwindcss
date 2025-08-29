
import  { type ReactNode } from 'react';
import { useAppSelector } from '../../redux/reduxHooks';

const SidebarContainer = ({children}:{children : ReactNode}) => {

    const {showSidebar}=useAppSelector(state=>state.uiManageReducer)


 return (
    <section id="sidebar"
     className={`p-3 fixed md:right-0 top-0 w-app_sidebar_w h-screen 
            transition-all bg-white dark:bg-gray-700  border-l border-gray-500
            md:block ${showSidebar ? "right-0" : "-right-app_sidebar_w"}`}>
                {children}
    </section>
    );
}

export default SidebarContainer;
