import React, { useReducer, useRef } from 'react'

//? Prioridad de las tareas
const taskPriority = {
    NORMAL: 'Normal',
    URGENT: 'Urgente',
    BLOKING: 'Bloking'
}

//? Filtros de las tareas
// const tasksFilter = {
//     ALL: 'ALL',
//     COMPLETED: 'COMPLETED',
//     NORMAL: 'NORMAL',
//     URGENT: 'URGENT',
//     BLOKING: 'BLOKING',
// }

//? Acciones
const actions = {
    ADD_TASK: 'ADD_TASK',
    DELETE_TASK: 'DELETE_TASK',
    COMPLETE_TASK: 'COMPLETE_TASK',
    FILTER_TASKS: 'FILTER_TASKS',
}

//? Estado Inicial
// const initialState = [{
//     title: '',
//     priority: taskPriority.NORMAL,
//     isCompleted: false
// }]

//? Reducer
const tasksReducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_TASK:
            return [
                ...state,
                {
                    title: action.payload.title,
                    priority: action.payload.priority,
                    isCompleted: false
                }
            ]
        case actions.COMPLETE_TASK:
            return state.map((task, index) => {
                if(index === action.index) {
                    return { ...task, ...action.payload }
                }
                return task
            })
        case actions.DELETE_TASK:
            return state.filter((task, index) => index !== action.index)
        // case actions.FILTER_TASKS:
        //     return {
        //         ...state,
        //         filter: action.filter
        //     }
        // case actions.COMPLETED_TASKS:
        //     return state.filter(task => task.isCompleted === true)
        default:
            return state
    }
}

const ListaTareas = () => {

    const titleRef = useRef(null)
    const priorityRef = useRef(null)

    //? useReducer
    const [state, dispatch] = useReducer(tasksReducer, [])

    const addTask = (event) => {
        event.preventDefault()
        dispatch({
            type: actions.ADD_TASK,
            payload: {
                title: titleRef.current.value,
                priority: priorityRef.current.value
            }
        })
        titleRef.current.value = ''
        priorityRef.current.value = taskPriority.NORMAL
    }

    const completeTask = (task, index) => {
        dispatch( {
            type: actions.COMPLETE_TASK,
            payload: {
                isCompleted: !task.isCompleted
            },
            index
        })
    }

    const deleteTask = (index) => {
        dispatch({
            type: actions.DELETE_TASK,
            index
        })
    }

    // ToDo: buscar y crear la forma de mopstrar las tareas filtradas
    // const filterTasks = (filter) => {
    //     switch (filter) {
    //         case tasksFilter.ALL:
    //             dispatch({type: actions.FILTER_TASKS, filter: 'allTasks'})
    //             break;
    //         case tasksFilter.COMPLETED:
    //             dispatch({type: actions.FILTER_TASKS, filter: 'completedTasks'})
    //             break;
    //         case tasksFilter.NORMAL:
    //             dispatch({type: actions.FILTER_TASKS, filter: 'normalTasks'})
    //             break;
    //         default:
    //             break;
    //     }
    // }

    return (
        <div className='container'>
            <h1 className='list-title'>Lista de Tareas</h1>
            <section className='list-container'>
                <ul className='task-list'>
                    {
                        state.map((task, index) => (
                            <li className='task' key={ index }>
                                <h3 className='task-name'>{ task.title }</h3>
                                <p className='task-priority'>{ task.priority }</p>
                                <button className='btn btn-complete' onClick={ () => completeTask(task, index) }>
                                    { task.isCompleted ? 'Reactivar' : 'Completar'}
                                </button>
                                <button className='btn btn-delete' onClick={ () => deleteTask(index) }>Eliminar</button>
                            </li>
                        ))
                    }
                </ul>
                {/* <div className='filter-btns'>
                    <p>Mostrar:</p>
                    <button className='btn' onClick={ () => filterTasks(tasksFilter.ALL) }>Todas</button>
                    <button className='btn' onClick={ () => filterTasks(tasksFilter.COMPLETED) }>Completadas</button>
                    <button className='btn' onClick={ () => filterTasks(tasksFilter.NORMAL) }>Normales</button>
                </div> */}
            </section>
            <form className='new-task-form' onSubmit={ addTask }>
                <h4 className='form-title'>Nueva Tarea</h4>
                <input className='task-name-input' type='text' name='taskTitle' placeholder='Titulo de la tarea' ref={ titleRef }/>
                <label className='priority-label' htmlFor='priority'>Prioridad</label>
                <select className='priority-select' id='priority' ref={ priorityRef }  defaultValue={ taskPriority.NORMAL }>
                    <option value={ taskPriority.NORMAL }>{ taskPriority.NORMAL }</option>
                    <option value={ taskPriority.URGENT }>{ taskPriority.URGENT }</option>
                    <option value={ taskPriority.BLOKING }>{ taskPriority.BLOKING }</option>
                </select>
                <button className='btn btn-add' type='submit'>Agregar Tarea</button>
            </form>
        </div>
    )
}

export default ListaTareas