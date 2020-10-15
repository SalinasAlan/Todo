import { useEffect, useState } from 'react';
import app from '../firebase';

export const UserName = () => {
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        app.
            firestore()
            .collection('users')
            .doc(`${sessionStorage.getItem('id')}`)
            .get()
            .then(doc => {
                if (doc.exists) {
                    setUserName(doc.data().name);
                }
            });
    }, [])

    return userName;
}