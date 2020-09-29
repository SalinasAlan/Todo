import { useTasks } from '../../Context/Todo';
import { Checbox, TaskText } from './style';

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
            <TaskText>{task}</TaskText>
            <button onClick={handleDeleted}>borrar</button>
            <br />
        </>
    );
}

export default Task;