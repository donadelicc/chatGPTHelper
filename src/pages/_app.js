import '../../src/globals.css'
import { AuthProvider } from '../contexts/authDetails'; // Angi riktig sti til AuthContext
import { InstructionsProvider } from '../contexts/Global_Instructions'
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <InstructionsProvider>
        <Component {...pageProps} />
      </InstructionsProvider>
    </AuthProvider>
  );
}

export default MyApp;
