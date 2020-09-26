import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Todo App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Create your todo list and your friends 😁</h1>
            <Link href="/login">
                <a>Login</a>
            </Link>
        </>
    )
}