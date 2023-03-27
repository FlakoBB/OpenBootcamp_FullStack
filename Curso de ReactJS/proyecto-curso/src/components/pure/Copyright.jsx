import React from 'react'
// * UI Material Components
import { Link } from '@mui/material'
import Typography from '@mui/material/Typography'

const Copyright = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
            { 'Copyright (C) ' }
            <Link color='inherit' href='https://imaginaformacion.com'>
                imagina Formacion
            </Link>
            { ' ' }
            { new Date().getFullYear() }
        </Typography>
    )
}

export default Copyright