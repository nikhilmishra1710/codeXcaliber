import React from "react";
import "./styles2.css";
import ProjectCard from "./ProjectCard";
import { projectDetails } from "./projectDetails";

const Projects = () => {
    return (
        <div id="projects">
            <header className="faq-header">
                <h1>Projects</h1>
                <p>Code X Caliber</p>
            </header>
            {projectDetails && projectDetails.length > 0 ? (
                <div className="project-container p-4">
                    {projectDetails.map((proj, idx) => (
                        <ProjectCard key={idx} idx={idx} project={proj} />
                    ))}
                </div>
            ) : (
                <div className="announcement">
                    <p>To Be Announced Soon</p>
                </div>
            )}

            
        </div>
    );
};

export default Projects;
