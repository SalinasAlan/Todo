import app from '../../firebase';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { FormContainer } from '../../styles/Containers/Container';

const Login = () => {

    const router = useRouter();

    const handleLogin = useCallback(
        async e => {
            e.preventDefault();
            const { email, password } = e.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);

                router.push('/todo');
            } catch (error) {
                console.log(error.message);
            }
        }
    );

    return (
        <FormContainer>
            <h3>Login</h3>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" name="email" />
                <br />
                <input type="password" placeholder="password" name="password" />
                <br />
                <button type="submit">
                    Login
                </button>
            </form>
        </FormContainer>
    );
}

export default Login;