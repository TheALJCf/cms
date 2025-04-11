import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Give from "./pages/Give";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import LoginForm from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="relative flex h-full w-full grow flex-col items-center bg-black">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/give" element={<Give />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
