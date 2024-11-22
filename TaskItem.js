import React from 'react';
import './styles/TaskItem.css';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={toggleComplete}
            />
            <span>{task.text}</span>
            <button className="delete-btn" onClick={deleteTask}>
                Delete
            </button>
        </li>
    );
};

export default TaskItem;
