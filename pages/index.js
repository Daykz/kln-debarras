import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Agency/Banner';
import About from '../components/Agency/About';
import Research from '../components/Agency/Research';
import Cta from '../components/Agency/Cta';
import Testimonials from '../components/Agency/Testimonials';

class Index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Banner />
                <About />
                <Research />
                <Cta />
                <Testimonials />
                <Footer />
            </>
        );
    }
}

export default Index;
