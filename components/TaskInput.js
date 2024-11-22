import React, { useState } from 'react';
import './styles/TaskInput.css';

const TaskInput = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleAdd = () => {
        if (taskText.trim()) {
            addTask(taskText);
            setTaskText('');
        }
    };

    return (
        <div className="task-input-container">
            <input
                type="text"
                placeholder="Enter a task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button className="add-btn" onClick={handleAdd}>
                Add
            </button>
        </div>
    );
};

export default TaskInput;
