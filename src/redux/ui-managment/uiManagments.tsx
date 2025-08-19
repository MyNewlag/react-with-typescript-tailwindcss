import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type themeType = "dark"|"light"

type initialStateType = {showSidebar:boolean , theme:themeType}

const initialState : initialStateType = {showSidebar:false , theme:localStorage.getItem("theme")as themeType || "light"}

const uiManagerslice = createSlice({
    name:"ui-manager",
    initialState,
    reducers:{
        setShowSidebar : (state : initialStateType , action : PayloadAction<boolean>)=>{
            state.showSidebar =action.payload 
        },
           setTheme: (state : initialStateType ,action : PayloadAction<themeType>) =>{
                state.theme = action.payload
                localStorage.setItem("theme" , state.theme)
         },
            toggleTheme : (state : initialStateType)=>{
                 const newTheme =  state.theme==="dark" ? "light" : "dark"
                state.theme=newTheme
                 localStorage.setItem("theme" , newTheme )
        }
    }
})
const uiManageReducer= uiManagerslice.reducer
export default uiManageReducer

export const {setShowSidebar ,toggleTheme }=uiManagerslice.actions
