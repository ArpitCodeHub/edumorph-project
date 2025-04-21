const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">© 2024 EduMorph. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="/privacy" className="text-decoration-none text-dark me-3">Privacy Policy</a>
            <a href="/terms" className="text-decoration-none text-dark">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
