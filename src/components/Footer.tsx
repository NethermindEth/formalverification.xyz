import React from 'react';

export const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 mt-8">
    <div className="container mx-auto text-center">
      <p>Powered by Nethermind</p>
      <p className="text-sm mt-2">
        Is your company missing or incorrect?{' '}
        <a href="https://github.com/NethermindEth/formalverification.xyz/tree/master/src/data" 
           className="underline hover:text-gray-300">
          Add or update via PR
        </a>
      </p>
      <p className="text-sm mt-2">&copy; 2024 Nethermind. All rights reserved.</p>
    </div>
  </footer>
);
