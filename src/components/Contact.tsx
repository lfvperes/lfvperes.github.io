import type { PortfolioData } from '../portfolio';

interface ContactProps {
  contact: PortfolioData['contact'];
  resume: string;
  language: 'en' | 'pt';
}

const Contact = ({ contact }: ContactProps) => {

  if (!contact.email) return null;

  return (
    <section id='contact' className='py-20 text-center'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8'>Contact</h2>
        <a
          href={`mailto:${contact.email}`}
          className='inline-block bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-bold py-4 px-8 rounded-lg transition duration-300 text-xl'
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;