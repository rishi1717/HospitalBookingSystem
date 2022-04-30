import { combineReducers, configureStore } from "@reduxjs/toolkit"
import doctorReducer from "./doctorSlice"
import { persistReducer } from "redux-persist"
import storage from "reduxjs-toolkit-persist/lib/storage"
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1"

const persistConfig = {
	key: "root",
	storage: storage,
	stateReconciler: autoMergeLevel1,
}

const reducers = combineReducers({
	doctor: doctorReducer,
})

const _persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
	reducer: _persistedReducer,
})

export default store
