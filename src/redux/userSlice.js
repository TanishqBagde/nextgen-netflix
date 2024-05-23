import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
    },
    reducers:{
        //ab banayenge actions
        setUser:(state,action) => {
       state.user = action.payload  //updates the user state with the value provided in the action's payload
        }
    }
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;