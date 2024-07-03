import React from 'react';
import { Link } from 'react-router-dom';
import { SEOWrapper } from '../components/SEOWrapper';
import { SITE_URL } from '../constants';

const NotFound: React.FC = () => {
  return (
    <SEOWrapper
      title="404 - Page Not Found | Formal Verification"
      description="Oops! This page seems to have failed our formal verification process."
      canonicalUrl={`${SITE_URL}404`}
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg mb-6">
            Oops! It seems this page has failed our formal verification process.
          </p>
          <div className="space-y-4 mb-8">
            <p className="italic">
              In the world of formal verification, we prove the absence of bugs.
              Unfortunately, we can't prove the absence of this page.
            </p>
            <p className="italic">
              We tried to model check this URL, but it led to a state explosion ¯\_(ツ)_/¯
            </p>
          </div>
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </SEOWrapper>
  );
};

export default NotFound;
