import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from './ProjectsData';

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;