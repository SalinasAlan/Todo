import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { TodoProvider } from '../Context/Todo';
import TodoList from '../Components/Todo/TodoList';
import TodoInput from '../Components/Todo/TodoInput';
import { Layout } from '../Components/Layout';
import { Container } from '../styles/Containers/Container'
import Header from '../Components/Header/Header';

const Todo = () => {

    const route = useRouter();

    useEffect(() => {
        if (!sessionStorage.getItem('id')) {
            route.push('/');
        }
    }, []);

    return (
        <Layout>
            <TodoProvider>
                <Header />
                <Container>
                    <TodoInput />
                    <TodoList />
                </Container>
            </TodoProvider>
        </Layout>
    );
};

export default Todo;