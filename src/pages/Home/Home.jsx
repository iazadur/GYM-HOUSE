import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Service from '../../components/Service/Service';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;