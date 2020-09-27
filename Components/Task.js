import { useTasks } from '../Context/Todo';

const Task = ({ id, task, complete}) => {
    const { setStatusTask, handleDeteleTask } = useTasks();

    const handleCompleted = e => {
        // setStatusTask(id, e.target.checked);
        console.log(`Se termino ${task}`);
    }

    const handleDeleted = () => {
        handleDeteleTask(task)
    }

    return (
        <>
            <input type="checkbox" onChange={handleCompleted} />
            <span>{task}</span>
            <button onClick={handleDeleted}>borrar</button>
            <br />
        </>
    );
}

export default Task;