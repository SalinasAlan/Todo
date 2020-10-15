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
                <Message onClick={_ => setChangeForm(!changeForm)}>
                    {
                        changeForm ?
                            "Login here"
                            :
                            "Create an account here"
                    }
                </Message>
                <div style={{ "color": "#287299" }}>
                    <h4 style={{ "margin": "100px 0 0 0" }} > If you want to try it please enter</h4>
                    <p style={{ "margin": "0" }}>Email: test@test.com</p>
                    <p style={{ "margin": "0" }}>Password: Test1@</p>
                </div>
            </HomeContainer>
        </Layout>
    )
}

const Message = styled.a`
    cursor: pointer;
`;