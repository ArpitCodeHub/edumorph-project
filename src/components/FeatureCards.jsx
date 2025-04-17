import React from "react";

const features = [
  { title: "Voice-Based Learning ", description: "Ask questions via voice commands", image: "https://media.istockphoto.com/id/1367728606/vector/conversational-ai-concept-natural-language-processing-nlp-computational-linguistics-concept.jpg?s=612x612&w=0&k=20&c=YB1PDavNi9HCRnFlhb2g5y9lhOl3CIAxbSNvZifB_F0=", bg: "bg-pink-600/10" },
  { title: "Image Recognition ", description: "Upload images & get real-time AI explanations", image: "https://img.freepik.com/premium-photo/face-recognition-facial-recognition-system-concept_587448-3212.jpg", bg: "bg-blue-700/10" },
  { title: "Adaptive AI Tutoring ", description: "Personalized learning with real-time insights", image: "https://images.ctfassets.net/ly25iagmtxce/3IRuk6MBGtGUB3pnsNcmDh/81eec03dc8ccb39c878d9fc0314f30eb/DALL_E_2024-04-03_21.12.17_-_A_digital_collage_representing_the_impact_of_artificial_intelligence_on_education_and_tutoring..jpg", bg: "bg-gray-300/10 text-black" },
  { title: "Multilingual Support ", description: "Instant translation & voice narration", image: "https://blog.docsbot.ai/wp-content/uploads/2023/10/DALL%C2%B7E-2023-10-18-10.16.25-Vector-graphic-of-a-futuristic-white-robot-with-neon-green-accents.-It-stands-in-a-digital-space-filled-with-binary-code-holding-the-Earth-in-one-han.png", bg: "bg-pink-600/10" },
  { title: "AI-Powered Note-Taking ", description: "Summarization & efficient studying", image: "https://www.notion.so/image/https:%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fddd00a8a-14c0-4f91-a03f-e69b4e736d9c%2F6f319507-ae7f-4f3c-9fe2-c77e59d9cc6e%2Fimage.png?table=block&id=57768522-42d3-47b2-a8fa-70af6dd4a729&cache=v2", bg: "bg-blue-700/10" },
];

const FeatureCards = () => {
  return (
    <>
      <div className="text-center mt-20" id="fade-in2"><h1 className="inline-block text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent px-2 py-2"> Start Learning </h1></div>
      <div className="flex flex-wrap justify-center gap-20 mt-10 px-6 mb-5" id="fade-in2">
      {features.map((feature, index) => (
        <div key={index} className={`relative w-80 rounded-xl border border-white/20 ${feature.bg} backdrop-blur-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl group py-3 px-3`}>

          <img src={feature.image} alt={feature.title} className="w-full h-40 object-cover rounded-lg mb-4" />

          <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">{feature.title}</h3>

          <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center">
            <p className="mt-4 text-center text-gray-300">{feature.description}</p>
            <button className="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-400 text-white rounded-lg shadow-lg transition-all">
              Try Now
            </button>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default FeatureCards;