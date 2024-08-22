import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <div className="space-y-4">
          <a href="mailto:ocamporomjoses@gmail.com" className="text-blue-400 hover:underline">Email Me</a><br/>
          <a href="https://github.com/ocamporom" className="text-blue-400 hover:underline">GitHub</a><br/>
          <a href="https://www.linkedin.com/in/rom-joses-ocampo-4610471a2" className="text-blue-400 hover:underline">LinkedIn</a><br/>
        </div>
      </div>
    </section>
  );
};

export default Contact;