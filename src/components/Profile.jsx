import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
    function handleLogout() {
        navigate('/', { state: { name: 'Prudhvi' } })
    }
    let navigate = useNavigate()
    return (
        <div>
            <h3>Profile Page</h3>
            <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
        </div>
    )
}

export default Profile