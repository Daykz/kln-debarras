import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area bg-fffcf4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-footer-widget">

        
                                <ul className="contact-info">
                                    <li>Une adresse que je n'ai pas encore</li>
                                    <li>
                                        <Link href="tel:0769773262">
                                            <a>07 69 77 32 62</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="mailto:klm.debarras@gmail.com">
                                            <a>klm.debarras@gmail.com</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>kln-debarras.fr</a>
                                        </Link>
                                    </li>
                                    <li>0000000</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <div className="single-footer-widget pl-3">
                                <h3>Lien rapide</h3>
        
                                <ul className="list">
                                    <li>
                                        <Link href="#">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#about">
                                            <a>En profondeur</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#features">
                                            <a>F.A.Q</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#testimonials">
                                            <a>Commentaires</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#contact">
                                            <a>Nous contactez</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-7">
                                <p><i className="far fa-copyright"></i> 2021 KLN-Debarras. Tout droit réservé.</p>
                            </div>

                            
                        </div>
                    </div>
                </div>

                <div className="map2">
                    <img src='/images/map2.png' alt="map" />
                </div>
            </footer>
        );
    }
}

export default Footer;
