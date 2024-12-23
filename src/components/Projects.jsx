import React from "react";
import logo1 from '../assets/ablestate.png'
import logo2 from '../assets/whd.png'
import logo3 from '../assets/boh.png'
import project from '../assets/app.jpg'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title-one">Worked with</h2>
      <div className="projects-logos">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
      </div>
      <h1 className="projects-title-two">Projects</h1>
      <div className="project">
            <div className="project-image">
                <img src={project} alt="" />
            </div>
            <div className="project-description">
                <h2>Studentsapp</h2>
                <p>Loremsit amet consectetur adipisicing elit. Iste et rerum quas laudantium aperiam laborum impedit, vitae dignissimos illum odit?</p>
                <h3>Technologies</h3>
                <ul>
                    <li>React</li>
                    <li>CSS</li>
                    <li>HTML</li>
                </ul>
            </div>
      </div>
      <div className="project">
            <div className="project-description">
                <h2>Weather APP</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque totam officia ex illo maxime fugit.</p>
                <h3>Technologies</h3>
                <ul>
                    <li>React</li>
                    <li>CSS</li>
                    <li>HTML</li>
                </ul>
            </div>
            <div className="project-image">
                <img src={project} alt="" />
            </div>
      </div>
      <button>See More Work</button>
    </section>
  );
};

export default Projects;
