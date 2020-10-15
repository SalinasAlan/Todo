import '../styles/globals.css'
import { AuthProvider } from '../Context/Auth';

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}

export default MyApp
