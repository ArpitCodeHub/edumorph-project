import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./pages/Preloader";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

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
                </Routes>
            )}
        </Router>
    );
}

export default App;