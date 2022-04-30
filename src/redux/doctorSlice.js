import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	token:'',
}


export const doctorSlice = createSlice({
	name: "doctorToken",
	initialState,
	reducers: {
		addDoctorToken: (state, action) => {
			state.token = action.payload
		},
		removeDoctorToken: (state) => {
			state.token = ''
		},
	},
})

const addDoctorToken = doctorSlice.actions.addDoctorToken
const removeDoctorToken = doctorSlice.actions.removeDoctorToken

export default doctorSlice.reducer
export { addDoctorToken, removeDoctorToken }
