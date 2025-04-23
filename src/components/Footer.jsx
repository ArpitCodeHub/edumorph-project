import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bottom-3 left-3 right-3 bg-white/10 backdrop-blur-lg border-t border-gray-600 rounded-xl py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 flex-wrap">
          
          <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-gray-300 bg-clip-text text-transparent">
            EduMorph
          </div>
  
          <div className="flex space-x-6 text-gray-300 text-lg">
            <Link to="/aboutus" className="hover:text-pink-400">About Us</Link>
            <Link to="/contact" href="#contact" className="hover:text-pink-400">Contact</Link>
            <Link to="/" className="hover:text-pink-400">Features</Link>
            <Link to="/faq" className="hover:text-pink-400">FAQ</Link>
            <Link to="/privacypolicy" className="hover:text-pink-400">Privacy Policy</Link>
          </div>
  
          <div className="flex space-x-4 flex-wrap">
            <div className="text-center">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400">X (twitter)</a>
                <br />
                <img className='ml-6' height="37px" width="37px" src="/icons8-x-94.png" alt="X" />
            </div>
            <div className="text-center">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400">LinkedIn</a>
                <br />
                <img className='ml-4' height="35px" width="35px" src="/icons8-linkedin-94.png" alt="LinkedIn" />
            </div>
            <div>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400">GitHub</a>
                <br />
                <img className='ml-3' height="35px" width="35px" src="/icons8-github-logo-94.png" alt="GitHub" />
            </div>
          </div>
        </div> 
        <h4 className="text-gray-300 hover:text-purple-500 text-center mt-14"> © 2025 EduMorph. All rights reserved. </h4>
      </footer>
    );
  };
  
  export default Footer;