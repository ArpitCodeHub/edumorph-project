import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { askGroqAI } from "../services/groqAPI";
import jsPDF from "jspdf";

const VoiceInput = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");

  const supportedLanguages = [
    { code: "en-US", name: "English (US)" },
    { code: "hi-IN", name: "Hindi" },
    { code: "es-ES", name: "Spanish" },
    { code: "fr-FR", name: "French" },
    { code: "de-DE", name: "German" },
    { code: "it-IT", name: "Italian" },
    { code: "ja-JP", name: "Japanese" },
    { code: "pt-BR", name: "Portuguese (Brazil)" },
    { code: "zh-CN", name: "Chinese (Simplified)" },
  ];

  const startListening = () => {
    if (!listening) {
      SpeechRecognition.startListening({
        continuous: true,
        language: selectedLanguage,
      });
    }
  };

  const readAloud = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = selectedLanguage;
    window.speechSynthesis.speak(speech);
  };

  const handleStop = async () => {
    SpeechRecognition.stopListening();
    setLoading(true);
    const aiResponse = await askGroqAI(transcript, selectedLanguage);
    setResponse(aiResponse);
    readAloud(aiResponse);
    setLoading(false);
    saveToHistory(transcript, aiResponse);
  };

  const saveToHistory = (transcript, response) => {
    const history = JSON.parse(localStorage.getItem("ai-history")) || [];
    history.push({ transcript, response });
    localStorage.setItem("ai-history", JSON.stringify(history));
  };

  const saveAsPDF = (response) => {
    const doc = new jsPDF();
    doc.text(response, 10, 10);
    doc.save("ai-response.pdf");
  };

  const handleReset = () => {
    resetTranscript();
    setResponse("");
    window.speechSynthesis.cancel();
    SpeechRecognition.stopListening();
  };

  useEffect(() => {
    if (listening) {
      console.log("Listening...");
    } else {
      console.log("Not listening");
    }
  }, [listening]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0114] to-[#1a0b2e] text-white font-sans flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-2xl font-bold text-purple-400 mb-4 drop-shadow-[0_0_10px_#8a2be2]">
        Voice-Based Learning Assistant
      </h1>

      <div className="bg-[#0e011a] border border-pink-700 rounded-3xl shadow-[0_0_60px_#8e24aa40] p-6 md:p-10 w-full max-w-3xl backdrop-blur-sm transition-all duration-300">
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-sm text-gray-300 mb-2">
              Ask your question using voice 🎙️
            </p>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-[#200c33] border border-pink-700 text-white px-4 py-2 rounded-xl"
            >
              {supportedLanguages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={startListening}
              className="bg-pink-600 hover:bg-pink-700 transition px-5 py-2 rounded-xl shadow-md"
            >
              Start Listening
            </button>
            <button
              onClick={handleStop}
              className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl shadow-md"
            >
              Stop & Ask
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-700 hover:bg-gray-800 transition px-5 py-2 rounded-xl shadow-md"
            >
              Reset
            </button>
          </div>

          <div className="bg-[#1b0b2f] p-4 rounded-lg border border-purple-700">
            <p className="text-sm text-purple-300">
              <b>🎧 Transcript:</b>{" "}
              {listening ? "Listening..." : transcript || "Start speaking..."}
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <BeatLoader color="#e879f9" size={15} />
            </div>
          ) : (
            response && (
              <div className="bg-[#2b1242] border border-purple-800 p-4 rounded-xl text-left">
                <p className="text-purple-200">
                  <b>🧠 AI Response:</b> {response}
                </p>
              </div>
            )
          )}

          {response && (
            <div className="text-center">
              <button
                onClick={() => saveAsPDF(response)}
                className="bg-green-600 hover:bg-green-700 transition px-5 py-2 rounded-xl shadow-md"
              >
                Save as PDF
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceInput;
