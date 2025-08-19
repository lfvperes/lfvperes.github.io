import React from 'react';

// Define the props interface for the Hero component
interface HeroProps {
  name: string;
  title: string;
  description: string;
}

const Hero = ({ name, title, description }: HeroProps) => {
  return (
    <section id='hero' className='py-20 text-center'>
      <div className='container mx-auto'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
          Hi, I'm <span className='text-blue-500'>{name}</span>.
        </h1>
        <h2 className='text-2xl md:text-4xl mb-6'>{title}</h2>
        <p className='text-lg md:text-xl max-w-3xl mx-auto'>
          {description}
        </p>
      </div>
    </section>
  );
};

export default Hero;