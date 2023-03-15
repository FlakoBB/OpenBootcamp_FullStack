import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

// Importacion de estilos
import './../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Task Created')
        return () => {
            console.log(`Task: ${task.name} is goint to unmount`)
        };
    }, [task]);

    /**
     * 
     * @returns Devuelve un elemento badge que indica el nivel de la tarea
     */
    function taskLevelBadge() {
        switch(task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'><sapn className='badge bg-primary'>{ task.level }</sapn></h6>
                )
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'><sapn className='badge bg-warning'>{ task.level }</sapn></h6>
                )
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'><sapn className='badge bg-danger'>{ task.level }</sapn></h6>
                )
            default:
                break
        }
    }

    /**
     * 
     * @returns Devuelve el icono dependiendo si la tarea esta completa o no.
     */
    function taskCompletedIcon() {
        if(task.completed) {
            return (<i onClick={ () => complete(task) } className='bi-toggle-on task-action' style={ {color: 'green', fontSize: '1.5rem'} }></i>)
        }

        return (<i onClick={ () => complete(task) } className='bi-toggle-off task-action' style={ {color: 'red', fontSize: '1.5rem'} }></i>)
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                {/* llamado a la funcion que devuelve badge */}
                { taskLevelBadge() }
            </td>
            <td className='align-middle'>
                { taskCompletedIcon() }
                <i onClick={() => remove(task)} className='bi-trash task-action' style={ {color: 'tomato', fontSize: '1.5rem'} }></i>
            </td>
        </tr>
        // <div>
        //     <h2 className='task-name'>Name: { task.name }</h2>
        //     <h3>Description: { task.description }</h3>
        //     <h4>Level: { task.level }</h4>
        //     <h5>Completed: { task.completed ? 'COMPLETED':'PENDING' }</h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
