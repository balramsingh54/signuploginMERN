import React from 'react'
import HomeNav from './HomeNav'
import LeftDashboard from './LeftDashboard'
import AddNewUserForm from './AddNewUserForm'

const AddNewUser = () => {
    return (
        <div>
            <HomeNav />
            <LeftDashboard />
            <AddNewUserForm />
        </div>
    )
}

export default AddNewUser