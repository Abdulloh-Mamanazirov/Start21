import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:[]
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser(state,action){
            state.user.push(action.payload)
        }
    }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer