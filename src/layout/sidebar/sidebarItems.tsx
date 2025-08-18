import type { IconType } from "react-icons";

type SidebarItemType ={
title:string ,
Icon : IconType
}

const SidebarItems = ({title,Icon} : SidebarItemType) => {
    return (
        <li>
             <span className="flex items-center gap-2">
                <Icon size={24}/>
                {title}
            </span>
         </li>
    );
}

export default SidebarItems;
