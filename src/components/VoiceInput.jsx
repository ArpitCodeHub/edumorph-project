import React, { useState, useEffect } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Navbar from "./Navbar";
import Footer from "./Footer";

const VoiceInput = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  // Check browser support and microphone access
  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      setError("Speech recognition is not supported in your browser");
    }
    if (!isMicrophoneAvailable) {
      setError("Microphone access is required. Please enable microphone permissions.");
    }
  }, [browserSupportsSpeechRecognition, isMicrophoneAvailable]);

  const startListening = () => {
    resetTranscript();
    setError("");
    try {
      SpeechRecognition.startListening({
        language: selectedLanguage,
        continuous: true
      });
    } catch (err) {
      setError("Failed to access microphone");
    }
  };

  const handleStop = async () => {
    try {
      await SpeechRecognition.stopListening();
      if (!transcript.trim()) {
        setError("No speech detected. Please try again.");
        return;
      }

      setLoading(true);
      setResponse("");
      
      const { data } = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: `${transcript} (respond in ${selectedLanguage})` },
          ],
          model: "llama-3.3-70b-versatile",
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse = data.choices[0].message.content;
      setResponse(aiResponse);
      const utterance = new SpeechSynthesisUtterance(aiResponse);
      utterance.lang = selectedLanguage;
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      setError(err.response?.data?.error?.message || "Failed to process request");
    } finally {
      setLoading(false);
      resetTranscript();
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="text-gray-300 p-4 text-center">
        Your browser doesn't support speech recognition.
      </div>
    );
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-black p-4 md:p-6 text-gray-300 mt-36" id="fade-in2" >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 md:mb-8 text-center">
          🎙️ Voice Based Learning
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-900/30 text-red-400 rounded-lg">
            ⚠️ {error}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-center">
          <div className="w-full sm:w-auto">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full bg-black border-2 border-pink-600 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="en-US">English</option>
              <option value="es-ES">Spanish</option>
              <option value="fr-FR">French</option>
            </select>
          </div>

          <div className="flex gap-4 w-full sm:w-auto">
            <button
              onClick={startListening}
              disabled={!isMicrophoneAvailable || loading}
              className={`w-1/2 sm:w-auto px-6 py-2 rounded-lg font-medium transition-all ${
                SpeechRecognition.listening
                  ? "bg-pink-600/80 cursor-not-allowed"
                  : "bg-pink-600 hover:bg-pink-700"
              } text-white disabled:bg-gray-700 disabled:cursor-not-allowed`}
            >
              {SpeechRecognition.listening ? "🎤 Listening..." : "🎤 Start"}
            </button>

            <button
              onClick={handleStop}
              disabled={!transcript || loading}
              className="w-1/2 sm:w-auto px-6 py-2 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 disabled:bg-gray-700 disabled:cursor-not-allowed transition-all"
            >
              {loading ? "Processing..." : "✨ Ask"}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-2 border-pink-600 rounded-xl p-4 md:p-6">
            <h2 className="text-pink-600 font-semibold mb-2 md:mb-3 text-lg">
              Your Speech Input:
            </h2>
            <p className="whitespace-pre-wrap text-gray-300">
              {transcript || "Speak something to get started..."}
            </p>
          </div>

          <div className="border-2 border-blue-700 rounded-xl p-4 md:p-6">
            <h2 className="text-blue-600 font-semibold mb-2 md:mb-3 text-lg">
              Assistant Response:
            </h2>
            {loading ? (
              <div className="flex justify-center">
                <BeatLoader color="#db2777" size={15} />
              </div>
            ) : (
              <p className="whitespace-pre-wrap text-gray-300">
                {response || "Response will appear here..."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default VoiceInput;