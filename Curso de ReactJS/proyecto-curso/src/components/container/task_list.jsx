import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const deafaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    const changeState = () => {
        console.log('cambiar estado de la tarea')
    }

    return (
        <div>
            <div>Your tasks:</div>
            {/* Hacer un for/map para renderizar una lista contodas las tareas */}
            <TaskComponent task={ deafaultTask }></TaskComponent>
        </div>
    );
}

export default TaskListComponent;
