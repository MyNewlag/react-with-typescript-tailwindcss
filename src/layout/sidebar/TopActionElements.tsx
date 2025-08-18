

import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import { setShowSidebar, toggleTheme } from '../../redux/ui-managment/uiManagments';

const TopActionElements = () => {
  const dispatch = useAppDispatch()
     const {theme}=useAppSelector(state=>state.uiManageReducer)

    return (
     <div className="flex justify-between md:justify-end items-start">  
             <button className=" block md:hidden " 
                     onClick={()=>dispatch(setShowSidebar(false))}>
                    <IoCloseSharp size={30}/>
                 </button>
                <button className={`block transform transition-all  ${theme == "dark" && "rotate-x-180" }`} 
                onClick={()=>dispatch(toggleTheme())}> 
                {theme=="light" ? <FaMoon size={24}/> : <FaSun size={24}/>}
            </button>
    </div>
    );
}

export default TopActionElements;
