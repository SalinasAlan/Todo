import { useState, useContext } from 'react';
import { v4 } from 'uuid';

const TodoContext = React.createContext();

export const useTasks = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        setTasks([
            ...tasks,
            {
                id: v4(),
                task,
                complete: false
            }
        ])
    }

    const setStatusTask = (id, status) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, complete: status } : t))
    }

    const handleDeteleTask = (idDeleted) => {
        setTasks(
            tasks.filter(task => {
                return task.id != idDeleted;
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