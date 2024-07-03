import React from 'react';
import { firms, Stack, FVTools, Specialty } from '../data/firms';
import { SITE_URL } from '../constants';
import { SEOWrapper } from '../components/SEOWrapper';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [selectedSpecialty, setSelectedSpecialty] = React.useState<Specialty | "">("");
  const [selectedFvTools, setSelectedFvTools] = React.useState<FVTools | "">("");
  const [selectedStack, setSelectedStack] = React.useState<Stack | "">("");
  const specialties = Array.from(new Set(firms.flatMap(firm => firm.specialties)));
  const fvLanguages = Array.from(new Set(firms.flatMap(firm => firm.fv_language)));
  const stacks = Array.from(new Set(firms.flatMap(firm => firm.stacks)));
  const [shuffledFirms, setShuffledFirms] = React.useState(firms);
  React.useEffect(() => {
    const storedFirms = localStorage.getItem('shuffledFirms');
    const storedHash = localStorage.getItem('firmsHash');
    const currentHash = JSON.stringify(firms).split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0).toString();

    if (storedFirms && storedHash === currentHash) {
      setShuffledFirms(JSON.parse(storedFirms));
    } else {
      const shuffled = [...firms].sort(() => 0.5 - Math.random());
      setShuffledFirms(shuffled);
      localStorage.setItem('shuffledFirms', JSON.stringify(shuffled));
      localStorage.setItem('firmsHash', currentHash);
    }
  }, []);

  const filteredFirms = shuffledFirms.filter(firm =>
    (selectedSpecialty === "" || firm.specialties.includes(selectedSpecialty)) &&
    (selectedFvTools === "" || firm.fv_language.includes(selectedFvTools)) &&
    (selectedStack === "" || firm.stacks.includes(selectedStack))
  );

  const handlePillClick = (e: React.MouseEvent, type: 'specialty' | 'fvTool' | 'stack', value: string) => {
    e.preventDefault();
    e.stopPropagation();
    switch (type) {
      case 'specialty':
        setSelectedSpecialty(prevState => prevState === value ? "" : value as Specialty);
        break;
      case 'fvTool':
        setSelectedFvTools(prevState => prevState === value ? "" : value as FVTools);
        break;
      case 'stack':
        setSelectedStack(prevState => prevState === value ? "" : value as Stack);
        break;
    }
  };

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
          <select id="specialty" value={selectedSpecialty} onChange={e => setSelectedSpecialty(e.target.value as Specialty | "")} className="w-1/3 p-2 border rounded">
            <option value="">All Specialties</option>
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>{specialty}</option>
            ))}
          </select>
          <select id="fv_language" value={selectedFvTools} onChange={e => setSelectedFvTools(e.target.value as FVTools | "")} className="w-1/3 p-2 border rounded">
            <option value="">All FV Tools</option>
            {fvLanguages.map(fvLanguage => (
              <option key={fvLanguage} value={fvLanguage}>{fvLanguage}</option>
            ))}
          </select>
          <select id="stack" value={selectedStack} onChange={e => setSelectedStack(e.target.value as Stack | "")} className="w-1/3 p-2 border rounded">
            <option value="">All Stacks</option>
            {stacks.map(stack => (
              <option key={stack} value={stack}>{stack}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFirms.map(firm => (
            <div key={firm.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-5 flex items-center">
                <img src={`firm_assets/${firm.svg}`} onError={
                  ({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "firm_assets/fallback.svg";
                  }} alt={firm.name} className="w-12 h-12 mr-4" />
                <h3 className="text-xl font-semibold">{firm.name}</h3>
              </div>
              <div className="px-5 py-3 border-t border-gray-200">
                <p className="text-sm text-gray-600 line-clamp-2">{firm.description}</p>
              </div>
              <div className="px-5 pb-5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {firm.specialties.map(specialty => (
                    <span 
                      key={specialty} 
                      className={`cursor-pointer ${selectedSpecialty === specialty ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-800'} text-xs font-medium px-2.5 py-0.5 rounded-full`}
                      onClick={(e) => handlePillClick(e, 'specialty', specialty)}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {firm.fv_language.map(fv_language => (
                    <span 
                      key={fv_language} 
                      className={`cursor-pointer ${selectedFvTools === fv_language ? 'bg-green-500 text-white' : 'bg-green-100 text-green-800'} text-xs font-medium px-2.5 py-0.5 rounded-full`}
                      onClick={(e) => handlePillClick(e, 'fvTool', fv_language)}
                    >
                      {fv_language}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {firm.stacks.map(stack => (
                    <span 
                      key={stack} 
                      className={`cursor-pointer ${selectedStack === stack ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-800'} text-xs font-medium px-2.5 py-0.5 rounded-full`}
                      onClick={(e) => handlePillClick(e, 'stack', stack)}
                    >
                      {stack}
                    </span>
                  ))}
                </div>
                <Link to={`/firm/${firm.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SEOWrapper>
  );
};
