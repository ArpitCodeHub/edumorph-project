import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank You for Contacting Us! We'll get back to you soon.");
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={4000} />

      <Navbar />

      <div className="bg-gray-300 p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-32">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-blue-700 bg-clip-text text-transparent mb-4 text-center "> EduMorph</h2>

        <div className="space-y-2">
          <p className="text-lg font-bold text-pink-600">📍 Address:</p>
          <p className="text-blue-700 font-semibold"> New Delhi, India </p>

          <p className="text-lg font-bold text-pink-600">📞 Phone:</p>
          <p className="text-blue-700 font-semibold"> 011 2730 XXXX </p>

          <p className="text-lg font-bold text-pink-600">✉️ Email:</p>
          <p className="text-blue-700 font-semibold">contact@edumorph.com</p>
        </div>
      </div>
      <div className="mt-16 mb-10">
        <h2 className="text-pink-600 text-2xl font-bold mb-4 text-center">📩 Get in Touch</h2>
        <p className="text-gray-300 text-center mb-6">We'd love to hear from you !</p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-8 bg-gray-300 rounded-lg shadow-xl">
          <div>
            <label className="block text-blue-700 font-semibold mb-1">Your Name</label>
            <input 
              type="text"
              name="name"
              className="w-full p-3 rounded-lg"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-blue-700 font-semibold mb-1">Email Address</label>
            <input 
              type="email"
              name="email"
              className="w-full p-3 rounded-lg"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-blue-700 font-semibold mb-1">Message</label>
            <textarea 
              name="message"
              className="w-full p-3 rounded-lg"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-600 transition-all duration-300">
            📤 Send Message
          </button>
        </form>
      </div>

      <Footer className="fixed bottom-0"/>
    </div>
  );
};

export default ContactUs;