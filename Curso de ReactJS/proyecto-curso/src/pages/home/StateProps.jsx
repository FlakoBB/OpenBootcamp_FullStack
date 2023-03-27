import React from 'react'
import { useLocation } from 'react-router-dom'

const StateProps = () => {

    const location = useLocation()

    console.log(location.state.online)
    console.log(location.search)

    return (
        <div>StateProps: { location.state.online ? 'user Online' : 'user Offline' }</div>
    )
}

export default StateProps