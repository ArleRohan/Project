import React from 'react'
import FeatureProduct from '../FeatureProduct';
import HeroSection from '../HeroSection';

const Home = () => {
    const data = {
        name: "Local Store",
    };

    return (
        <>
            <HeroSection myData={data} />
            <FeatureProduct />
        </>
    );
};

export default Home
