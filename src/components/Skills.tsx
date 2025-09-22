// Removed direct import of portfolio
// import portfolio from '../portfolio';

// Import necessary types
import type { IconType } from 'react-icons';
import type { PortfolioData } from '../portfolio'; // Import the main PortfolioData type

// Import icons (assuming these are correctly imported in App.tsx or globally)
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
  SiDjango, SiMongodb, SiCplusplus, SiAxios, SiJest,
  SiVercel, SiLogseq, SiGnubash, SiNestjs, SiNpm,
  SiPypi, SiPandas, SiNumpy, SiScikitlearn, SiPostman, SiPostgresql
} from 'react-icons/si';
import { FaLinux, FaBootstrap, FaGitAlt, FaDatabase, FaTasks } from 'react-icons/fa';
import { MdLoop } from 'react-icons/md';

// Define the props interface for the Skills component
interface SkillsProps {
  skills: PortfolioData['skills']; // Use the skills type from PortfolioData
  workflowAndEnvironment: PortfolioData['workflowAndEnvironment']; // Use the workflow type
}

const Skills = ({ skills, workflowAndEnvironment }: SkillsProps) => {
  // Check if skills object and its properties exist and have content
  // The check for skills.concepts and skills.machineLearning are now handled within SkillCategory
  if (!skills || (!skills.content.languages.length && !skills.content.frontEnd.length && !skills.content.backEnd.length && !skills.content.databases.length && !skills.content.platformsAndTooling.length)) {
    return null;
  }

  // Helper function now returns component type and color
  const getSkillIcon = (skillName: string): { Component: IconType; color: string } => {
    switch (skillName.toLowerCase()) {
      // Languages
      case 'javascript': return { Component: IoLogoJavascript, color: 'text-yellow-400' };
      case 'typescript': return { Component: SiTypescript, color: 'text-blue-500' };
      case 'python': return { Component: IoLogoPython, color: 'text-yellow-500' };
      case 'html': return { Component: IoLogoHtml5, color: 'text-orange-500' };
      case 'css': return { Component: IoLogoCss3, color: 'text-blue-500' };
      case 'c/c++': return { Component: SiCplusplus, color: 'text-blue-500' };
      case 'sql': return { Component: FaDatabase, color: 'text-gray-400' };
      case 'bash': return { Component: SiGnubash, color: 'text-gray-300' };

      // Front-End
      case 'react': return { Component: IoLogoReact, color: 'text-blue-400' };
      case 'vue.js': return { Component: IoLogoVue, color: 'text-green-500' };
      case 'axios': return { Component: SiAxios, color: 'text-purple-400' };
      case 'tailwindcss': return { Component: SiTailwindcss, color: 'text-teal-500' };
      case 'bootstrap': return { Component: FaBootstrap, color: 'text-purple-500' };

      // Back-End
      case 'node.js': return { Component: IoLogoNodejs, color: 'text-green-500' };
      case 'express': return { Component: SiExpress, color: 'text-gray-200' };
      case 'django': return { Component: SiDjango, color: 'text-green-700' };
      case 'nestjs': return { Component: SiNestjs, color: 'text-red-500' };

      // Databases
      case 'sqlite3': return { Component: SiSqlite, color: 'text-blue-700' };
      case 'mongodb': return { Component: SiMongodb, color: 'text-green-500' };
      case 'postgresql': return { Component: SiPostgresql, color: 'text-blue-600' };

      // Platforms & Tooling
      case 'docker': return { Component: IoLogoDocker, color: 'text-blue-500' };
      case 'git': return { Component: FaGitAlt, color: 'text-orange-600' };
      case 'github': return { Component: IoLogoGithub, color: 'text-gray-100' };
      case 'unix/linux': return { Component: FaLinux, color: 'text-gray-100' };
      case 'vite': return { Component: SiVite, color: 'text-purple-500' };
      case 'jest': return { Component: SiJest, color: 'text-pink-500' };
      case 'vercel': return { Component: SiVercel, color: 'text-gray-200' };
      case 'npm': return { Component: SiNpm, color: 'text-red-500' };
      case 'pip': return { Component: SiPypi, color: 'text-blue-400' };

      // Machine Learning
      case 'tensorflow': return { Component: SiTensorflow, color: 'text-orange-500' };
      case 'pandas': return { Component: SiPandas, color: 'text-indigo-500' };
      case 'numpy': return { Component: SiNumpy, color: 'text-blue-400' };
      case 'scikit-learn': return { Component: SiScikitlearn, color: 'text-orange-400' };

      // Concepts
      case 'restful apis': return { Component: IoSettingsSharp, color: 'text-gray-400' };
      case 'agile': return { Component: MdLoop, color: 'text-blue-500' };
      case 'ci/cd': return { Component: IoSyncOutline, color: 'text-gray-100' };
      case 'tdd': return { Component: FaTasks, color: 'text-green-400' };
      default: return { Component: IoIosMore, color: 'text-gray-400' };
    }
  };

  // Helper function for workflow tools, also refactored
  const getToolIcon = (toolName: string): { Component: IconType; color: string } => {
    switch (toolName.toLowerCase()) {
      case 'vscodium': return { Component: SiVscodium, color: 'text-blue-400' };
      case 'fedora linux': return { Component: SiFedora, color: 'text-blue-500' };
      case 'logseq': return { Component: SiLogseq, color: 'text-green-200' };
      case 'postman': return { Component: SiPostman, color: 'text-orange-500' };
      default: return { Component: IoIosMore, color: 'text-gray-400' };
    }
  };

  // Helper component now handles rendering logic
  const SkillCategory = ({ title, items, isToolList = false }: { title: string; items: string[]; isToolList?: boolean }) => {
    if (!items || items.length === 0) return null;
    return (
      <div className='mb-8'>
        <h3 className='text-2xl font-bold text-center mb-6 text-white'>{title}</h3>
        <ul className='flex flex-wrap justify-center'>
          {items.map((item) => {
            const { Component, color } = isToolList ? getToolIcon(item) : getSkillIcon(item);
            return (
              <li
                key={item}
                className='group bg-gray-700 text-white font-semibold m-2 px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 flex items-center'
              >
                <Component className={`inline-block mr-2 ${color} group-hover:text-white transition-colors duration-300`} />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  // The final render structure remains the same
  return (
    <section id='skills' className='py-20 bg-gray-800'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12 text-white'>{skills.title.title}</h2>
        <SkillCategory title={skills.title.languages} items={skills.content.languages} />
        <SkillCategory title={skills.title.frontEnd} items={skills.content.frontEnd} />
        <SkillCategory title={skills.title.backEnd} items={skills.content.backEnd} />
        <SkillCategory title={skills.title.databases} items={skills.content.databases} />
        <SkillCategory title={skills.title.platformsAndTooling} items={skills.content.platformsAndTooling} />

        {skills.content.concepts && skills.content.concepts.length > 0 && (
          <SkillCategory title={skills.title.concepts} items={skills.content.concepts} />
        )}

        {skills.content.machineLearning && skills.content.machineLearning.length > 0 && (
          <SkillCategory title={skills.title.machineLearning} items={skills.content.machineLearning} />
        )}

        {workflowAndEnvironment && workflowAndEnvironment.content.length > 0 && (
          <SkillCategory title={workflowAndEnvironment.title} items={workflowAndEnvironment.content} isToolList={true} />
        )}
      </div>
    </section>
  );
};

export default Skills;