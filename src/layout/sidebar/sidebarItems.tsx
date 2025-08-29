import type { IconType } from "react-icons";
import { NavLink, type To } from "react-router";

type SidebarItemType ={
title:string ,
Icon : IconType,
to:To
}

const SidebarItems = ({title,Icon,to} : SidebarItemType) => {
    return (
      
             <NavLink to={to} className={({isActive})=>`flex items-center gap-2 p-1 rounded-md transition-all
             ${isActive && "bg-sky-300 text-white"}`}>
                <Icon size={24}/>
                {title}
            </NavLink>

    );
}

export default SidebarItems;
