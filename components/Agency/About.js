import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about" className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src='/images/grenier.jpg' alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content pl-15">
                                <h2 class="okok2">Tous les détails de notre service !</h2>
                                <p class="queseeso"><b>KLN débarras</b> est un service professionel specialisé dans le débarassage. Que ce soit pour un <strong>vide-maison</strong> ou simplement votre <strong>grenier</strong>, votre <strong>appartement</strong> en plein centre ville d'Orléans ou votre <strong>villa</strong> aux alentours de Tours <b>nous sommes la pour faire de cette corvé un simple mauvais souvenir</b>.<br/><br/> Laissez moi vous expliquez : Vous venez de refaire votre salon et vous ne savez pas quoi faire du vieux canapé ? Vous et votre famille emmenagés dans votre nouvelle maison, une fois installé que faire de tout ces cartons ? Le grenier de la maison parentale n'a pas été touché depuis les années 80 et vous etes bien décidé à le vider une bonne fois pour toute ?<br/> <b>Tout cela à l'air bien ennuyant.</b> Il faudrait louer un camion, contacter des amis ou de la famille pour un peu d'aide... <strong>Ou faire appel à des spécialistes</strong>.</p>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <img src='/images/phone-call.png' alt="image" height="25px" width="25px" />
                                                </div>

                                                <h3 class="okok">Appelez-nous !</h3>
                                            </div>

                                            <p class="okok">Ou envoyez nous un émail, un sms... On fait le point sur ce que vous voulez débarasser, ce que vous voulez en faire et sous quel délai vous en avez besoin ! </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <img src='/images/document.png' alt="image" height="25px" width="25px" />
                                                </div>

                                                <h3 class="okok">Devis</h3>
                                            </div>

                                            <p class="okok">Suite aux informations que vous nous transmettrez, nous serons en mesure de vous fournir un devis gratuit et sans engagement.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <img src='images/cardboard.png' alt="images" width="25px" height="25px"/>
                                                </div>

                                                <h3 class="okok">débarras</h3>
                                            </div>

                                            <p class="okok3">Toujours à l'heure, nous arriverons pour vider et trier les emcombrants : tout ce qui doit être jeter sera emmené en déchéterie, ce qui est encore utilisable sera soit vendu soit donner a des associations.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-inner-content">
                                            <div className="title">
                                                <div className="icon">
                                                    <img src="images/smiley.png" alt="images" width="25px" height="25px" />
                                                </div>

                                                <h3 class="okok">Satisfaction Client</h3>
                                            </div>

                                            <p class="okok3">Votre satisfaction est primordiale, nous nous engageons à effectuer un travail correspondant à vos attentes dans les plus bref delais</p>
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
