import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// Estilos
import './../../styles/task.scss'

const TaskListComponent = () => {

    const deafaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    // Estado del componente
    const [tasks, setTasks] = useState([deafaultTask])
    const [loading, setLoading] = useState(true)

    // control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false)
        return() => {
            console.log('TaskList component is goin to unmount')
        }
    }, [tasks])

    const changeCompleted = () => {
        console.log('cambiar estado de la tarea')
    }

    return (
        <div>
            <h1>Your tasks:</h1>
            {/* Hacer un for/map para renderizar una lista contodas las tareas */}
            <TaskComponent task={ deafaultTask }></TaskComponent>
        </div>
    );
}

export default TaskListComponent;
