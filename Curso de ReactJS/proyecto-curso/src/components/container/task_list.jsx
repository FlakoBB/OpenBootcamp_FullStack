import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

// Estilos
import './../../styles/task.scss'

const TaskListComponent = () => {

    const deafaultTask1 = new Task('Example', 'Default description 1', false, LEVELS.NORMAL)
    const deafaultTask2 = new Task('Example', 'Default description 2', true, LEVELS.URGENT)
    const deafaultTask3 = new Task('Example', 'Default description 3', false, LEVELS.BLOCKING)

    // Estado del componente
    const [tasks, setTasks] = useState([deafaultTask1, deafaultTask2, deafaultTask3])
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
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks.map((task, index) => {
                                        return (<TaskComponent key={ index } task={ task }></TaskComponent>)
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>
        </div>
    );
}

export default TaskListComponent;
