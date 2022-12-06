import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Agency/Banner';
import About from '../components/Agency/About';
import FeaturedCars from '../components/CarSubscription/FeaturedCars';
import Research from '../components/Agency/Research';
import villesInfos from '../utils/villes';
// import Testimonials from '../components/Agency/Testimonials';

const Index = (props) => {
        return (
            <>
                <Navbar  />
                <Banner {...props}/>
                <About />
                <Research />
                <FeaturedCars />
                {/* <Testimonials /> */}
                <Footer />
            </>
        );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { ville: [] } },
            ...villesInfos.map(ville => ({
                params: {ville: [ville.url]}
            }))
    ],
      fallback: false,
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context) {
    return {
      props: { ...context.params },
    }
  }

export default Index;
