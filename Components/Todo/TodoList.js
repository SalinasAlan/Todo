import { useState } from 'react';
import { useTasks } from '../../Context/Todo';
import Task from '../Task/Task';
import { ListContainer } from '../../styles/Containers/Container';
import { ShowTask } from './TodoListStyle';
import { HiddenTasksContainer } from '../../styles/Containers/Container';

const TodoList = () => {

    const { tasks } = useTasks();
    const [show, setShow] = useState(false);

    return (
        <>
            <ListContainer>
                {
                    tasks.map((task, id) => {
                        if (!task.complete) {
                            return <Task key={id} {...task} />
                        }
                    })
                }
                <ShowTask onClick={_ => setShow(!show)}>
                    show completed task
                </ShowTask>
                <HiddenTasksContainer show={show}>
                    {
                        tasks.map((task, id) => {
                            if (task.complete) {
                                return <Task key={id} {...task} completed checked />
                            }
                        })
                    }
                </HiddenTasksContainer>
            </ListContainer>
        </>
    )
}

export default TodoList;