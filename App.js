import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './index.css';

const App = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')) || []
    );

    const addTask = (text) => {
        setTasks([...tasks, { text, completed: false }]);
    };

    const toggleComplete = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Calculate the number of completed tasks
    const completedTasksCount = tasks.filter(task => task.completed).length;

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <TaskInput addTask={addTask} />
            <TaskList
                tasks={tasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
            />
            <div className="task-stats">
                <p>
                    {completedTasksCount} of {tasks.length} task(s) completed
                </p>
            </div>
        </div>
    );
};

export default App;
