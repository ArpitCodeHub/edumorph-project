import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./pages/Preloader";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import VoiceInput from "./components/VoiceInput";
import ImgUploader from "./components/ImgUploader";
import TextSummarizer from "./components/TextSummarizer";
import WebCamCapture from "./components/WebCamCapture";
import ChatBot from "./components/AiChatBot";

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <Router>
            {loading ? (
                <Preloader onFinish={() => setLoading(false)} />
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/voice-feature" element={<VoiceInput />} />
                    <Route path="/img-feature" element={<ImgUploader />} />
                    <Route path="/text-feature" element={<TextSummarizer />} />
                    <Route path="/webcam-feature" element={<WebCamCapture />} />
                    <Route path="/chatbot-feature" element={<ChatBot />} />
                </Routes>
            )}
        </Router>
    );
}

export default App;