import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-700 text-white py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-lg mb-4">A short description about you.</p>
        <a
          href="/resume.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          download
        >
          Download Resume
        </a>
      </div>
    </header>
  );
};

export default Header;