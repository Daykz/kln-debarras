import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';

class Cta extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };


    render() {
        return (
            <>
                <section className="cta-area ptb-100 jarallax pb-0">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Donations</h2>
                            <p>Voici les organismes les plus célèbres pour la récupération d'objet, nous travaillons avec eux depuis un certain temps. Si vous en avez d'autres à proposer, n'hésitez surtout pas !</p>
                        </div>

                        <div className="cta-inner-content">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-cta-box">
                                    <img src='/images/emmaus.png' alt="image" />
                                        <h3>Emmaus</h3>
                                        <p>Fidèle à la volonté de l'abbé Pierre, Emmaüs est devenu à la fois une fabrique d'innovations sociales et de solidarités pour aider des publics en situation de grande précarité, et un front engagé et militant en faveur d'une société plus humaine et plus juste.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-cta-box">
                                    <img src='/images/secours-populaire.png' alt="image" />
                                        <h3>Secours Populaire</h3>
                                        <p>Le Secours populaire français a une approche globale des problématiques de pauvreté. Il intervient dans les domaines de l'aide alimentaire, vestimentaire, l'accès et le maintien dans le logement, l'accès aux soins, l'insertion socioprofessionnelle, l'accès à la culture et plus généralement l'accès aux droits.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default Cta;
