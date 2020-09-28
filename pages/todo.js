import { TodoProvider } from '../Context/Todo';
import TodoList from '../Components/Todo/TodoList';
import TodoInput from '../Components/Todo/TodoInput';
import { Layout } from '../Components/Layout';
import { Container } from '../styles/Containers/Container'

const Todo = () => {
    return (
        <Layout>
            <TodoProvider>
                <Container>
                    <TodoInput />
                    <TodoList />
                </Container>
            </TodoProvider>
        </Layout>
    );
};

export default Todo;