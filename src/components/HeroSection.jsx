import React from 'react'

const HeroSection = () => {
  return (
    <>
        <div className='hero-sec flex justify-around mt-32 px-5 py-5 z-10'>
            <div className='mt-20 px-3 py-3 w-1/2 shadow-lg justify-center text-center' id="slide-right">
              <h1 className='text-5xl font-bold bg-gradient-to-r from-pink-600 to-gray-300 bg-clip-text text-transparent text-center rounded-xl inline-block shadow-sm shadow-pink-500 px-3 py-5'> EduMorph </h1>
              <br /><br />
              <h1 className='text-2xl font-bold bg-gradient-to-r from-gray-300 to-blue-600 bg-clip-text text-transparent text-center inline-block' id="punchLine">" Revolutionizing learning with intelligence — where AI meets curiosity & knowledge knows no bounds. "</h1>
            </div>
            <div className=' w-1/2 px-3 mx-3 ' id="slide-left">
                <img src="https://img.freepik.com/free-photo/3d-cartoon-back-school_23-2151676615.jpg?t=st=1744901110~exp=1744904710~hmac=b8b2c7d3bc7bd7afae3f87b3bc4cf20c2ec0041f616b456dfa4b9bfce0f6ded6&w=996" alt="hero-img" className='rounded-xl w-3/4 h-5/6 text-right' id="hero-img"/>
            </div>
        </div>
    </>
  )
}

export default HeroSection