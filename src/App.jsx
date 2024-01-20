/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Price from "./pages/Price";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import PrivacyPage from "./pages/PrivacyPage";
import NotfoundPage from "./pages/NotfoundPage";
import LoaderUI from "./components/UI/LoaderUI";
import ChatOption from "./components/ChatOption/ChatOption";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <LoaderUI />
  ) : (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="price" element={<Price />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
      {/* Chat Option */}
      <ChatOption />
    </>
  );
}

export default App;
