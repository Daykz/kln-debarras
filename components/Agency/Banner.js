import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class Banner extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };
    
    render() {
        return (
            <>
                <div id="home" className="main-banner">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content">
                                    <h1>Le meilleur service de débarras de la région centre !</h1>
                                    <p>Découvrez dès maintenant notre équipe, nos méthodes de travail et jusqu'a ou vous pouvez profiter de nos services !</p>
                                    
                                    <div className="btn-box">
                                        <Link href="#contact">
                                            <a className="btn btn-primary">Contactez-nous !</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
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

export default Banner;
