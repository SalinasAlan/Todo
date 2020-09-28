import { useTasks } from '../../Context/Todo';
import { Checbox } from './style';

const Task = ({ id, task, complete}) => {
    const { setStatusTask, handleDeteleTask } = useTasks();

    const handleCompleted = e => {
        setStatusTask(id, e.target.checked);
    }

    const handleDeleted = () => {
        handleDeteleTask(id)
    }

    return (
        <>
            <Checbox type="checkbox" onChange={handleCompleted} />
            <span>{task}</span>
            <button onClick={handleDeleted}>borrar</button>
            <br />
        </>
    );
}

export default Task;