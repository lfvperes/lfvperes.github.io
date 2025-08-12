// portfolio.ts

// Define the structure of a project
export interface Project {
  name: string;
  description: string;
  stack: string[];
  sourceCode: string;
  livePreview: string;
}

// Define the structure for the entire portfolio
export interface PortfolioData {
  name: string;
  title: string;
  description: string;
  about: {
    title: string;
    description: string;
  };
  resume: string; // Add resume link
  projects: Project[];
  skills: string[];
  tools: string[];
  contact: {
    email: string;
    social: {
      github: string;
      linkedin: string;
    };
  };
}

// Placeholder data
const portfolio: PortfolioData = {
  name: 'Luís Peres',
  title: 'Web Developer & Software Engineer',
  description:
    "I'm a passionate Full-Stack Engineer specializing in Front-End development. I build and design exceptional digital experiences.",
  about: {
    title: 'About Me',
    description:
      'I am a forward-thinking developer with a passion for creating clean, efficient, and user-friendly applications. I have a strong foundation in both front-end and back-end development and enjoy bringing ideas to life in the browser.',
  },
  resume: '#', // Placeholder link for the resume
  projects: [
    {
      name: 'Cidades do Brasil',
      description:
        'A brief and compelling description of your first project. Talk about the problem it solves and the technologies used.',
      stack: ['TypeScript', 'Django', 'Sqlite3', 'AT Protocol'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'CRUDsky',
      description:
        'Back-end for Cidades do Brasil and Twilight Quotes',
      stack: ['Django', 'Sqlite3'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Twilight Quotes',
      description:
        'A brief and compelling description of your first project. Talk about the problem it solves and the technologies used.',
      stack: ['TypeScript', 'Django', 'SQLite', 'AT Protocol',],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'This portfolio',
      description:
        'A brief and compelling description of your second project. What makes it special?',
      stack: ['React', 'TypeScript'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ],
  skills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'SQLite', 'Django', 'CSS', 'HTML', 'Tailwind', 'Bootstrap', 'Vue.js', 'Vite', 'Python', 'Docker', 'Unix/Linux', 'C/C++'],
  tools: [
    'VSCodium',
    'Git/GitHub',
    'Fedora Linux',
  ],
  contact: {
    email: 'luisfvperes@gmail.com',
    social: {
      github: 'https://github.com/lfvperes',
      linkedin: 'https://linkedin.com/in/lfvperes',
    },
  },
};

export default portfolio;
