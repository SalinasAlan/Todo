import { useRouter } from 'next/router';
import { HeaderConstainer, Name, LogoutButton } from './style';
import app from '../../firebase';
import { UserName } from '../UserName';

const Header = () => {

    const router = useRouter();
    const userName = UserName();

    const handleLogout = () => {
        app.auth().signOut();
        sessionStorage.removeItem('id')
        router.push('/');
    }

    return (
        <HeaderConstainer>
            <Name>
                Hi! {userName}
            </Name>
            <LogoutButton onClick={handleLogout}>
                Logout
            </LogoutButton>
        </HeaderConstainer>
    );
}

export default Header;