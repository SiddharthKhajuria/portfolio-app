import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Portfolio-app/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const pageNameMap = {
  "/": "Home",
  "/about": "About",
  "/skills": "Skills",
  "/projects": "Projects",
  "/contact": "Contact",
};

function AppRoutes() {
  const location = useLocation();
  const currentPageName = pageNameMap[location.pathname] || "Home";

  return (
    <Layout currentPageName={currentPageName}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return <AppRoutes />;
}
