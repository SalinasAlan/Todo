import { useState, useContext, useEffect } from 'react';
import { v4 } from 'uuid';
import app from '../firebase';

const TodoContext = React.createContext();

export const useTasks = () => useContext(TodoContext);

export const TodoProvider = ({ children, id }) => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        app
            .firestore()
            .collection('list')
            .doc(`${sessionStorage.getItem('id')}`)
            .collection('tasks')
            .orderBy('createdAt')
            .onSnapshot(data => {
                const tasksData = data.docs.map(doc => ({ ...doc.data() }))
                setTasks(tasksData);
            })
    }, [])

    const addTask = task => {

        const newTask = {
            id: v4(),
            task,
            complete: false,
            createdAt: new Date()
        }

        app
            .firestore()
            .collection('list')
            .doc(`${sessionStorage.getItem('id')}`)
            .collection('tasks')
            .doc(newTask.id)
            .set(newTask)
    }

    const setStatusTask = (id, status) => {
        app
            .firestore()
            .collection('list')
            .doc(`${sessionStorage.getItem('id')}`)
            .collection('tasks')
            .doc(id)
            .update({
                complete: status
            });
    }

    const handleDeteleTask = (idDeleted) => {
        // setTasks(
        //     tasks.filter(task => {
        //         return task.id != idDeleted;
        //     })
        // )

        app
            .firestore()
            .collection('list')
            .doc(`${sessionStorage.getItem('id')}`)
            .collection('tasks')
            .doc(idDeleted)
            .delete()
    }

    return (
        <TodoContext.Provider
            value={{ tasks, addTask, setStatusTask, handleDeteleTask }}
        >
            {children}
        </TodoContext.Provider>
    )

}