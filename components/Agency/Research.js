import React, { Component } from 'react';

class Research extends Component {
    render() {
        return (
        <div className="teste">      
            <section className="ux-research-process ptb-100">
                <div className="container">
                <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="research-process-image">
                                <img src='/images/bourbier.jpg' alt="image" />
                            </div>
                        </div>

                        <div id="Question" className="col-lg-6 col-md-12">
                            <div className="research-process-content pl-15">
                                <h2>Les questions habituelles</h2>
                                <p>Petit florilège des questions que l'on nous pose habituellement !</p>

                                <div className="single-process">
                                    <h3>Localisation ?</h3>
                                    <p>Notre zone d'activité s'étend dans toute la <b>région Centre</b>, <b>Indre 36</b> (Châteauroux, Issoudun, La Chatre...), <b>Loir et Cher 41</b> (Saint Aignan, Montrichard, Blois, Romorantin...), <b>Loiret 45</b> (Orléans, Olivet, Giens...), <b>Cher 18</b> (Bourges, Vierzon, Saint-Montrond...), <b>Indre et Loire 37</b> (Tours, Amboise, Saint-Cyr...), et également dans <b>l'Allier 03</b> (Montluçon, Vichy...). </p>
                                </div>
                                <div className="single-process">
                                    <h3>Y'a t'il une limite à ce que vous pouvez débarrasser ?</h3>
                                    <p>Que ce soit de vieux meubles, un tas de débris, de la ferraille, de l'électroménager, un simple grenier ou un immense château. Que ce soit en termes d'objets récupérables/ encombrants ou en termes de surface <b>nous nous occupons de tout</b>. Sauf matériaux de construction (amiantes).</p>
                                </div>

                                <div className="single-process">
                                    <h3>Que faites-vous des encombrants ensuite ? </h3>

                                    <p>Ce qui n'est plus en état de fonctionner est <b>trié et envoyé à la déchetterie</b>. Ce qui peut resservir est revendu lorsque c'est possible sinon <b>donné à un organisme social</b> ou à des <b>entreprises solidaires du type Emmaüs</b>.</p>
                                </div>

                                <div className="single-process">
                                    <h3>Sous quel délai intervenez-vous ?</h3>
                                    <p>C'est vous qui décidez ! Nous vous demandons quand même de nous prévenir au moins 24 heures en avance pour des raisons évidentes de planning. Si jamais c'est une urgence devant être faite dans la journée, nous ferons tout de même <b>le maximum</b> pour y répondre.</p>
                                </div>

                                <div className="single-process">
                                    <h3>Logistique</h3>
                                    <p className="sauteca">Disposant d'une flotte de <b>3 camions</b>, le débarras sera effectué par une <b>équipe de professionnels respectant l'environnement de votre habitation</b> et à l'aide de notre <b>matériel adapté</b>. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default Research;
