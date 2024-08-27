import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sm:p-6">
      <div className="container mx-auto flex justify-between items-center px-20 sm:px-6 lg:px-8">
        {/* <div className="font-bold text-xl sm:text-2xl"> </div> */}
        <div className="space-x-2 sm:space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          {/* <Link to="/about" className="hover:text-gray-400">About</Link> */}
          <Link to="/projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
