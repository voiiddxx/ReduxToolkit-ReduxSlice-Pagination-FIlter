import { createSlice } from '@reduxjs/toolkit'



const TeamSlice = createSlice({
    name:'team',
    initialState:[],
    reducers:{
        GetTeam(state , action){
            state.push(action.payload);
        }
    }
});

export const {GetTeam} = TeamSlice.actions;
export default TeamSlice.reducer;