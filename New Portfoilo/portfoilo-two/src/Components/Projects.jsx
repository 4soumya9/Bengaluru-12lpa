import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Dashboard',
            description: 'A comprehensive admin dashboard for managing products, orders, and analytics. Features dark mode and real-time data visualization.',
            tech: ['React', 'Redux', 'Chart.js'],
            image: 'https://via.placeholder.com/300x180/000000/00ff41?text=Dashboard' // Placeholder using theme colors
        },
        {
            id: 2,
            title: 'Social Media App',
            description: 'A full-stack social platform allowing users to share posts, like, comment, and connect with others real-time.',
            tech: ['React', 'Node.js', 'Socket.io'],
            image: 'https://via.placeholder.com/300x180/000000/00ff41?text=Social+App'
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description: 'A personal portfolio website with unique laptop-style framing, light/dark mode, and interactive animations.',
            tech: ['React', 'CSS3', 'Vite'],
            image: 'https://via.placeholder.com/300x180/000000/00ff41?text=Portfolio'
        }
    ];

    return (
        <div className="projects-section" id="projects">
            <h2 className="projects-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        {/* Using a placeholder image div if image fails or just as style */}
                        <div className="project-image">
                            {/* <img src={project.image} alt={project.title} /> */}
                            {/* Using Icon or Text as placeholder */}
                            <span>{project.title[0]}</span>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href="#" className="btn-project btn-primary">Live Demo <FaExternalLinkAlt style={{ marginLeft: '5px', fontSize: '0.8em' }} /></a>
                                <a href="#" className="btn-project btn-secondary">Code <FaGithub style={{ marginLeft: '5px', fontSize: '0.9em' }} /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
