import {configureStore} from '@reduxjs/toolkit'
import doctorReducer from './doctorSlice'

const store = configureStore({
    reducer:{
        doctor:doctorReducer
    }
})

export default store