import {TodoProvider} from '../Context/Todo';
import TodoList from '../Components/Todo/TodoList';
import TodoInput from '../Components/Todo/TodoInput';

const Todo = () => {
    return(
        <TodoProvider>
            <TodoInput />
            <TodoList />
        </TodoProvider>
    );
};

export default Todo;