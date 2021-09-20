import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        return (
            <div className="lafin">
            <footer className="footer-area bg-fffcf4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-footer-widget">

        
                                <ul className="contact-info">
                                    <h3>Information</h3>
                                    <li>
                                        <Link href="tel:0769773262">
                                            <a>07 69 77 32 62</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="mailto:klm.debarras@gmail.com"target='_blank' >klm.debarras@gmail.com</a>
                                    </li>
                                    <li>
                                        <a href="kln-debarras.vercel.app" target='_blank' >kln-debarras.vercel.app</a>
                                    </li>
                                    <li>78995213200031</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-2 col-sm-6">
                            <div className="single-footer-widget pl-3">
                                <h3 className="svplaissezmoi">Lien Rapide</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="#">
                                            <a className="lafinx">Home</a>
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
                                        <Link href="#">
                                            <a>Nous contactez</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <div className="single-footer-widget pl-3">
                                <h3 className="svplaissezmoi">Disponibilité</h3>
                                <ul className="list">
                                    <li>
                                        
                                            <a className="lafinx">Allier 03</a>
                                        
                                    </li>
                                    <li>
                                        
                                            <a>Eure 18</a>
                                        
                                    </li>
                                    <li>
                                        
                                            <a>Indre 36</a>
                                        
                                    </li>
                                    <li>
                                        
                                            <a>Indre et Loire 37</a>
                                        
                                    </li>
                                    <li>
                                        
                                            <a>Loir et Cher 41</a>
                                        
                                    </li>
                                    <li>
                                        
                                            <a>Loiret 45</a>
                                        
                                    </li>
                                </ul>
                                </div>
                        </div>
                        
                        <div className="col-lg-2 col-sm-6">
                                <div className="lazone"><span id='logo-navbar' className='logo-title logo-sticky'>K.L.N Débarras</span>
                                      
                                    </div> 
                        
                        </div>
                        
                                

                        
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                        <p className="lazone1">
                                             kln-débarras.fr | 2020-2021 | Reproduction totale ou partielle strictement interdite sur tout support sans autorisation préalable.
                                        </p>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        );
    }
}

export default Footer;
