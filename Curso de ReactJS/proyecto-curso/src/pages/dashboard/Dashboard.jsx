import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'
import Copyright from '../../components/pure/Copyright'

const DashboardPage = () => {

    const history = useHistory()

    const logout = () => {
        history.push('/login')
    }

    return (
        <div>
            <Button variant='contained' onClick={ logout }>Logout</Button>
            <Copyright/>
        </div>
    )
}

export default DashboardPage