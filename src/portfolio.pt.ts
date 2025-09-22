export interface Project {
  name: string;
  description: string;
  stack: string[];
  sourceCode: string;
  livePreview: string;
}

export interface PortfolioData {
  name: string;
  intro: string;
  title: string;
  description: string;
  about: {
    title: string;
    description: string;
  };
  resume: string; 
  projects: Project[];
  skills: {
    languages: string[];
    frontEnd: string[];
    backEnd: string[];
    databases: string[];
    platformsAndTooling: string[]; 
    machineLearning: string[];     
    concepts: string[];
  };
  workflowAndEnvironment: string[];
  contact: {
    email: string;
    social: {
      github: string;
      linkedin: string;
    };
  };
}

const portfolio: PortfolioData = {
  name: 'Luís Peres',
  intro: "Olá, eu sou ",
  title: 'Desenvolvedor Web & Engenheiro de Software',
  description:
    "Sou um Engenheiro Full-Stack especializado em desenvolvimento Front-End. Crio experiências digitais unindo código e criatividade.",
  about: {
    title: 'Sobre Mim',
    description:
      "Ativamente exploro novas tecnologias e metodologias para aprimorar minhas habilidades com ferramentas de desenvolvimento. Meu foco é em otimizar o desempenho de aplicações em busca de experiências de usuário suaves e responsivas, e me dedico a entregar resultados de alta qualidade. Embora minha principal habilidade seja no desenvolvimento Front-End, possuo uma sólida compreensão dos princípios de Back-End e estou ativamente expandindo meus conhecimentos em desenvolvimento server-side.",
  },
  resume: 'https://rxresu.me/lfvperes/webdev-jr',
  projects: [
    {
      name: 'Backsky',
      description:
        'API REST para buscar informações de uma lista de cidades brasileiras ou escolher aleatoriamente. Um banco de dados construído com base em dados públicos do IBGE. Back-end para Cidades do Brasil. Hospedado no Northflank. Página de visualização usando React.',
      stack: ['Django', 'Sqlite3', 'Axios', 'React', 'TypeScript', 'CI/CD'],
      sourceCode: 'https://github.com/lfvperes/Backsky',
      livePreview: 'https://lfvperes.github.io/Backsky/',
    },
    {
      name: 'Cidades do Brasil',
      description:
        'Um bot Bluesky/X que posta uma cidade brasileira aleatória a cada 12 horas. Ele busca dados da API Backsky e, em seguida, usa as APIs Google Maps Static e Places para buscar mais conteúdo. Automatizado com GitHub Actions.',
      stack: ['TypeScript', 'Django', 'Sqlite3', 'AT Protocol'],
      sourceCode: 'https://github.com/lfvperes/cidades-br',
      livePreview: 'https://bsky.app/profile/cidades-do-brasil.bsky.social',
    },
    {
      name: 'Twilight Quotes',
      description:
        'Um bot simples do Bluesky que posta uma frase aleatória de Crepúsculo a cada hora. O banco de dados foi construído programaticamente a partir de arquivos de legendas de todos os filmes da série. Automatizado com GitHub Actions.',
      stack: ['TypeScript', 'AT Protocol'],
      sourceCode: 'https://github.com/lfvperes/twilight-quotes',
      livePreview: 'https://bsky.app/profile/twilight-quote.bsky.social',
    },
    {
      name: 'Este portfólio',
      description:
        'Um site de portfólio SPA simples construído com React, TypeScript, Vite e TailwindCSS. Está hospedado no GitHub Pages.',
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
