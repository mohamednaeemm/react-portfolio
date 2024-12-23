import React from "react";
import me from '../assets/business-man.png'


const Skills = () => {
  return (
    <section id="skills">
      <div className="skill">
            <div className="skill-image">
                <img src={me} alt="" />
            </div>
            <div className="skill-info">
                <h2>ABOUT ME</h2>
                <h1>WHO AM I</h1>
                <p>Loremsit amet consectetur adipisicing elit. Iste et rerum quas laudantium aperiam laborum impedit, vitae dignissimos illum odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, temporibus. Vitae porro voluptates cum molestias qui, rem a et natus?</p>
                <div className="skills-buttons">
                    <button className="button-one">Hire Me</button>
                    <button>See My Resume</button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Skills;
