import React, { Component } from 'react';

class Research extends Component {
    render() {
        return (
            <section className="ux-research-process ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="research-process-image">
                                <img src='/images/bourbier.jpg' alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="research-process-content pl-15">
                                <h2>Les questions habituelles</h2>
                                <p>Petit florilège des questions que l'on nous pose habituellement !</p>

                                <div className="single-process">
                                    <span>1</span>
                                    <h3>Localisation ?</h3>
                                    <p>Vous pouvez nous retrouver dans toute la <b>région Centre</b>; dans <strong>l'Indre et loire</strong> (37, Tours, Saint Cyr, Amboise...), <strong>l'Indre</strong> (36, Chateauroux, Issoudin...), <strong>Loir-et-Cher</strong> (41, Blois, Romorantin...), <strong>Loiret</strong> (45, Orléans, Gien...), <strong>Eure</strong> (18, Bourge, Vierzon...), <strong>l'Allier</strong> (03, Montlucon, Vichy...)</p>
                                </div>
                                <div className="single-process">
                                    <span>2</span>
                                    <h3>Y a t il une limite a ce que vous pouvez débarasser ?</h3>
                                    <p>Que ce soit de <b>vieux meubles</b> ou un <b>tas de débris</b>, plusieurs <b>piles de cartons vides</b> ou de <b>l'electroménager</b>, un <b>simple grenier</b> ou un <b>immense chateau</b> : Que ce soit en terme <b>d'objets récupérables/emcombrants</b> ou en terme de <b>surface</b> nous nous <b>occupons de tout.</b></p>
                                </div>

                                <div className="single-process">
                                    <span>3</span>
                                    <h3>Que faites vous des emcombrants ensuite ?</h3>

                                    <p>Ce qui n'est plus en êtat de fonctionner est <b>trié et envoyé à la déchetterie</b>, si c'est un produit très précis nous pouvons également l'emmener dans une société spécialisé. Ce qui peut <b>resservir</b> est <b>revendu</b> quand c'est possible, sinon <b>donner à un organisme social</b> ou à des <b>entreprises</b> solidaires du type Emmaus. </p>
                                </div>

                                <div className="single-process">
                                    <span>4</span>
                                    <h3>Sous quel délai intervenez vous ?</h3>
                                    <p><b>C'est vous qui décidez !</b> Nous vous demandons quand même de nous prévenir <b>au moins 24 heures en avance</b> pour des raisons evidentes de planning. Si jamais c'est une <b>urgence</b> devant être fait dans la journéee, nous ferons tout de même <b>le maximum pour y répondre.</b></p>
                                </div>

                                <div className="single-process">
                                    <h3>Devis</h3>
                                    <p>Avant d'intervenir pour votre débarras, nous réalisons un <strong>devis gratuit et sans engagement*</strong>. Celui ci sera établi en fonction du <b>volume à déblayer en mètre cube</b> et des <strong>valeurs récupérables</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Research;
