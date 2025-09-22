import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import type { PortfolioData } from './portfolio';
import { enPortfolio, ptPortfolio } from './portfolio'

function App() {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(enPortfolio);

  useEffect(() => {
    async function loadPortfolioData() {
      if (language === 'en') {
        setPortfolioData(enPortfolio);
      } else {
        setPortfolioData(ptPortfolio);
      }
    }

    loadPortfolioData();
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'pt' : 'en'));
  };

  return (
    <div id='top' className='bg-gray-900 text-white'>
      <Navbar toggleLanguage={toggleLanguage} language={language} />
      <main>
        <Hero
          name={portfolioData.name}
          intro={portfolioData.intro}
          title={portfolioData.title}
          description={portfolioData.description}
        />
        <About
          about={portfolioData.about}
          resume={portfolioData.resume}
          contact={portfolioData.contact}
        />
        <Projects projects={portfolioData.projects} />
        <Skills
          skills={portfolioData.skills}
          workflowAndEnvironment={portfolioData.workflowAndEnvironment}
        />
        <Contact
          contact={portfolioData.contact}
          resume={portfolioData.resume.content}
          language={language}
        />
      </main>
      <Footer name={portfolioData.name} social={portfolioData.contact.content.social} copyright={portfolioData.copyright} />
      <ScrollToTop />
    </div>
  );
}

export default App;