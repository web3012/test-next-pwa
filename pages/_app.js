import React from 'react'
import Head from 'next/head'
import 'app/styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <title>Next.js PWA</title>

                <link rel="manifest" href="/manifest.json" />
                <link
                    href="/icon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/icon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                <meta name="theme-color" content="#317EFB" />
            </Head>
            <Component {...pageProps} />
        </React.Fragment>
    )
}