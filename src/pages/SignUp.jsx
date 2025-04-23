import React from "react";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";

const SignUp = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Signed Up Successfully !");
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={4000} />
      <Navbar />
      <div className="min-h-screen bg-black flex justify-center items-center px-4 sm:px-8" id="fade-in">
        <div className="max-w-md w-full bg-gradient-to-r from-pink-600 to-blue-700 text-gray-300 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-300 text-center mb-6">🔐 Sign Up</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>

          <div>
              <label className="block text-black font-semibold mb-1 text-xl">Name</label>
              <input 
                type="name"
                className="w-full p-3 rounded-lg bg-gray-300 text-gray-900 focus:ring-2 focus:ring-pink-600"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-black font-semibold mb-1 text-xl">Email Address</label>
              <input 
                type="email"
                className="w-full p-3 rounded-lg bg-gray-300 text-gray-900 focus:ring-2 focus:ring-pink-600"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-black font-semibold mb-1 text-xl">Password</label>
              <input 
                type="password"
                className="w-full p-3 rounded-lg bg-gray-300 text-gray-900 focus:ring-2 focus:ring-pink-600"
                placeholder="Enter your password"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition-all duration-300"
              >
              🔑 Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;