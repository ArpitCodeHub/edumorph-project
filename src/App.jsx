import React, { useState } from "react";
import Preloader from "./pages/Preloader";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="min-h-screen d-flex flex-column">
            <Navbar />
            <main className="flex-grow-1">
                {loading ? <Preloader onFinish={() => setLoading(false)} /> : <Home />}
            </main>
            <Footer />
        </div>
    );
}

export default App;