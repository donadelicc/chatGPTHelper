import '../../src/globals.css'
import { AuthProvider } from '../contexts/authDetails'; // Angi riktig sti til AuthContext

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
