import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PaymentProvider } from '../context/PaymentContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PaymentProvider>
            <Component {...pageProps} />
        </PaymentProvider>
    );
}

export default MyApp;
