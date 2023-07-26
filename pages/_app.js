import "@/styles/globals.css";
import "@/styles/fonts.css";
import "rodal/lib/rodal.css";
import TeamModalProvider from "@/context/TeamModalProvider";

export default function App({ Component, pageProps }) {
    return (
        <main className="font-inter">
            <TeamModalProvider>
                <Component {...pageProps} />
            </TeamModalProvider>
        </main>
    );
}
