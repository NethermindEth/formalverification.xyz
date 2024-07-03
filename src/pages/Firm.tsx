import { useParams } from 'react-router-dom';
import { firms } from '../data/firms';
import { SITE_URL } from '../constants';
import { SEOWrapper } from '../components/SEOWrapper';
import { Link } from 'react-router-dom';

export const FirmPage = () => {
  const { id } = useParams();
  if (!id) return <div className="container mx-auto p-4">Firm not found</div>;
  const firmId = parseInt(id);
  const firm = firms.find(f => f.id === firmId);

  if (!firm) return <div className="container mx-auto p-4">Firm not found</div>;

  return (
    <SEOWrapper
      title={`${firm.name} | Formal Verification Experts`}
      description={`${firm.name} specializes in ${firm.specialties.join(', ')}. Explore their expertise in ${firm.domains.join(', ')} for blockchain and crypto projects.`}
      canonicalUrl={`${SITE_URL}/firm/${firm.id}`}
    >
      <div className="container mx-auto p-4">
        <div className="flex items-center mb-6">
          <a href={firm.link} target="_blank" rel="noopener noreferrer">
            <img src={`/firm_assets/${firm.svg}`} alt={`${firm.name} logo`} className="w-16 h-16 mr-4" />
          </a>
          <a href={firm.link} target="_blank" rel="noopener noreferrer" className="text-3xl font-bold hover:text-blue-600">
            {firm.name}
          </a>
        </div>
        <p className="mb-6 text-lg">{firm.description}</p>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Specializations</h3>
          <div className="flex flex-wrap gap-2">
            {firm.specialties.map(specialty => (
              <span key={specialty} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {specialty}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Languages</h3>
          <ul className="list-disc list-inside">
            {firm.languages.map(lang => <li key={lang} className="mb-2">{lang}</li>)}
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Supported Stacks</h3>
          <ul className="list-disc list-inside">
            {firm.stacks.map(stack => <li key={stack} className="mb-2">{stack}</li>)}
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Verification Domains</h3>
          <ul className="list-disc list-inside">
            {firm.domains.map(domain => <li key={domain} className="mb-2">{domain}</li>)}
          </ul>
        </section>

        <div className="flex justify-between items-center">
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">&larr; Back to Home</Link>
          <a href={firm.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Visit {firm.name}
          </a>
        </div>
      </div>
    </SEOWrapper>
  );
};
