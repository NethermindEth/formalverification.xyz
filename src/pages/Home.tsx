import React from 'react';
import { firms } from '../data/firms';
import { SITE_URL } from '../constants';
import { SEOWrapper } from '../components/SEOWrapper';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [selectedSpecialty, setSelectedSpecialty] = React.useState("");
  const [selectedFvLanguage, setSelectedFvLanguage] = React.useState("");
  const specialties = Array.from(new Set(firms.flatMap(firm => firm.specialties)));
  const fvLanguages = Array.from(new Set(firms.flatMap(firm => firm.fv_language)));
  const [shuffledFirms, setShuffledFirms] = React.useState(firms);

  React.useEffect(() => {
    const storedFirms = localStorage.getItem('shuffledFirms');
    const lastShuffleDate = localStorage.getItem('lastShuffleDate');
    const today = new Date().toDateString();

    if (storedFirms && lastShuffleDate === today) {
      setShuffledFirms(JSON.parse(storedFirms));
    } else {
      const shuffled = [...firms].sort(() => 0.5 - Math.random());
      setShuffledFirms(shuffled);
      localStorage.setItem('shuffledFirms', JSON.stringify(shuffled));
      localStorage.setItem('lastShuffleDate', today);
    }
  }, []);

  const filteredFirms = shuffledFirms.filter(firm =>
    (selectedSpecialty === "" || firm.specialties.includes(selectedSpecialty)) &&
    (selectedFvLanguage === "" || firm.fv_language.includes(selectedFvLanguage))
  );


  return (
    <SEOWrapper
      title="Formal Verification in Crypto | Top Firms and Specialties"
      description="Explore top formal verification firms specializing in blockchain and cryptocurrency technologies. Discover experts in smart contracts, ZK proofs, and more."
      canonicalUrl={SITE_URL}
    >
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Explore Top Formal Verification Firms</h2>
        <p className="mb-8 text-lg">Discover firms specializing in blockchain and cryptocurrency technologies.</p>

        <p className="mb-8 text-lg">
          <a href="/about" className="text-blue-600 hover:underline">Why formal verification?</a> Formal verification provides a higher level of assurance compared to traditional auditing and testing methods by using mathematical proofs to demonstrate the correctness and security of software systems under all possible conditions.
        </p>
        <div className="mb-8 flex gap-4">
          <select id="specialty" value={selectedSpecialty} onChange={e => setSelectedSpecialty(e.target.value)} className="w-1/2 p-2 border rounded">
            <option value="">All Specialties</option>
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>{specialty}</option>
            ))}
          </select>
          <select id="fv_language" value={selectedFvLanguage} onChange={e => setSelectedFvLanguage(e.target.value)} className="w-1/2 p-2 border rounded">
            <option value="">All FV Languages</option>
            {fvLanguages.map(fvLanguage => (
              <option key={fvLanguage} value={fvLanguage}>{fvLanguage}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFirms.map(firm => (
            <Link to={`/firm/${firm.id}`} key={firm.id}>
            <div key={firm.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-5 flex items-center">
                <img src={`firm_assets/${firm.svg}`} alt={firm.name} className="w-12 h-12 mr-4" />
                <h3 className="text-xl font-semibold">{firm.name}</h3>
              </div>
              <div className="px-5 py-3 border-t border-gray-200">
                <p className="text-sm text-gray-600 line-clamp-2">{firm.description}</p>
              </div>
              <div className="px-5 pb-5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {firm.specialties.map(specialty => (
                    <span key={specialty} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {firm.fv_language.map(fv_language => (
                    <span key={fv_language} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {fv_language}
                    </span>
                  ))}
                </div>
                <Link to={`/firm/${firm.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More &rarr;
                </Link>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </SEOWrapper>
  );
};
