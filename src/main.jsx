import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Downloads from "./pages/Downloads";
import Notice from "./pages/Notice";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Mission from "./pages/Mission";
import BOD from "./pages/BOD";
import MessageFromChairperson from "./pages/MessageFromChairperson";
import MessageFromCEO from "./pages/MessageFromCEO";
import SubCommittees from "./pages/SubCommittees";
import News from "./pages/News";
import Loan from "./pages/Loan";
import Saving from "./pages/Saving";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="downloads" element={<Downloads />} />
      <Route path="notice" element={<Notice />} />
      <Route path="contact" element={<Contact />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="mission&vision" element={<Mission />} />
      <Route path="bod" element={<BOD />} />
      <Route path="subcommittees" element={<SubCommittees />} />
      <Route
        path="message-from-chairperson"
        element={<MessageFromChairperson />}
      />
      <Route path="message-from-ceo" element={<MessageFromCEO />} />
      <Route path="news" element={<News />} />
      <Route path="loan" element={<Loan />} />
      <Route path="saving" element={<Saving />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
