import React from 'react'
import { useParams } from 'react-router-dom'

const TaskDetails = ({task}) => {

    const {id} = useParams()

    return (
        <div>
            <h1>TaskDetails - { id }</h1>
            <h3>{task.name}</h3>
            <h3>{task.description}</h3>
        </div>
    )
}

export default TaskDetails