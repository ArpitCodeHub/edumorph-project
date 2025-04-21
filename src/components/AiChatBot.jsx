import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AiChatBot = () => {
  return (
    <div>
      <Navbar />
      <div className="chatbot-content">
        {/* Your existing chatbot content goes here */}
      </div>
      <Footer />
    </div>
  );
};

export default AiChatBot;