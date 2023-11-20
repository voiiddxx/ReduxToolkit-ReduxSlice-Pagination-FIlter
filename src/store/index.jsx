
import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slices/Userslice"
import teamReducer from "./slices/Teamslice"

const store = configureStore({
    reducer:{
        user:userReducer,
        team:teamReducer

    }
})

export default store;