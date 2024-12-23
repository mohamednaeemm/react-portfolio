import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import './App.css';

function App() {

  return (
      <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default App
