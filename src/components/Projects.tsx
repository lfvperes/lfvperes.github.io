import { useRef, useEffect } from 'react';
import portfolio from '../portfolio';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { projects } = portfolio;
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const equalizeCardHeights = () => {
      if (!gridRef.current) return;

      const cards = gridRef.current.children as HTMLCollectionOf<HTMLElement>;
      if (cards.length === 0) return;

      // Reset heights to auto to get the natural height
      Array.from(cards).forEach(card => {
        card.style.minHeight = 'auto';
      });

      // Find the max height
      let maxHeight = 0;
      Array.from(cards).forEach(card => {
        if (card.offsetHeight > maxHeight) {
          maxHeight = card.offsetHeight;
        }
      });

      // Set all cards to the max height
      if (maxHeight > 0) {
        Array.from(cards).forEach(card => {
          card.style.minHeight = `${maxHeight}px`;
        });
      }
    };

    // Run on mount and on window resize
    equalizeCardHeights();
    window.addEventListener('resize', equalizeCardHeights);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', equalizeCardHeights);
    };
  }, [projects]); // Rerun if the projects data changes

  if (!projects.length) return null;

  return (
    <section id='projects' className='py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>Projects</h2>
        <div ref={gridRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;