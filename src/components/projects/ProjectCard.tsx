import React from "react";
import { FaGithub } from "react-icons/fa";

interface Project {
    title: string;
    author: string;
    tags: string[];
    gitLink: string;
    description: string;
}

const ProjectCard = ({ idx, project }: { idx: number; project: Project }) => {
    const closeModal = (id: string) => {
        return () => {
            const modal = document.getElementById(id);
            if (modal) {
                modal.style.display = "none";
            }
        };
    };

    const openModal = (id: string) => {
        return () => {
            const modal = document.getElementById(id);
            if (modal) {
                modal.style.display = "block";
            }
        };
    };
    return (
        <>
            <div className="project-card" onClick={openModal(project.title+"-modal")}>
                <h2>
                    {idx+1} {project.title}
                </h2>
                <p>By {project.author}</p>
                <div className="tags">
                    {
                        project.tags && project.tags.length > 0 ? 
                        project.tags.map((tag: string, index: number) => (
                            <span key={index}>{tag}</span>
                        )) : (
                        <span>No tags</span>)
                    }
                </div>
                
                    <button className="details-btn" onClick={openModal(project.title+"-modal")}>Project Details</button>
                
            </div>
            <div id={`${project.title}-modal`} className="modal">
                <div className="modal-content">
                    <span className="close-btn" onClick={closeModal(project.title+"-modal")}>
                        &times;
                    </span>
                    <h2>{project.title}</h2>
                    <p>
                        <strong>By:</strong> {project.author}
                    </p>
                    <br />
                    <p>
                        <strong>Description:</strong>{project.description}
                    </p>
                    <br />
                    
                    <a href={project.gitLink} target="_blank" className="repo-link">
                    <FaGithub /> Repository Link
                    </a>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
