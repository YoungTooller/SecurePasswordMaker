import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Validator from "./templates/Validator.jsx";
import Generator from "./templates/Generator.jsx";
import Toast from "./templates/Toast.jsx";

export default function App() {
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);

    const showToastMessage = (message) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 7000);
    };

    return (
        <Router>
            <div className="container">
                <nav className="navbar">
                    <Link to="/" className="nav-link">Generator</Link>
                    <Link to="/validator" className="nav-link">Validator</Link>
                </nav>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Generator showToast={ showToastMessage } />} />
                        <Route path="/validator" element={<Validator />} />
                    </Routes>
                </div>
            </div>

            {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
        </Router>
    );
}
