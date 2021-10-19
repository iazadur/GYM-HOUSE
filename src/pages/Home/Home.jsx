import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Service from '../../components/Service/Service';
import Shop from '../../components/Shop/Shop';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Service></Service>
            <Shop></Shop>
            <Footer></Footer>
        </div>
    );
};

export default Home;