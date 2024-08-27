import React from 'react';
import Header from '../components/Header';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';
import ProjectPage from '../components/ProjectsPage';

const Home = () => {
  return (
    <>
      <Header />
      <ProjectPage/>
      <Technologies />
      <Contact />
    
    </>
  );
};

export default Home;