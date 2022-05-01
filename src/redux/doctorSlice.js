import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	token: "",
	id: "",
	name: "",
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
		addDoctorName: (state, action) => {
			state.name = action.payload
		},
		removeDoctorName: (state) => {
			state.name = ""
		},
	},
})

const {
	addDoctorToken,
	removeDoctorToken,
	addDoctorId,
	removeDoctorId,
	addDoctorName,
	removeDoctorName,
} = doctorSlice.actions

export default doctorSlice.reducer
export { addDoctorToken, removeDoctorToken, addDoctorId, removeDoctorId,addDoctorName,removeDoctorName }
