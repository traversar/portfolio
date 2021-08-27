import React from 'react';

const ProjectDetail = ({
    projects
}) => {
    return (
        <div className='projectdetail-container detail-container'>
                <h1>Recent Projects</h1>
            <div className='projectdetail-details-container'>
                {projects.map((project, idx) => (
                    <div onClick={() => window.location=project.url} key={idx} className='projectdetail-details'>
                        <img className='projectdetail-snapshot-img' src={project.img} alt='Project Snapshot'></img>
                        <div>
                            <h2>{project.name}</h2>
                            <h3>{project.summary}</h3>
                            <ul>
                                {project.technologies.map((technology, idx) => (
                                    <li key={idx}>{technology}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectDetail;
