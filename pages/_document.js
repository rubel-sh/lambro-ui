import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/assets/img/favicon.png" />
                <title>Lambro.io</title>
                <meta name="description" content="Lambro.io" />
                <meta name="keywords" content="Lambro.io" />
                <meta name="author" content="Lambro.io" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#000000" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="msapplication-TileImage" content="/assets/img/favicon.png" />
                <meta name="msapplication-config" content="/assets/img/favicon.png" />
                <meta name="apple-mobile-web-app-title" content="Lambro.io" />
                <meta name="application-name" content="Lambro.io" />
                <meta name="msapplication-tooltip" content="Lambro.io" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
                <meta name="apple-mobile-web-app-title" content="Lambro.io" />
                <meta name="format-detection" content="telephone=no" />
                <meta property="og:title" content="Lambro.io" />
            </Head>
            <body className="bg-gray-950">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
