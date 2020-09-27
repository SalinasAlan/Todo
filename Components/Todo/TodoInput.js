import { useState } from 'react';
import { useTasks } from '../../Context/Todo';

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
                <input
                    type="text"
                    value={task}
                    placeholder="New task..."
                    onChange={e => setTask(e.target.value)}
                    required
                />
                <button>
                    Add
                </button>
            </form>
        </>
    );
};

export default TodoInput;
