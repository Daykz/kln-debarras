import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section id="about" className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image-details">
                                <img src='/kln-debarras/images/grenier.jpg' alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content pl-15">
                                <h2 className="okok2">Tous les détails de notre service !</h2>
                                <p className="queseeso"><b>KLN débarras</b> est une entreprise <b>professionnelle</b> dédiée au service complet de <b>débarras d'habitation</b>.
                                <br />
                                Que ce soit pour un <b>vide maison</b>, une succession ou un <b>déménagement</b>, un départ en maison de retraite ou seulement vous faire gagner de la place, nous nous occupons du <b>débarras dans son intégralité</b> et dans tout le <b>Centre Val de Loire</b>.
                                <br/><br/>
                                <b>Laissez moi vous expliquer:</b>
                                <br />
                                Vous et votre famille emménagez dans une nouvelle maison et vous ne savez pas quoi faire de vos <b>anciens mobiliers</b> ? Le grenier de la maison parentale n'a pas été touché depuis les années 80 et vous êtes bien décidé à le vider une bonne fois pour toute ! Tout cela a l'air bien ennuyant. Il faudrait louer un camion, contacter des amis ou de la famille pour un peu d'aide. C'est là que <b>notre logistique</b> et <b>notre savoir</b> faire interviennent pour faire de cette corvée un mauvais souvenir. </p>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <img src='/kln-debarras/images/phone-call.png' alt="image" height="25px" width="25px" />
                                                </div>
                                                    <Link href="tel:0769773262">

                                                <h4 className="okok oklink">Appelez-nous !</h4>
                                                    </Link>
                                            </div>

                                            <p className="okok">Ou envoyez-nous un <b>e-mail</b> ou <b>sms</b>, on fait le point sur ce que vous voulez <b>débarrasser</b>, ce que vous voulez en faire et sous quel délai vous en avez besoin ! Une prise de <b>rdv rapide</b> sera effectuée.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <img src='/kln-debarras/images/document.png' alt="image" height="25px" width="25px" />
                                                </div>

                                                <h3 className="okok">Devis</h3>
                                            </div>

                                            <p className="okok">Avant d'intervenir pour votre <b>débarras</b>, nous réalisons un <b>devis gratuit</b> et sans engagement*, celui ci sera établi en fonction du volume à déblayer en mètre cube et des valeurs récupérables. </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <img src='images/cardboard.png' alt="images" width="25px" height="25px"/>
                                                </div>

                                                <h3 className="okok">Débarras</h3>
                                            </div>

                                            <p className="okok3">Le débarras pourra se faire dans <b>tout type d'habitation</b> ( appartement, maison, pavillon, ferme , loft, duplex, château, manoir et entreprise ). Le débarras concerne aussi <b>toutes vos pièces</b> (grenier, grange, cave, comble, garage et bureau).</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <img src="images/smiley.png" alt="images" width="25px" height="25px" />
                                                </div>

                                                <h4 className="okok">Satisfaction Client</h4>
                                            </div>

                                            <p className="okok3">Car pour nous <b>votre satisfaction</b> est primordiale nous nous engageons à effectuer un travail correspondant à vos attentes dans les <b>meilleurs délais</b>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        );
    }
}

export default About;
