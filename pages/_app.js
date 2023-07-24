import "@/styles/globals.css";
import "@/styles/fonts.css";

export default function App({ Component, pageProps }) {
    return (
        <main className="font-inter">
            <Component {...pageProps} />
        </main>
    );
}
