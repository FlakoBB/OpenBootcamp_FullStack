import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add ,length}) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    function addTask(evento) {
        evento.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask)
        nameRef.current.value = ''
        descriptionRef.current.value = ''
        levelRef.current.value = LEVELS.NORMAL
    }

    return (
        <form onSubmit={addTask} className='d-flex align-items-center justify-content-center mt-4'>
            <div className='form-outline flex-fill'>
                <input ref={ nameRef } type='text' id='inputName' className='form-control form-control-lg' required autoFocus placeholder='Task Name' />
                <input ref={ descriptionRef } type='text' id='inputDescription' className='form-control form-control-lg' required placeholder='Task Description' />
                <select className='form-select form-control-lg' ref={ levelRef } defaultValue={ LEVELS.NORMAL } id='levelTask'>
                    <option value={ LEVELS.NORMAL }>Normal</option>
                    <option value={ LEVELS.URGENT }>Urgent</option>
                    <option value={ LEVELS.BLOCKING }>Bloking</option>
                </select>
                <button type='submit' className='btn btn-success'>{ length > 0 ? 'Add new task' : 'Create your first task' }</button>
            </div>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
