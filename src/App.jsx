import React, { useState } from "react";
import Preloader from "./pages/Preloader";
import Home from "./pages/Home";

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading ? <Preloader onFinish={() => setLoading(false)} /> : <Home />}
        </>
    );
}

export default App;