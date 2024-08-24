import ReactImage from "../assets/react.png"
import TailwindImage from "../assets/tailwind.png"
import HtmlImage from "../assets/html.png"
import Css from "../assets/css.png"
import JsImage from "../assets/js.png"
import MantineImage from "../assets/mantine.png"
import NodeImage from "../assets/node.png"
import ExpressImage from "../assets/Express.png"
import MongoImage from "../assets/mongodb.png"


const technologies = [  

  { name: 'HTML', logo: HtmlImage },
  { name: 'CSS', logo: Css },
  { name: 'Javascript', logo: JsImage },
  { name: 'React', logo: ReactImage },
  { name: 'Tailwind CSS', logo: TailwindImage },
  { name: 'Mantine CSS', logo: MantineImage },
  { name: 'Node JS', logo: NodeImage },
  { name: 'Express JS', logo: ExpressImage },
  { name: 'Mongo Db', logo: MongoImage },

  // Add more technologies here
];

const Technologies = () => {
  return (
    <section className="bg-gray-100 py-8 sm:py-12">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-zinc-950">My Experiences</h2>
        <div className="flex flex-wrap justify-center">
          {technologies.map((tech) => (
            <div key={tech.name} className="w-1/2 sm:w-1/3 lg:w-1/5 p-4">
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="h-12 sm:h-16 lg:h-20 mx-auto mb-2 object-contain"
              />
              <p className="text-sm sm:text-base text-zinc-950">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;