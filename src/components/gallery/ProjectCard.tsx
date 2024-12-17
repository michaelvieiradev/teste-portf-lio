import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
}

const ProjectCard = ({ image, title }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-4">
        <h3 className="text-white text-xl font-medium">{title}</h3>
        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
          Ver mais
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;