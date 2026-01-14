// portfolio.ts

// Define the structure of a project
export interface Project {
  name: string;
  description: string;
  stack: string[];
  sourceCode: {
    title: string;
    content: string;
  }
  livePreview: {
    title: string;
    content: string;
  }
}

// Define the structure for the entire portfolio
export interface PortfolioData {
  name: string;
  intro: string;
  title: string;
  description: string;
  about: {
    title: string;
    description: string;
  };
  resume: {
    title: string;
    content: string;
  };
  projects: {
    title: string;
    content: Project[];
  };
  skills: {
    title: {
      title: string;
      languages: string;
      frontEnd: string;
      backEnd: string;
      databases: string;
      platformsAndTooling: string;
      machineLearning: string;
      concepts: string;
    };
    content: {
      languages: string[];
      frontEnd: string[];
      backEnd: string[];
      databases: string[];
      platformsAndTooling: string[]; // Replaces devOps
      machineLearning: string[];     // New category for ML
      concepts: string[];
    }
  };
  workflowAndEnvironment: {
    title: string;
    content: string[];
  };
  contact: {
    title: string;
    content: {
      text: string;
      email: string;
      social: {
        github: string;
        linkedin: string;
      };
    }
  };
  copyright: string;
}

// Placeholder data
const enPortfolio: PortfolioData = {
  name: 'Luís Peres',
  intro: "Hi, I'm ",
  title: 'Web Developer & Software Engineer',
  description:
    "I'm a Full-Stack Software Engineer specialized in Front-End. My main stack: React, Django & SQLite",
  about: {
    title: 'About Me',
    description:
      "Actively exploring new tech, I'm always tryint to enhance my dev toolkit. Focused on optimizing app performance for smooth, responsive user experiences, I'm dedicated to deliver high-quality results. While my stront suit is Front-End, I possess solid knowledge of Back-End development and I'm expanding my server-side expertise.",
  },
  resume: {
    title: 'View Resume',
    content: 'https://rxresu.me/lfvperes/webdev-jr'
  },
  projects: {
    title: 'Projects',
    content: [
    {
      name: 'VHMS',
      description:
        'Veterinary Hospital Management System made with Django. In development.',
      stack: ['Django', 'Python', 'Sqlite3', 'Axios', 'CI/CD'],
      sourceCode: {
        title: 'Source Code',
        content: 'https://github.com/lfvperes/vhms'
      },
      livePreview: {
        title: 'Live Preview',
        content: 'https://github.com/lfvperes/vhms'
      },
    },
    {
      name: 'Backsky API',
      description:
        'REST API to fetch information from a list of Brazilian cities or choose randomly. A database built upon IBGE public data. Back-end for Cidades do Brasil. Hosted on Northflank. Preview page using React.',
      stack: ['Django', 'Sqlite3', 'Axios', 'React', 'TypeScript', 'CI/CD'],
      sourceCode: {
        title: 'Source Code',
        content: 'https://github.com/lfvperes/Backsky'
      },
      livePreview: {
        title: 'Live Preview',
        content: 'https://lfvperes.github.io/Backsky/'
      },
    },
    {
      name: 'Cidades do Brasil',
      description:
        "A Bluesky/X bot that posts a random Brazilian city every 12 hours. It fetches data from the Backsky API, then uses Google's Maps Static and Places APIs to fetch more content. Automated with GitHub Actions.",
      stack: ['TypeScript', 'Django', 'Sqlite3', 'AT Protocol'],
      sourceCode: {
        title: 'Source Code',
        content: 'https://github.com/lfvperes/cidades-br'
      },
      livePreview: {
        title: 'Live Preview',
        content: 'https://bsky.app/profile/cidades-do-brasil.bsky.social'
      }
    },
    {
      name: 'Twilight Quotes',
      description:
        'A simple Bluesky bot that posts a random Twilight quote every hour. The database was built programatically from subtitles files of all the movies in the series. Automated with GitHub Actions.',
      stack: ['TypeScript', 'AT Protocol'],
      sourceCode: {
        title: 'Source Code',
        content: 'https://github.com/lfvperes/twilight-quotes'
      },
      livePreview: {
        title: 'Live Preview',
        content: 'https://bsky.app/profile/twilight-quote.bsky.social'
      }
    },
    {
      name: 'This portfolio',
      description:
        'A simple SPA portfolio website built with React, TypeScript, Vite and TailwindCSS. It is hosted on GitHub Pages.',
      stack: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
      sourceCode: {
        title: 'Source Code',
        content: 'https://github.com/lfvperes/lfvperes.github.io'
      },
      livePreview: {
        title: 'Live Preview',
        content: 'https://lfvperes.github.io'
      }
    },
  ]},
  skills: {
    title: {
      title: 'Skills & Tools',
      languages: 'Languages',
      frontEnd: 'Front-End',
      backEnd: 'Back-End',
      databases: 'Databases',
      platformsAndTooling: 'Platforms & Tooling',
      machineLearning: 'Machine Learning',
      concepts: 'Concepts',
    },
    content: {
      languages: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'C/C++', 'SQL', 'Bash'],
      frontEnd: ['React', 'Vue.js', 'Axios', 'TailwindCSS', 'Bootstrap'],
      backEnd: ['Node.js', 'Express', 'Django', 'NestJS'],
      databases: ['SQLite3', 'MongoDB', 'PostgreSQL'],
      platformsAndTooling: ['Docker', 'Git', 'GitHub', 'Unix/Linux', 'Vite', 'Jest', 'Vercel', 'npm', 'pip'],
      machineLearning: ['TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn'],
      concepts: ['RESTful APIs', 'Agile', 'CI/CD', 'TDD'],
    }
  },
  workflowAndEnvironment: {
  title: 'Workflow & Environment',
  content: [
      'VSCodium',
      'Fedora Linux',
      'Logseq',
      'Postman'
    ]
  },
  contact: {
    title: 'Contact',
    content: {
      text: 'Email me',
      email: 'luisfvperes@gmail.com',
      social: {
        github: 'https://github.com/lfvperes',
        linkedin: 'https://linkedin.com/in/lfvperes',
      }
    }
  },
  copyright: 'All rights reserved.'
};

const ptPortfolio: PortfolioData = {
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
  resume: {
    title: 'Ver Currículo',
    content: 'https://rxresu.me/lfvperes/webdev-jr',
  },
  projects: {
    title: 'Projetos',
    content: [
      {
        name: 'VHMS',
      description:
        'Sistema de genenciamento de hospital veterinário feito com Django. Em desenvolvimento.',
      stack: ['Django', 'Python', 'Sqlite3', 'Axios', 'CI/CD'],
      sourceCode: {
        title: 'Código Fonte',
        content: 'https://github.com/lfvperes/vhms'
      },
      livePreview: {
        title: 'Veja online',
        content: 'https://github.com/lfvperes/vhms'
      },
      },
      {
        name: 'Backsky',
        description:
          'API REST para buscar informações de uma lista de cidades brasileiras ou escolher aleatoriamente. Um banco de dados construído com base em dados públicos do IBGE. Back-end para Cidades do Brasil. Hospedado no Northflank. Página de visualização usando React.',
        stack: ['Django', 'Sqlite3', 'Axios', 'React', 'TypeScript', 'CI/CD'],
        sourceCode: {
          title: 'Código Fonte',
          content: 'https://github.com/lfvperes/Backsky'
        },
        livePreview: {
          title: 'Veja online',
          content: 'https://lfvperes.github.io/Backsky/'
        },
      },
      {
        name: 'Cidades do Brasil',
        description:
          'Um bot Bluesky/X que posta uma cidade brasileira aleatória a cada 12 horas. Ele busca dados da API Backsky e, em seguida, usa as APIs Google Maps Static e Places para buscar mais conteúdo. Automatizado com GitHub Actions.',
        stack: ['TypeScript', 'Django', 'Sqlite3', 'AT Protocol'],
        sourceCode: {
          title: 'Código Fonte',
          content: 'https://github.com/lfvperes/cidades-br'
        },
        livePreview: {
          title: 'Veja online',
          content: 'https://bsky.app/profile/cidades-do-brasil.bsky.social'
        }
      },
      {
        name: 'Twilight Quotes',
        description:
          'Um bot simples do Bluesky que posta uma frase aleatória de Crepúsculo a cada hora. O banco de dados foi construído programaticamente a partir de arquivos de legendas de todos os filmes da série. Automatizado com GitHub Actions.',
        stack: ['TypeScript', 'AT Protocol'],
        sourceCode: {
          title: 'Código Fonte',
          content: 'https://github.com/lfvperes/twilight-quotes'
        },
        livePreview: {
          title: 'Veja online',
          content: 'https://bsky.app/profile/twilight-quote.bsky.social'
        }
      },
      {
        name: 'Este portfólio',
        description:
          'Um site de portfólio SPA simples construído com React, TypeScript, Vite e TailwindCSS. Está hospedado no GitHub Pages.',
        stack: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
        sourceCode: {
        title: 'Código Fonte',
        content: 'https://github.com/lfvperes/lfvperes.github.io'
      },
      livePreview: {
        title: 'Veja online',
        content: 'https://lfvperes.github.io'
      }
      },
    ]
  },
  skills: {
    title: {
      title: 'Habilidades & Ferramentas',
      languages: 'Linguagens',
      frontEnd: 'Front-End',
      backEnd: 'Back-End',
      databases: 'Banco de Dados',
      platformsAndTooling: 'Platformas & Tecnologias',
      machineLearning: 'Aprendizado de Máquina',
      concepts: 'Conceitos'
    },
    content: {
      languages: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'C/C++', 'SQL', 'Bash'],
      frontEnd: ['React', 'Vue.js', 'Axios', 'TailwindCSS', 'Bootstrap'],
      backEnd: ['Node.js', 'Express', 'Django', 'NestJS'],
      databases: ['SQLite3', 'MongoDB', 'PostgreSQL'],
      platformsAndTooling: ['Docker', 'Git', 'GitHub', 'Unix/Linux', 'Vite', 'Jest', 'Vercel', 'npm', 'pip'],
      machineLearning: ['TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn'],
      concepts: ['RESTful APIs', 'Agile', 'CI/CD', 'TDD'],
    },
  },
  workflowAndEnvironment: {
    title: 'Workflow & Ambiente',
    content: [
      'VSCodium',
      'Fedora Linux',
      'Logseq',
      'Postman'
    ],
  },
  contact: {
    title: 'Contato',
    content: {
      text: 'Enviar email',
      email: 'luisfvperes@gmail.com',
      social: {
        github: 'https://github.com/lfvperes',
        linkedin: 'https://linkedin.com/in/lfvperes',
      },
    }
  },
  copyright: 'Todos os direitos reservados.'
};

export { enPortfolio, ptPortfolio };