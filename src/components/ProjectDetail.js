import React from 'react';

const ProjectDetail = ({
    projects
}) => {
    return (
        <div className='projectdetail-container detail-container'>
                <h1>Recent Projects</h1>
            <div className='projectdetail-details-container'>
                {projects.map((project, idx) => (
                    <div key={idx} className='projectdetail-details'>
                        <h2>{project.name}</h2>
                        <h3>{project.summary}</h3>
                        <ul>
                            {project.technologies.map((technology, idx) => (
                                <li key={idx}>{technology}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectDetail;
