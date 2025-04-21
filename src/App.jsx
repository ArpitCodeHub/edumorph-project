import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./pages/Preloader";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

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
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            )}
        </Router>
    );
}

export default App;