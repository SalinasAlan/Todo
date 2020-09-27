import { useState, useContext } from 'react';

const TodoContext = React.createContext();

export const useTasks = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        setTasks([
            ...tasks,
            {
                task,
                complete: false
            }
        ])
    }

    const setStatusTask = (id, status) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, complete: status } : t))
    }

    const handleDeteleTask = (taskDeleted) => {
        setTasks(
            tasks.filter(task => {
                return task.task != taskDeleted;
            })
        )
    }

    return (
        <TodoContext.Provider
            value={{ tasks, addTask, setStatusTask, handleDeteleTask }}
        >
            {children}
        </TodoContext.Provider>
    )

}