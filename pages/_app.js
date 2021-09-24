import '../public/css/bootstrap.min.css';
import '../public/css/animate.min.css';
import '../public/css/fontawesome.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import "react-sweet-progress/lib/style.css";
import '../public/css/style.css';
import '../public/css/responsive.css';

import { Preloader, Placeholder } from 'react-preloading-screen';
import App from 'next/app';
import Head from 'next/head';
import Loader from '../components/Layouts/Loader';

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="keywords" content="Débarras, déménagement, encombrants" />
                    <link rel="canonical" href="http://www.kln-debarras.fr" />
                    
                    <title>Débarras et déménagement dans votre région Centre</title>
                    <meta
                    name="description"
                    content="KLN débarras s'occupe de vos débarras, du tri des encombrants, et de les déposer en centre de tri. Devis gratuit."
                    />
                    <script type="application/ld+json">
                        {
                            {
                                "@context": "https://kln-debarras.fr",
                                "@type": "LocalBusiness",
                                "@name": "KLN Debarras",
                                "adress":{
                                    "@type": "PostalAddress",
                                    "streetAddress": "12 Rue de la Paix",
                                    "addressLocality": "Issoudun",
                                    "addressRegion": "Indre",
                                    "postalCode": "36100",
                                    "addressCountry": "FR"
                                },
                            
                                "review":{
                                    "@type": "review",
                                    "reviewRating": {
                                        "@type": "rating",
                                        "ratingValue": "4",
                                        "bestRating": "5"
                                    }
                                },
                            
                                "url": "http://kln-debarras.fr",
                                "telephone": "0769773262",
                            }
                        }    
                    </script>
                </Head>

                <Preloader>
                    <Component {...pageProps} />
                    <Placeholder>
                        <Loader />
                    </Placeholder>
                </Preloader>
            </>
        );
    }
}