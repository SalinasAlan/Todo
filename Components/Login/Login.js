import app from '../../firebase';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { FormContainer } from '../../styles/Containers/Container';

const Login = () => {

    const [error, setError] = useState();
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
                setError(error.message);
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
                <p style={{ color: "#FF4832", margin: "0px" }}>{error}</p>
                <button type="submit">
                    Login
                </button>
            </form>
        </FormContainer>
    );
}

export default Login;