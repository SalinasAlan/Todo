import app from '../../firebase';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

const SignUp = () => {

    const [error, setError] = useState();

    const router = useRouter();

    const handleSignUp = useCallback(
        async e => {
            e.preventDefault();
            const { email, password } = e.target.elements;
            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value);

                router.push('/todo')
            } catch (error) {
                setError(error.message);
            }
        }
    );

    return (
        <>
            <h3>SignUp</h3>
            <form onSubmit={handleSignUp}>
                <input type="email" placeholder="Email" name="email" />
                <br />
                <input type="password" placeholder="password" name="password" />
                <br />
                <p style={{ color: "red", margin: "0px" }}>{error}</p>
                <button type="submit">
                    SignUp
                </button>
            </form>
        </>
    );
}

export default SignUp;