import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // 仮定しています。正確なアイコンセットに合わせて変更してください。

export const Inputform = ({taskList, setTaskList}) => {

    const [inputText, setInputText] = useState("")

    const handleSubmit = (e) => {
            e.preventDefault()
        setTaskList([
            ...taskList,
            {   
                id: taskList.length,
                text: inputText,
                completed: false
            }
        ])
        console.log(taskList)
        setInputText("")
    }
    const handleChange = (e) => {
        setInputText(e.target.value);
        

    }
    return (
        <div className='inputForm'>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputText}/>
                <button>
                <FontAwesomeIcon icon={faPlus} />
                </button>
                </form>
    </div>
        )
}
