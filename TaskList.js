import React from 'react';
import TaskItem from './TaskItem';
import './styles/TaskList.css';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={task}
                    toggleComplete={() => toggleComplete(index)}
                    deleteTask={() => deleteTask(index)}
                />
            ))}
        </ul>
    );
};

export default TaskList;
