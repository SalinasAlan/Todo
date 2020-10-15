import app from '../../firebase';
import { useCallback, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { FormContainer } from '../../styles/Containers/Container';
import { AuthContext } from '../../Context/Auth';

const Login = () => {

    const [error, setError] = useState();
    const router = useRouter();

    const { currentUser, setUserId } = useContext(AuthContext);

    useEffect(() => {
        if (currentUser) {
            router.push('/todo');
        }
    }, [currentUser])

    const handleLogin = useCallback(
        async e => {
            e.preventDefault();
            const { email, password } = e.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                    .then(response => {
                        sessionStorage.setItem('id', `${response.user.uid}`);
                    });

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