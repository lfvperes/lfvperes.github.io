import portfolio from '../portfolio';

const Skills = () => {
  const { skills } = portfolio;

  if (!skills.length) return null;

  return (
    <section id='skills' className='py-20 bg-gray-800'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>Skills</h2>
        <ul className='flex flex-wrap justify-center'>
          {skills.map((skill, index) => (
            <li
              key={index}
              className='bg-gray-700 text-white font-semibold m-2 px-4 py-2 rounded-lg shadow-md'
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;