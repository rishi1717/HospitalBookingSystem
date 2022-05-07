import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	token: "",
	id: "",
	name: "",
}

export const adminSlice = createSlice({
	name: "adminToken",
	initialState,
	reducers: {
		addAdminToken: (state, action) => {
			state.token = action.payload
		},
		addAdminId: (state, action) => {
			state.id = action.payload
		},
		addAdminName: (state, action) => {
			state.name = action.payload
		},

		removeAdminToken: (state) => {
			state.token = ""
		},
		removeAdminId: (state) => {
			state.id = ""
		},
		removeAdminName: (state) => {
			state.name = ""
		},
	},
})

const {
	addAdminToken,
	removeAdminToken,
	addAdminId,
	removeAdminId,
	addAdminName,
	removeAdminName,
} = adminSlice.actions

export default adminSlice.reducer
export {
	addAdminToken,
	removeAdminToken,
	addAdminId,
	removeAdminId,
	addAdminName,
	removeAdminName,
}