import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export const TodoList = ({taskList,setTaskList}) => {

    const handleDelete = (id) => {
        setTaskList(taskList.filter((task) => task.id !==id));
    }
    const handleCompleted = (id) => {
            setTaskList(taskList.map((task)=> {
            if(id===task.id){
                return{
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
            }))
    }
    return (
        <div className="todolist">
            <div className="todos">
                {taskList.map((task, index)=> (
                
                <div className={`todo ${task.completed ? "completed" : ""}`} key ={index}>
                    <div className="todoText">
                        <span>{task.text}</span>
                    </div>
                    <div className="icons">
                        <button onClick={()=>handleCompleted(task.id)}>
                        <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button onClick={()=>handleDelete(task.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    )
}

