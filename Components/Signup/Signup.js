import app from '../../firebase';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { FormContainer } from '../../styles/Containers/Container';

const SignUp = () => {

    const [error, setError] = useState();

    const router = useRouter();

    const handleSignUp = useCallback(
        async e => {
            e.preventDefault();
            const { name, email, password } = e.target.elements;
            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value)
                    .then((response) => {
                        const uid = response.user.uid;
                        const data = {
                            id: uid,
                            name: name.value,
                            email: email.value,
                        };

                        const userCollection = app
                            .firestore()
                            .collection('users');

                        userCollection
                            .doc(uid)
                            .set(data)
                            .then(() => {
                                router.push('/todo')
                            })
                            .catch(error => {
                                setError(error.message);
                                console.log("Error: ", error);
                            });
                    })
            } catch (error) {
                setError(error.message);
            }
        }
    );

    return (
        <FormContainer>
            <h3>SignUp</h3>
            <form onSubmit={handleSignUp}>
                <input type="text" placeholder="Name" name="name" />
                <br />
                <input type="email" placeholder="Email" name="email" />
                <br />
                <input type="password" placeholder="Password" name="password" />
                <br />
                <p style={{ color: "#FF4832", margin: "0px" }}>{error}</p>
                <button type="submit">
                    SignUp
                </button>
            </form>
        </FormContainer>
    );
}

export default SignUp;