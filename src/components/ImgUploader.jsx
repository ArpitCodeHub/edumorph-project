import React, { useState } from "react";
import { BeatLoader } from "react-spinners";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const hf_api_key = "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";

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleExplainImage = async () => {
    if (!imageFile) {
      setResponse("❗ Please upload an image first.");
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      const base64Image = await convertToBase64(imageFile);

      const res = await fetch(
        "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${hf_api_key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: {
              image: base64Image,
            },
          }),
        }
      );

      const data = await res.json();

      if (data && Array.isArray(data) && data[0]?.generated_text) {
        setResponse(data[0]?.generated_text);
      } else {
        setResponse("⚠️ No caption received from the model.");
      }
    } catch (err) {
      console.error("Image analysis error:", err);
      setResponse("❌ Failed to analyze image.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setImage(null);
    setImageFile(null);
    setResponse("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0114] to-[#1a0b2e] text-white font-sans flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-2xl font-bold text-purple-400 mb-4 drop-shadow-[0_0_10px_#8a2be2]">
        🖼️ Image Recognition
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#7b2cbf] file:text-white hover:file:bg-[#5f1fa7] transition mb-4"
      />

      {image && (
        <img
          src={image}
          alt="Preview"
          className="rounded-lg mx-auto mb-4 max-h-64 object-contain border border-purple-600 shadow-[0_0_10px_#7b2cbf]"
        />
      )}

      <button
        onClick={handleExplainImage}
        className="bg-gradient-to-r from-[#7b2cbf] to-[#3c096c] px-6 py-2 rounded-lg text-white font-semibold hover:brightness-110 transition duration-300"
      >
        ⚡ Explain Image
      </button>

      {loading ? (
        <div className="mt-4 flex justify-center">
          <BeatLoader color="#A5B4FC" size={15} />
        </div>
      ) : (
        response && (
          <div className="mt-4 bg-[#160b2c] p-4 rounded-xl text-left border border-purple-700 shadow-inner transition">
            <b className="text-purple-300">🤖 AI Response:</b> {response}
          </div>
        )
      )}

      <div className="mt-4">
        <button
          onClick={handleReset}
          className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition border border-gray-600"
        >
          ♻️ Reset
        </button>
      </div>
    </div>
  );
};

export default ImgUploader;
