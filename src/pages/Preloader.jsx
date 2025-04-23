import Spline from '@splinetool/react-spline' ;
import React, { useState, useEffect } from "react";
import "../styles/Preloader.css";

const Preloader = ({ onFinish }) => {
    useEffect(() => {
        setTimeout(() => {
            onFinish();
        }, 6500);
    }, []);

    return (
        <div className="my-5 mx-3 text-center">
            <h1 id="fade-in" className='text-4xl font-bold bg-gradient-to-r from-pink-600 to-gray-300 bg-clip-text text-transparent inline-block'> EduMorph </h1>
            <br />
            <h5 id="fade-in2" className='text-2xl bg-gradient-to-l from-blue-700 to-gray-300 bg-clip-text text-transparent inline-block'>Empowering Education with Ai</h5>

            <Spline scene="https://prod.spline.design/kqplb9pto6eFAsEg/scene.splinecode" />

        </div>
    );
};

export default Preloader;
 