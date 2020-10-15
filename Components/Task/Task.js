import { useTasks } from '../../Context/Todo';
import { TaskContainer, Checkbox, TaskText, TaskWrapper, Button } from './style';

const Task = ({ id, task, completed, checked }) => {
    const { setStatusTask, handleDeteleTask } = useTasks();

    const handleCompleted = e => {
        setStatusTask(id, e.target.checked);
    }

    const handleDeleted = () => {
        handleDeteleTask(id)
    }

    return (
        <TaskContainer>
            <TaskWrapper>
                <Checkbox type="checkbox" onChange={handleCompleted} checked={checked} />
                <TaskText complete={completed}>{task}</TaskText>
            </TaskWrapper>
            <Button onClick={handleDeleted}>Delete</Button>
            <br />
        </TaskContainer>
    );
}

export default Task;