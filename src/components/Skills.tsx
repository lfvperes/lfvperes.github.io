
import portfolio from '../portfolio';
import {
  IoLogoJavascript, IoLogoHtml5, IoLogoCss3,
  IoLogoNodejs, IoLogoGithub, IoIosMore
} from 'react-icons/io';
import { 
  IoLogoReact, IoLogoVue, IoLogoDocker, 
  IoSyncOutline, IoLogoPython, IoSettingsSharp 
} from "react-icons/io5";
import { 
  SiTypescript, SiTailwindcss, SiExpress, SiSqlite, 
  SiVite, SiTensorflow, SiVscodium, SiFedora, 
  SiDjango, SiMongodb, SiCplusplus, SiAxios, SiJest, SiVercel 
} from 'react-icons/si';
import { FaLinux, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { MdLoop } from 'react-icons/md';

const Skills = () => {
  const { skills } = portfolio;

  // Check if skills object and its properties exist and have content
  if (!skills || (!skills.languages.length && !skills.frontEnd.length && !skills.backEnd.length && !skills.databases.length && !skills.devOps.length && !skills.concepts.length)) {
    return null;
  }

  // Helper function to get the correct icon component
  const getSkillIcon = (skillName: string) => {
    switch (skillName.toLowerCase()) {
      // Languages
      case 'javascript': return <IoLogoJavascript className="inline-block mr-2 text-yellow-400" />;
      case 'typescript': return <SiTypescript className="inline-block mr-2 text-blue-500" />;
      case 'python': return <IoLogoPython className="inline-block mr-2 text-yellow-500" />;
      case 'html': return <IoLogoHtml5 className="inline-block mr-2 text-orange-500" />;
      case 'css': return <IoLogoCss3 className="inline-block mr-2 text-blue-500" />;
      case 'c/c++': return <SiCplusplus className="inline-block mr-2 text-blue-500" />;

      // Front-End
      case 'react': return <IoLogoReact className="inline-block mr-2 text-blue-400" />;
      case 'vue.js': return <IoLogoVue className="inline-block mr-2 text-green-500" />;
      case 'axios': return <SiAxios className="inline-block mr-2 text-purple-400" />;
      case 'tailwindcss': return <SiTailwindcss className="inline-block mr-2 text-teal-500" />;
      case 'bootstrap': return <FaBootstrap className="inline-block mr-2 text-purple-500" />;

      // Back-End
      case 'node.js': return <IoLogoNodejs className="inline-block mr-2 text-green-500" />;
      case 'express': return <SiExpress className="inline-block mr-2 text-gray-200" />;
      case 'django': return <SiDjango className="inline-block mr-2 text-green-700" />;

      // Databases
      case 'sqlite3': return <SiSqlite className="inline-block mr-2 text-blue-700" />;
      case 'mongodb': return <SiMongodb className="inline-block mr-2 text-green-500" />;

      // DevOps & Tools
      case 'docker': return <IoLogoDocker className="inline-block mr-2 text-blue-500" />;
      case 'git': return <FaGitAlt className="inline-block mr-2 text-orange-600" />;
      case 'github': return <IoLogoGithub className="inline-block mr-2 text-gray-100" />;
      case 'unix/linux': return <FaLinux className="inline-block mr-2 text-gray-100" />;
      case 'ci/cd': return <IoSyncOutline className="inline-block mr-2 text-gray-100" />;
      case 'vite': return <SiVite className="inline-block mr-2 text-purple-500" />;
      case 'tensorflow': return <SiTensorflow className="inline-block mr-2 text-orange-500" />;
      case 'jest': return <SiJest className="inline-block mr-2 text-pink-500" />;
      case 'vercel': return <SiVercel className="inline-block mr-2 text-gray-200" />;

      // Concepts
      case 'restful apis': return <IoSettingsSharp className="inline-block mr-2 text-gray-400" />;
      case 'agile': return <MdLoop className="inline-block mr-2 text-blue-500" />;

      default: return <IoIosMore className="inline-block mr-2 text-gray-400" />; // Fallback icon
    }
  };

  // Helper function to get the correct icon for tools
  const getToolIcon = (toolName: string) => {
    switch (toolName.toLowerCase()) {
      case 'vscodium': return <SiVscodium className="inline-block mr-2 text-blue-400" />;
      case 'fedora linux': return <SiFedora className="inline-block mr-2 text-blue-500" />;
      default: return <IoIosMore className="inline-block mr-2 text-gray-400" />; // Fallback icon
    }
  };

  // Helper component to render a list of skills within a category
  const SkillCategory = ({ title, items, isToolList = false }: { title: string; items: string[]; isToolList?: boolean }) => {
    if (!items || items.length === 0) return null;
    return (
      <div className='mb-8'>
        <h3 className='text-2xl font-bold text-center mb-6 text-white'>{title}</h3>
        <ul className='flex flex-wrap justify-center'>
          {items.map((item) => (
            <li
              key={item} // Using item name as key, assuming they are unique within their category
              className='bg-gray-700 text-white font-semibold m-2 px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 flex items-center' // Added flex and items-center
            >
              {isToolList ? getToolIcon(item) : getSkillIcon(item)}
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section id='skills' className='py-20 bg-gray-800'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12 text-white'>Skills & Tools</h2>
        <SkillCategory title='Languages' items={skills.languages} />
        <SkillCategory title='Front-End' items={skills.frontEnd} />
        <SkillCategory title='Back-End' items={skills.backEnd} />
        <SkillCategory title='Databases' items={skills.databases} />
        <SkillCategory title='DevOps & Tools' items={skills.devOps} />
        {/* Render the Concepts section separately */}
        {skills.concepts && skills.concepts.length > 0 && (
          <SkillCategory title='Concepts' items={skills.concepts} />
        )}
        {/* Render the Tools section separately */}
        {portfolio.tools && portfolio.tools.length > 0 && (
          <SkillCategory title='Tools' items={portfolio.tools} isToolList={true} />
        )}
      </div>
    </section>
  );
};

export default Skills;