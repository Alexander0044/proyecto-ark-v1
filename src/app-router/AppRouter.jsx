import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

import Home from "../pages/home/Home.jsx";
import Maps from "../pages/maps/Maps.jsx";
import Contact from "../pages/contact/Contact.jsx";
import News from "../pages/news/News.jsx";
import PrivacyPolicy from "../pages/privacy-policy/PrivacyPolicy.jsx";
import CookiesPolicy from "../pages/cookies-policy/CookiesPolicy.jsx";
import TermsOfUse from "../pages/terms-of-use/TermsOfUse.jsx";

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
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
