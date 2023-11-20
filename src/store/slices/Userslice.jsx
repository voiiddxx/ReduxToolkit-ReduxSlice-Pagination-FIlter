import { createSlice} from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        getUser(state , action){
            state.push(action.payload)
        },
        onNextPage(state , action){
            state.pop();
            state.push(action.payload);
        }
    }
});

const TeamSlice = createSlice({
    name:'team',
    initialState:[],
    reducers:{
        GetTeam(state , action){
            state.push(action.payload);
        }
    }
})

export const {getUser , onNextPage} = UserSlice.actions;
export default UserSlice.reducer;