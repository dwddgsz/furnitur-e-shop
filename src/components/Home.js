import React from 'react'
import Hero from './Hero';
import ProductsList from './ProductsList';
import Footer from './Footer';


const Home = () => {
    return (
        <React.Fragment>
            <Hero />
            <ProductsList />
            <Footer />
        </React.Fragment>
    )
}

export default Home;