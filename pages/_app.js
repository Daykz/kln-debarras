import '../public/css/bootstrap.min.css';
import '../public/css/animate.min.css';
import '../public/css/fontawesome.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import "react-sweet-progress/lib/style.css";
import '../public/css/style.css';
import '../public/css/responsive.css';

import villesInfos from '../utils/villes';
import App from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
  const ville = pageProps?.ville?.[0] || ''

  const title = ville ? `Débarras et déménagement à ${villesInfos.find((info) => info.url === ville).titre} - KLN Débarras` : `Débarras et déménagement dans votre région Centre - KLN Débarras`
  const canonical = `https://kln-debarras.fr/${ville}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": title,
    "image": [
        "https://kln-debarras.fr/images/1x1/principal2_1x1.jpg",
        "https://kln-debarras.fr/images/4x3/principal2_4x3.jpg",
        "https://kln-debarras.fr/images/16x9/principal2_16x9.jpg"
    ],
    "address":{
        "@type": "PostalAddress",
        "streetAddress": "Domaine Villetroche",
        "addressLocality": "Paudy",
        "addressRegion": "Centre-Val de Loire",
        "postalCode": "36260",
        "addressCountry": "FR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 47.036408,
        "longitude": 1.908068
      },
    "url": canonical,
    "telephone": "0769773262"
}
        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="keywords" content="Debarras, demenagement, encombrants" />
                    <link rel="canonical" href={canonical} />
                    
                    <title>{title}</title>
                    <meta
                    name="description"
                    content={`KLN débarras s'occupe de vos débarras, du tri des encombrants, et de les déposer en centre de tri. ${villesInfos.find((info) => info.url === ville)?.link || 'Débarras Centre'}. Devis gratuit.`}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                </Head>

                    <Component {...pageProps} />
            </>
        );
    }
}