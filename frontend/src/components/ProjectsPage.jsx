import portfolioImage from "../assets/romlogo2.png"
import secondProjectImage from "../assets/p2.png"
import thirdProjectImage from "../assets/genshinimpact.webp"
import fourthProjectImage from "../assets/genshinimpact2.jpg"
import groupProjectImage from "../assets/buddieph.png"


const projects = [
  {
    title: "Portfolio Site",
    link: "https://ocamporom.github.io/rom.portfolio1/",
    description: "My first ever personal portfolio showcasing my skills in HTML and CSS only.",
    logo: portfolioImage, // Replace with the actual path to the logo
  },
  {
    title: "P2 Project",
    link: "https://p2-romcomeinn.netlify.app/",
    description: "A demo project using JAVASCRIPT for showcasing UI/UX design.",
    logo: secondProjectImage, // Replace with the actual path to the logo
  },
  {
    title: "Genshin Impact Project 1",
    link: "https://p3-react-genshinimpact.netlify.app/",
    description: "A fan site for Genshin Impact, built with React.",
    logo: thirdProjectImage, // Replace with the actual path to the logo
  },
  {
    title: "Genshin Impact Project 2",
    link: "https://p4-node-genshinimpactapp-frontend.onrender.com/",
    description: "Another Genshin Impact project with a Node.js backend.",
    logo: fourthProjectImage, // Replace with the actual path to the logo
  },
  {
    title: "Buddie",
    link: "https://buddie.ph/",
    description: "A social platform for connecting with Pets.",
    logo: groupProjectImage, // Replace with the actual path to the logo
  }
];

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-zinc-950">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center mb-4">
              <img src={project.logo} alt={`${project.title} logo`} className="w-100 h-100 mr-4"/>
              <h2 className="text-2xl font-semibold">{project.title}</h2>
            </div>
            <p className="text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;

