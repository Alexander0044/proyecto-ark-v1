import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

import Home from "../pages/home/Home.jsx";
import Maps from "../pages/maps/Maps.jsx";
import Contact from "../pages/contact/Contact.jsx";

export default function AppRouter() {
  return (
    <div className="app-shell">
      <Header />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/maps" element={<Maps />} />
          <Route path="/contact" element={<Contact />} />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
