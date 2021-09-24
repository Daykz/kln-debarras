import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
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

class FeaturedCars extends Component {
    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <div class="sauteca">
            <section className="featured-cars ptb-100 bg-f5fbff">
                        <div class="teste2">
                <div className="container">
                    <div className="car-subscription-section-title">
                        {/* <span>Portfolio</span> */}
                        <h2>Un petit exemple de nos travaux passés</h2>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="featured-cars-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-featured-cars">
                                    <img src="/kln-debarras/images/cata1.jpg" alt="cars" />

                                    <div className="featured-cars-content">
                                        <span>Avant</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-featured-cars">
                                    <img src="/kln-debarras/images/cata5.jpg" alt="cars" />

                                    <div className="featured-cars-content">
                                        <span>Après</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-featured-cars">
                                    <img src="/kln-debarras/images/cata2.jpg" alt="cars" />

                                    <div className="featured-cars-content">
                                        <span>Avant</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-featured-cars">
                                    <img src="/kln-debarras/images/cata6.jpg" alt="cars" />

                                    <div className="featured-cars-content">
                                        <span>Après</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-featured-cars">
                                    <img src="/kln-debarras/images/cata8.jpg" alt="cars" />

                                    <div className="featured-cars-content">
                                        <span>Avant</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-featured-cars">
                                    <img src="/kln-debarras/images/cata3.jpg" alt="cars" />

                                    <div className="featured-cars-content">
                                        <span>Après</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-featured-cars">
                                    <img src="/kln-debarras/images/cata7.jpg" alt="cars" />

                                    <div className="featured-cars-content">
                                        <span>Avant</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-featured-cars">
                                    <img src="/kln-debarras/images/cata4.jpg" alt="cars" />

                                    <div className="featured-cars-content">
                                        <span>Après</span>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
                </div>
            </section>
            </div>
        );
    }
}

export default FeaturedCars;
