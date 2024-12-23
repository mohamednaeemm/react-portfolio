import React from "react";
import logo from '../assets/blog-logo.jpg'
import project from '../assets/project1.jpg'


const Blog = () => {
  return (
    <section id="blog" className="blog">
        <div className="blog-head">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</div>
            <img src={logo} alt="" />
            <h1>My Blogs</h1>
        </div>
        <div className="blog-body">
            <div className="blog-project">
                <img src={project} alt="" />
                <h2>SEMANTIC VERSIONING</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quo accusantium laboriosam a.</p>
                <button>Read More</button>
            </div>
            <div className="blog-project">
                <img src={project} alt="" />
                <h2>REACT COMPONENTS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quo accusantium laboriosam a.</p>
                <button>Read More</button>
            </div>
            <div className="blog-project">
                <img src={project} alt="" />
                <h2>CONTRIBUTING TO OS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quo accusantium laboriosam a.</p>
                <button>Read More</button>
            </div>
        </div>
      
    </section>
  );
};

export default Blog;
