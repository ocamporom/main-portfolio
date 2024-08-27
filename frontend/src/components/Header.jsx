
import RomImage from '../assets/rom12.png';
import Resume from '../../public/Rom Joses Ocampo_August2024.pdf'

const Header = () => {
  return (
    <header
      className="bg-cover bg-center text-white flex items-center justify-center"
      style={{ height: '77dvh' }}
    >
      <div className="bg-gray-700 bg-opacity-70 py-8 sm:py-10 w-full">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6">
            <img
              src={RomImage}
              alt="Rom"
              className="w-auto h-[300px] md:h-[400px] object-top mb-4 md:mb-0"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                Rom, Your Web Developer
              </h1>
              <p className="text-lg sm:text-xl mb-4">
                
              </p>
              <a
                href= {Resume}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
