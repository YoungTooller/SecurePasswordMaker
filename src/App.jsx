import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Validator from "./templates/Validator.jsx";
import Generator from "./templates/Generator.jsx";

export default function App() {
    return (
        <Router>
            <div className="container">
                <nav className="navbar">
                    <Link to="/" className="nav-link">Generator</Link>
                    <Link to="/validator" className="nav-link">Validator</Link>
                </nav>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Generator />} />
                        <Route path="/validator" element={<Validator />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}