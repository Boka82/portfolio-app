import React from 'react';
import './works.style.css';


const Works = () => {
  const projects = [
    { id: 1, title: 'LANG SCORING', image: './works/components/project_1.svg' },
    { id: 2, title: 'Creative Guards Light', image: '{project1}' },
    { id: 3, title: 'PURE CAUSE', image: '/works/3.jpg' },
    { id: 4, title: 'Candle Cream Box', image: '/works/4.jpg' },
    { id: 5, title: 'LUXE Sample', image: '/works/5.jpg' },
    { id: 6, title: 'THREE DAYS', image: '/works/6.jpg' }
  ];

  return (
    <section className="works">
      <div className="works-container">
        <h1>MY WORKS</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={`/project/${project.id}`} 
              className="project-item"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
              <div className="project-overlay">
                <h3>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;