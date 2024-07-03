import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Formal Verification in Crypto</h1>
      <nav>
        <Link to="/" className="hover:text-gray-300 mr-4">Home</Link>
        <Link to="/about" className="hover:text-gray-300 mr-4">About</Link>
        {/* <Link to="/satoshi-razor" className="hover:text-gray-300">The Future?</Link> */}
      </nav>
    </div>
  </header>
);
