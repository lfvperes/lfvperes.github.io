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
  skills: {
    languages: string[];
    frontEnd: string[];
    backEnd: string[];
    databases: string[];
    platformsAndTooling: string[]; // Replaces devOps
    machineLearning: string[];     // New category for ML
    concepts: string[];
  };
  workflowAndEnvironment: string[]; // Replaces tools
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
    "I'm a Full-Stack Engineer specializing in Front-End development. I craft digital experiences by merging code and creativity.",
  about: {
    title: 'About Me',
    description:
      "I actively explore new technologies and methodologies to enhance my development toolkit. My focus is on optimizing application performance for smooth, responsive user experiences, and I'm dedicated to delivering high-quality outcomes. While my primary strength is Front-End development, I possess a solid understanding of Back-End principles and am actively expanding my server-side expertise.",
  },
  resume: 'https://rxresu.me/lfvperes/webdev-jr',
  projects: [
    {
      name: 'Backsky',
      description:
        'REST API to fetch information from a list of Brazilian cities or choose randomly. A database built upon IBGE public data. Back-end for Cidades do Brasil. Hosted on Northflank. Preview page using React.',
      stack: ['Django', 'Sqlite3', 'Axios', 'React', 'TypeScript', 'CI/CD'],
      sourceCode: 'https://github.com/lfvperes/Backsky',
      livePreview: 'https://lfvperes.github.io/Backsky/',
    },
    {
      name: 'Cidades do Brasil',
      description:
        "A Bluesky/X bot that posts a random Brazilian city every 12 hours. It fetches data from the Backsky API, then uses Google's Maps Static and Places APIs to fetch more content. Automated with GitHub Actions.",
      stack: ['TypeScript', 'Django', 'Sqlite3', 'AT Protocol'],
      sourceCode: 'https://github.com/lfvperes/cidades-br',
      livePreview: 'https://bsky.app/profile/cidades-do-brasil.bsky.social',
    },
    {
      name: 'Twilight Quotes',
      description:
        'A simple Bluesky bot that posts a random Twilight quote every hour. The database was built programatically from subtitles files of all the movies in the series. Automated with GitHub Actions.',
      stack: ['TypeScript', 'AT Protocol'],
      sourceCode: 'https://github.com/lfvperes/twilight-quotes',
      livePreview: 'https://bsky.app/profile/twilight-quote.bsky.social',
    },
    {
      name: 'This portfolio',
      description:
        'A simple SPA portfolio website built with React, TypeScript, Vite and TailwindCSS. It is hosted on GitHub Pages.',
      stack: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
      sourceCode: 'https://github.com/lfvperes/lfvperes.github.io',
      livePreview: 'https://lfvperes.github.io',
    },
  ],
  skills: {
    languages: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'C/C++', 'SQL', 'Bash'],
    frontEnd: ['React', 'Vue.js', 'Axios', 'TailwindCSS', 'Bootstrap'],
    backEnd: ['Node.js', 'Express', 'Django', 'NestJS'],
    databases: ['SQLite3', 'MongoDB', 'PostgreSQL'],
    platformsAndTooling: ['Docker', 'Git', 'GitHub', 'Unix/Linux', 'Vite', 'Jest', 'Vercel', 'npm', 'pip'],
    machineLearning: ['TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn'],
    concepts: ['RESTful APIs', 'Agile', 'CI/CD', 'TDD'],
  },
  workflowAndEnvironment: [
    'VSCodium',
    'Fedora Linux',
    'Logseq',
    'Postman'
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