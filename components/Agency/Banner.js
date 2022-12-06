import React from 'react';
import Link from 'next/link';
import villesInfos from '../../utils/villes';

const Banner = (props) => {
    const ville = props?.ville?.[0]
        return (
            <>
                <div id="home" className="main-banner">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content">
                                    <h1>{ville ? `Le service de débarras à ${villesInfos.find((info) => info.url === ville).titre}` : `Le service au Centre de vos débarras`}</h1>
                                    <p>Devis gratuit et sans engagement. Plus d'informations juste en dessous !</p>
                                    
                                    <div className="btn-box">
                                        <Link href="tel:0769773262">
                                            <a className="btn btn-primary">07 69 77 32 62</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default Banner;
