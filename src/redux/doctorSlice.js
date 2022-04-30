import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	token: "",
	id: "",
}

export const doctorSlice = createSlice({
	name: "doctorToken",
	initialState,
	reducers: {
		addDoctorToken: (state, action) => {
			state.token = action.payload
		},
		addDoctorId: (state, action) => {
			state.id = action.payload
		},
		removeDoctorToken: (state) => {
			state.token = ""
		},
		removeDoctorId: (state) => {
			state.id = ""
		},
	},
})

const addDoctorToken = doctorSlice.actions.addDoctorToken
const removeDoctorToken = doctorSlice.actions.removeDoctorToken
const addDoctorId = doctorSlice.actions.addDoctorId
const removeDoctorId = doctorSlice.actions.removeDoctorId

export default doctorSlice.reducer
export { addDoctorToken, removeDoctorToken, addDoctorId, removeDoctorId }
