import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-4 md:px-8 py-12 mt-28" id="fade-in2">
        <div className="max-w-5xl mx-auto bg-blue-700/10 border border-pink-600/20 rounded-3xl p-6 md:p-12 shadow-lg backdrop-blur-md">
          <h1 className="text-3xl md:text-5xl font-extrabold text-pink-600 mb-8 text-center uppercase tracking-wider">
            Privacy Policy
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to <span className="text-pink-600 font-semibold">EduMorph</span> — a next-gen AI-powered education tool revolutionizing learning through instant AI explanations, interactive tutoring, and adaptive experiences. Your privacy is important to us, and this policy outlines how we collect, use, and protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">2. Do We Collect Any Information ?</h2>
            <p>
            <strong className="text-pink-600">Important :  </strong>EduMorph does not collect or store any personal data from your interactions. 
               Any information shared with the AI is used **only at the moment of interaction** to generate an appropriate response and is not saved or reused.
               This ensures your learning remains private, secure, and ephemeral.
            </p>
            {/* <ul className="list-disc pl-6 space-y-2">
              <li>Personal details such as name, email, and academic preferences</li>
              <li>User interactions, feedback, and AI tutoring session data</li>
              <li>Technical data like device info, browser type, and usage patterns</li>
            </ul> */}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use your data to personalize your learning experience, provide instant explanations, improve platform performance, and maintain user safety. Our AI is powered by <span className="font-semibold text-pink-600">Groq & Hugging Face's ultra-fast AI inference</span> technology to ensure a real-time, responsive experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              Your data is completely safe with us. We do not sell or share your data .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">5. Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to access, update, or delete your personal information. You can contact us at any time regarding your privacy preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">6. Contact Us</h2>
            <p className="leading-relaxed">
              For questions about this Privacy Policy or your data, please contact us at <span className="text-pink-600 font-medium">contact@edumorph.com</span>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
