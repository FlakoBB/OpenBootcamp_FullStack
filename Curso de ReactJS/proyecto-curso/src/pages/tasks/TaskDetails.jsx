import React from 'react'
import { useParams } from 'react-router-dom'

const TaskDetails = () => {

    const {id} = useParams()

    return (
        <div>TaskDetails - { id }</div>
    )
}

export default TaskDetails