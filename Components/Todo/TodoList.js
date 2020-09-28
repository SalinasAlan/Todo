import { useTasks } from '../../Context/Todo';
import Task from '../Task/Task';
import { ListContainer } from '../../styles/Containers/Container';

const TodoList = () => {

    const { tasks } = useTasks();

    return (
        <>
            <ListContainer>
                {
                    tasks.map((task, id) => (
                        <Task key={id} {...task} />
                    ))
                }
            </ListContainer>
        </>
    )
}

export default TodoList;