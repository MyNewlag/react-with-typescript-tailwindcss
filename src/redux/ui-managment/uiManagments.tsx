import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type themeType = "dark"|"light"

type initialStateType = {showSidebar:boolean , theme:themeType}

const initialState : initialStateType = {showSidebar:false , theme:"light"}

const uiManagerslice = createSlice({
    name:"ui-manager",
    initialState,
    reducers:{
        setShowSidebar : (state : initialStateType , action : PayloadAction<boolean>)=>{
            state.showSidebar =action.payload 
        },
           setTheme: (state : initialStateType ,action : PayloadAction<themeType>) =>{
                state.theme = action.payload
         },
            toggleTheme : (state : initialStateType)=>{
                 state.theme =  state.theme==="dark" ? "light" : "dark"
        }
    }
})
const uiManageReducer= uiManagerslice.reducer
export default uiManageReducer

export const {setShowSidebar ,toggleTheme }=uiManagerslice.actions
