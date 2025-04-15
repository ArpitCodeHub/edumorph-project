const Footer = () => {
    return (
      <footer className="bottom-3 left-3 right-3 bg-white/10 backdrop-blur-lg border-t border-gray-600 rounded-xl py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-gray-300 bg-clip-text text-transparent">
            EduMorph
          </div>
  
          <div className="flex space-x-6 text-gray-300 text-lg">
            <a href="#about" className="hover:text-pink-400">About Us</a>
            <a href="#contact" className="hover:text-pink-400">Contact</a>
            <a href="#features" className="hover:text-pink-400">Features</a>
            <a href="#faq" className="hover:text-pink-400">FAQ</a>
            <a href="#privacy" className="hover:text-pink-400">Privacy Policy</a>
          </div>
  
          <div className="flex space-x-4">
            <div className="text-center">
                <a href="https://twitter.com" className="text-gray-300 hover:text-pink-400">X (twitter)</a>
                <br />
                <img className='ml-6' height="37px" width="37px" src="src\assets\icons8-x-94.png" alt="X" />
            </div>
            <div className="text-center">
                <a href="https://linkedin.com" className="text-gray-300 hover:text-pink-400">LinkedIn</a>
                <br />
                <img className='ml-4' height="35px" width="35px" src="src\assets\icons8-linkedin-94.png" alt="LinkedIn" />
            </div>
            <div>
                <a href="https://github.com" className="text-gray-300 hover:text-pink-400">GitHub</a>
                <br />
                <img className='ml-3' height="35px" width="35px" src="src\assets\icons8-github-logo-94.png" alt="GitHub" />
            </div>
          </div>
        </div> 
        <h4 className="text-gray-300 hover:text-blue-500 text-center mt-14"> © 2025 EduMorph. All rights reserved. </h4>
      </footer>
    );
  };
  
  export default Footer;