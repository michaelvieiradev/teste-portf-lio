import React from 'react';
import ProjectsGrid from './gallery/ProjectsGrid';
import { projects } from './gallery/ProjectsData';

const Gallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Projetos</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
};

export default Gallery;