import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=G-QZB76L0E5R`}
                />
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-QZB76L0E5R', {
                    page_path: window.location.pathname,
                    });
                `,
                    }}
                />
                    <link rel="icon" type="image/png" href="/images/favicon.ico"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;