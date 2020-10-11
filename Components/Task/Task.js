import { useTasks } from '../../Context/Todo';
import { TaskContainer ,Checbox, TaskText, TaskWrapper, Button } from './style';

const Task = ({ id, task, complete }) => {
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
                <Checbox type="checkbox" onChange={handleCompleted} />
                <TaskText>{task}</TaskText>
            </TaskWrapper>
            <Button onClick={handleDeleted}>Delete</Button>
            <br />
        </TaskContainer>
    );
}

export default Task;