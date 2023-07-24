import "@/styles/globals.css";
import "@/styles/fonts.css";
import localFont from "next/font/local";

// const konnect = localFont({
//     src: [
//         {
//             path: "../public/fonts/konnect_normal.woff2",
//             weight: "400",
//             style: "normal",
//         },

//         {
//             path: "../public/fonts/konnect _medium.woff2",
//             weight: "500",
//             style: "normal",
//         },

//         {
//             path: "../public/fonts/konnect _semibold.woff2",
//             weight: "600",
//             style: "normal",
//         },
//     ],

//     variable: "--font-konnect",
// });

export default function App({ Component, pageProps }) {
    return (
        <main>
            <Component {...pageProps} />
        </main>
    );
}
