import { useState } from 'react';
import { useTasks } from '../../Context/Todo';
import { Input, ButtonAdd } from './InputStyle';

const TodoInput = () => {

    const [task, setTask] = useState('');
    const { addTask } = useTasks();

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(task)
        setTask('')
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <Input
                    type="text"
                    value={task}
                    placeholder="New task..."
                    onChange={e => setTask(e.target.value)}
                    required
                />
                <ButtonAdd>
                    +
                </ButtonAdd>
            </form>
        </>
    );
};

export default TodoInput;
