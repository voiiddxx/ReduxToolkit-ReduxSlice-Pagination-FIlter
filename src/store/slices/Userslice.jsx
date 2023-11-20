import { createSlice, configureStore } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        getUser(state , action){
            state.push(action.payload)
        }
    }
});

export const {getUser} = UserSlice.actions;

export default UserSlice.reducer;