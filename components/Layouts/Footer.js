import React, { Component } from 'react';
import Link from 'next/link';
import villesInfos from '../../utils/villes';

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
                                    <h3>Informations</h3>
                                    <li>
                                        <Link href="tel:0769773262">
                                            <a>07 69 77 32 62</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="mailto:kln.debarras@gmail.com"target='_blank'>kln.debarras@gmail.com</a>
                                    </li>
                                    <li>
                                        <a href="kln-debarras.fr" target='_blank' >kln-debarras.fr</a>
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
                                            Débarras
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#about">
                                            En profondeur
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#features">
                                            F.A.Q
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#testimonials">
                                            Commentaires
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Nous contactez
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <div className="single-footer-widget pl-3">
                                <h3 className="svplaissezmoi">Disponibilité</h3>
                                <ul className="list">
                                    {villesInfos.map(ville => (

                                        <li  key={ville.url}>
                                        <Link href={ville.url}>{ville.link}</Link>
                                        </li>
                                    ))}
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
                                    {/* <li>
                                        <p style={{marginBottom: '1vh'}} className="valeurs">
                                        Tous ensemble pour un monde meilleur.
                                        </p>
                                    </li> */}
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
