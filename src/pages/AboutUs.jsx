import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-gray-300 px-4 sm:px-8 py-10 sm:py-16 mt-16" id="fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-4 sm:mb-6">🚀 Welcome to EduMorph</h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            EduMorph is a **next-gen AI-powered education tool** revolutionizing learning through **instant AI explanations, interactive tutoring, and adaptive experiences**, powered by **Groq’s ultra-fast AI inference**.
          </p>
        </div>

        {/* Features Section (Gradient Background) */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-pink-600 to-blue-700 text-gray-300 rounded-lg shadow-xl p-4 sm:p-8" id="fade-in2">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 text-center">🔹 Key Features</h2>
          <ul className="grid gap-3 sm:gap-4">
            <li>🎙️ **Voice-Based Learning** – Ask questions via voice & get AI-generated explanations.</li>
            <li>📸 **Image Recognition** – Upload images for **real-time AI explanations & visual learning aids**.</li>
            <li>📚 **Adaptive AI Tutoring** – Personalized recommendations, quizzes & interactive simulations.</li>
            <li>🌍 **Multilingual Support** – Instant translations & AI-powered voice narration.</li>
            <li>📝 **AI-Powered Summarization** – Upload documents & get instant summaries.</li>
          </ul>
        </div>

        {/* Use Case Scenarios (Gradient Background) */}
        <div className="max-w-3xl mx-auto mt-6 sm:mt-10 p-4 sm:p-8 bg-gradient-to-r from-pink-600 to-blue-700 text-gray-300 rounded-lg shadow-lg" id="fade-in2">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 text-center">🔹 Use Case Scenarios</h2>
          <ul className="grid gap-2 sm:gap-3">
            <li>✅ Students using AI for **interactive tutoring**.</li>
            <li>✅ Educators leveraging AI for **instant content generation**.</li>
            <li>✅ Researchers accessing **real-time summaries of academic papers**.</li>
            <li>✅ Multilingual learners benefiting from **translation & narration**.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;