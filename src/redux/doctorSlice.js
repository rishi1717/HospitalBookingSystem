import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	token: "",
	id: "",
	name: "",
	image: "",
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
		addDoctorName: (state, action) => {
			state.name = action.payload
		},
		addDoctorImage: (state, action) => {
			state.image = action.payload
		},

		removeDoctorToken: (state) => {
			state.token = ""
		},
		removeDoctorId: (state) => {
			state.id = ""
		},
		removeDoctorName: (state) => {
			state.name = ""
		},
		removeDoctorImage: (state) => {
			state.image = ""
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
	addDoctorImage,
	removeDoctorImage,
} = doctorSlice.actions

export default doctorSlice.reducer
export {
	addDoctorToken,
	removeDoctorToken,
	addDoctorId,
	removeDoctorId,
	addDoctorName,
	removeDoctorName,
	addDoctorImage,
	removeDoctorImage,
}
