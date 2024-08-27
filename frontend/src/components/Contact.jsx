import gmailImage from "../assets/gmail.webp";
import githubImage from "../assets/github.webp";
import linkedInImage from "../assets/linkedin.png";

const Contact = () => {
  return (
    <section className="bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <div className="flex justify-center space-x-8">
        
          <a href="mailto:ocamporomjoses@gmail.com" className="text-blue-400 hover:underline">
            <img src={gmailImage} alt="gmail" className="w-[100px] h-[100px]" />
          </a>
          
          <a href="https://github.com/ocamporom" className="text-blue-400 hover:underline">
            <img src={githubImage} alt="github" className="w-[100px] h-[100px]" />
          </a>
          
          <a href="https://www.linkedin.com/in/rom-joses-ocampo-4610471a2" className="text-blue-400 hover:underline">
            <img src={linkedInImage} alt="LinkedIn" className="w-[100px] h-[100px]" />
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
