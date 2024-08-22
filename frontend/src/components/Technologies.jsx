import React from 'react';

const technologies = [
  { name: 'React', logo: '/assets/react-logo.png' },
  { name: 'Tailwind CSS', logo: '/assets/tailwind-logo.png' },
  // Add more technologies here
];

const Technologies = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Technologies I Use</h2>
        <div className="flex flex-wrap justify-center">
          {technologies.map((tech) => (
            <div key={tech.name} className="p-4">
              <img src={tech.logo} alt={`${tech.name} logo`} className="h-20 mx-auto mb-2" />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;