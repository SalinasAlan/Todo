import Head from 'next/head';
import styled from 'styled-components';
import { Layout } from '../Components/Layout';
import { HomeContainer } from '../styles/Containers/Container';
import Login from '../Components/Login/Login';
import SignUp from '../Components/Signup/Signup'
import { useState } from 'react';

export default function Home() {
    const [changeForm, setChangeForm] = useState(false);

    return (
        <Layout>
            <Head>
                <title>Todo App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeContainer>
                <h1>Create your todo list 😁</h1>
                {
                    changeForm ?
                        <SignUp />
                        :
                        <Login />
                }
                <Message onClick={ _ => setChangeForm(!changeForm)}>
                    {
                        changeForm ?
                            "Login here"
                            :
                            "Create an account here"
                    }
                </Message>
            </HomeContainer>
        </Layout>
    )
}

const Message = styled.a`
    cursor: pointer;
`;