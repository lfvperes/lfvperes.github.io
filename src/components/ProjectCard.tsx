// src/components/ProjectCard.tsx
import type { Project } from '../portfolio';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300'>
      <div className='p-6'>
        <h3 className='text-xl font-bold mb-2'>{project.name}</h3>
        <p className='text-gray-400 mb-4'>{project.description}</p>
        <div className='flex flex-wrap mb-4'>
          {project.stack.map((tech) => (
            <span key={tech} className='bg-gray-700 text-gray-300 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded'>
              {tech}
            </span>
          ))}
        </div>
        <div className='flex justify-end mt-4'>
          <a
            href={project.sourceCode}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:text-blue-500 font-semibold transition duration-300 mr-4'
          >
            Source Code
          </a>
          <a
            href={project.livePreview}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:text-blue-500 font-semibold transition duration-300'
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
