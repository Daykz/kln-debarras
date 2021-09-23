import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items:1,
        },
        768: {
            items:2,
        },
        1200: {
            items:3,
        }
    }
}

class Testimonials extends Component {

    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section id="testimonials" className="feedback-area ptb-100">
                <div className="teste3">
                <div className="container">
                    <div className="section-title">
                        <h4>Le retour de nos clients</h4>
                        <p>Autant vous le demander directement ! Voici un petit échantillon de ce que vous avez pensé de nous !</p>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="feedback-item">
                                    <img src='/images/client1.png' alt="client" />
                                    <p>équipe très sympathique et efficace, ma nièce me les a conseillé et c'est bien la seule fois qu'elle a été de bon conseil lol</p>

                                    <div className="client-info">
                                        <h4>Martine Daveu</h4>
                                        <span>Loir-et-Cher (41)</span>
                                    </div>

                                    <i className="fas fa-quote-left"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="feedback-item">
                                    <img src='../../images/client2.png' alt="client" />
                                    <p>Un crew diablement efficace en plus d'être très drôle. C'est limite si j'ai passé un bon moment à vider la maison familial... Je recommande fortement !</p>

                                    <div className="client-info">
                                        <h4>Thibault Garez</h4>
                                        <span>Indre et Loire (37)</span>
                                    </div>

                                    <i className="fas fa-quote-left"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="feedback-item">
                                    <img src='../../images/client3.png' alt="client" />
                                    <p>equipe gentille . du bon travail de fait . mrci beaucoup .</p>

                                    <div className="client-info">
                                        <h4>David W.</h4>
                                        <span>Eure (18)</span>
                                    </div>

                                    <i className="fas fa-quote-left"></i>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;
