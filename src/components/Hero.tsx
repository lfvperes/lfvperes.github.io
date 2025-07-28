import portfolio from '../portfolio';

const Hero = () => {
  const { name, title, description } = portfolio;

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