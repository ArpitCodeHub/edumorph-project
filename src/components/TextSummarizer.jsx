// components/TextSummarizer.jsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function TextSummarizer() {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const summarizeText = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setSummary("");
    setError(null);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant that summarizes text clearly and concisely.",
            },
            {
              role: "user",
              content: `Summarize this: ${inputText}`,
            },
          ],
          model: "llama-3.3-70b-versatile", // Updated model
        }),
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(errorDetails);
      }

      const data = await response.json();
      console.log("API Response:", data);
      const aiResponse = data.choices?.[0]?.message?.content;
      setSummary(aiResponse || "No summary returned by the AI.");
    } catch (err) {
      console.error("Summarization Error:", err);
      setError("Failed to generate summary: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center min-h-screen bg-[#1c1c2c] p-4 transition-all" id="fade-in2">
      <div className="w-full max-w-2xl bg-[#1c1c2c] p-8 rounded-2xl shadow-xl text-white transform transition-all duration-500 ease-in-out hover:scale-105">
        <h1 className="text-4xl font-bold mb-6 text-center animate__animated animate__fadeIn text-pink-600">📝 Text Summarizer </h1>
        
        <textarea
          className="w-full h-60 p-4 border border-blue-700 bg-[#0f0f1a] text-white rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          placeholder="Paste or write your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        
        <button
          onClick={summarizeText}
          disabled={loading}
          className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? (
            <div className="spinner-border animate-spin h-5 w-5 border-t-2 border-white rounded-full"></div>
          ) : (
            "Summarize with AI"
          )}
        </button>

        {error && (
          <p className="mt-4 text-red-500 bg-red-900 p-3 rounded-xl border border-red-700 animate__animated animate__fadeIn animate__delay-1s">
            {error}
          </p>
        )}

        {summary && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Summary:</h2>
            <p className="bg-gray-800 p-4 rounded-xl border border-blue-700 text-white whitespace-pre-wrap animate__animated animate__fadeIn">
              {summary}
            </p>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
    
  );
}
