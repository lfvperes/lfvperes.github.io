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
  name: 'Your Name',
  title: 'Software Engineer',
  description:
    "I'm a passionate software engineer specializing in building exceptional digital experiences.",
  about: {
    title: 'About Me',
    description:
      'I am a forward-thinking developer with a passion for creating clean, efficient, and user-friendly applications. I have a strong foundation in both front-end and back-end development and enjoy bringing ideas to life in the browser.',
  },
  resume: '#', // Placeholder link for the resume
  projects: [
    {
      name: 'Project One',
      description:
        'A brief and compelling description of your first project. Talk about the problem it solves and the technologies used.',
      stack: ['React', 'TypeScript', 'Tailwind CSS'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Project Two',
      description:
        'A brief and compelling description of your second project. What makes it special?',
      stack: ['Node.js', 'Express', 'MongoDB'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ],
  skills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'CSS', 'HTML'],
  contact: {
    email: 'your.email@example.com',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
};

export default portfolio;
