import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        isLoading:false,
    },
    reducers:{
        //ab banayenge actions
        setUser:(state,action) => {
       state.user = action.payload  //updates the user state with the value provided in the action's payload
        },
        setLoading: (state,action) => {
            state.isLoading = action.payload
        }
    }
});

export const {setUser,setLoading} = userSlice.actions;
export default userSlice.reducer;