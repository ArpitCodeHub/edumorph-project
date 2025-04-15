import React from 'react'
import Navbar from '../components/Navbar'
import Spline from '@splinetool/react-spline' ;
import Footer from '../components/Footer';
import FeatureCards from '../components/FeatureCards';

const Home = () => {
  return (
    <div>

        <div className='spline-bg' id="fage-in">
            <Spline scene="https://prod.spline.design/n1-cRDA9M-i56DQ8/scene.splinecode" />
        </div>

        <Navbar />

        <FeatureCards />

        <Footer />
    </div>
  )
}

export default Home