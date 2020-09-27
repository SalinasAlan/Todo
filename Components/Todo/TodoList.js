import { useTasks } from '../../Context/Todo';
import Task from '../Task';

const TodoList = () => {

    const { tasks } = useTasks();

    return (
        <>
            <div>
                <h1>Tasks</h1>
                {
                    tasks.map((task, index) => (
                        <Task key={index} {...task} />
                    ))
                }
            </div>
        </>
    )
}

export default TodoList;