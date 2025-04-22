import React, { useState } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ChatBot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const groqApiKey = "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";

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    setLoading(true);
    const updatedChatHistory = [...chatHistory, { role: "user", content: userInput }];
    setChatHistory(updatedChatHistory);

    try {
      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          messages: [
            { role: "system", content: "You are a chatbot that answers questions and suggests related topics." },
            { role: "user", content: userInput },
          ],
          model: "llama-3.3-70b-versatile",
        },
        {
          headers: {
            Authorization: `Bearer ${groqApiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse = response.data.choices?.[0]?.message?.content || "I couldn't find an answer.";
      setChatHistory([...updatedChatHistory, { role: "bot", content: aiResponse }]);
    } catch (error) {
      console.error("Groq API Error:", error);
      setChatHistory([...updatedChatHistory, { role: "bot", content: "Error fetching response." }]);
    } finally {
      setLoading(false);
      setUserInput("");
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4" id="fade-in2">
      <div className="w-full max-w-lg bg-gray-500 text-gray-300 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-900 to-blue-900 bg-clip-text text-transparent text-center mb-4"> Personal AI Tutor</h1>

        <div className="space-y-4 overflow-y-auto h-96 p-4 bg-gray-800 rounded-lg">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`p-3 rounded-lg ${msg.role === "user" ? "bg-pink-600 text-white" : "bg-gray-700 text-gray-300"}`}>
              <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
            </div>
          ))}
          {loading && <BeatLoader color="#e879f9" size={10} />}
        </div>

        <div className="mt-4 flex gap-2">
          <input
            type="text"
            className="flex-grow bg-gray-300 text-gray-800 p-2 rounded-lg focus:outline-none"
            placeholder="Ask a concept or topic..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button onClick={handleSendMessage} className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition">
            Send 🚀
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ChatBot;