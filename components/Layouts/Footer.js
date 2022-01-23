import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        return (
            <div className="lafin">
            <footer id='contact' className="footer-area bg-fffcf4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">

        
                                <ul className="contact-info">
                                    <h3>Information</h3>
                                    <li>
                                        <Link href="tel:0769773262">
                                            <a>07 69 77 32 62</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="mailto:kln.debarras@gmail.com"target='_blank' >kln.debarras@gmail.com</a>
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
                                        <a href="#features">
                                            <a>F.A.Q</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#testimonials">
                                            <a>Commentaires</a>
                                        </a>
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
                                        
                                            <a>Cher 18</a>
                                        
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

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">

        
                                <ul className="contact-info">
                                    <h3>Les valeurs de l'entreprise</h3>
                                    <li>
                                        <p className="valeurs">Kln-debarras est une entreprise éco-responsable par des gestes quotidiens "peinture, nettoyage, réparation", vos anciens meubles ou objets retrouve un nouveau foyer. </p>
                                    </li>
                                    <li>
                                        <p className="valeurs">Nous nous engageons aux côtés de l'association ligue contre le cancer à reverser 3% du chiffre d'affaires annuel.</p>
                                    </li>
                                    <li>
                                        <p style={{marginBottom: '1vh'}} className="valeurs">
                                        Tous ensemble pour un monde meilleur.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-2 col-sm-6">
                                <div className="lazone"><span id='logo-navbar' className='logo-title logo-sticky'>K.L.N Débarras</span>
                                      {/* <p></p> */}
                                    </div> 
                        
                        </div>
                        
                                

                        
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                        <p className="lazone1">
                                             kln-debarras.fr | 2020-2021 | Reproduction totale ou partielle strictement interdite sur tout support sans autorisation préalable.
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
