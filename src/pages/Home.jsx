import React from 'react'
import Navbar from '../components/Navbar'
import Spline from '@splinetool/react-spline' ;
import Footer from '../components/Footer';
import FeatureCards from '../components/FeatureCards';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>

        <div className='spline-bg mt-56' id="fage-in">
            <Spline scene="https://prod.spline.design/n1-cRDA9M-i56DQ8/scene.splinecode" />
        </div>

        <Navbar />

        <HeroSection />

        <FeatureCards />

        <Footer />
    </div>
  )
}

export default Home