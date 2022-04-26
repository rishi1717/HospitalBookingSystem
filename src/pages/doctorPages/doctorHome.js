import React from 'react'
import WelcomeCard from '../../components/doctorModule/WelcomeCard'
import DoctorsLayout from '../../layouts/DoctorsLayout'

const DoctorHome = () => {
  return (
    <DoctorsLayout >
      <WelcomeCard />
    </DoctorsLayout>
  )
}

export default DoctorHome