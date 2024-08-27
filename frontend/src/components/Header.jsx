
import RomImage from '../assets/rom12.png';

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
                href="/assets/Rom Joses Ocampo.pdf"
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
// import RomImage from '../assets/rom12.png';

// const Header = () => {
//   return (
//     <header
//       className="bg-cover bg-center h-screen text-white flex items-center justify-center"
//       style={{ height: '77dvh' }}
//       // style= {{backgroundImage: "url('../assets/rom123.png')" }}
//     >
//       <div className="bg-gray-700 bg-opacity-70 py-8 sm:py-10 w-full">
//         <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
//             {/* <div>
//             <img src={RomImage} alt="rom" className="w-auto h-[500px]" />
//             </div> */}
//             <div className="flex justify-center items-center">
//               <img src={RomImage} alt="rom" className="w-auto h-[300px] object-top" />
//             </div>
//           </h1>
//           <p className="text-lg sm:text-xl mb-4">Rom, Your Web Developer</p>
//           <a
//             href="/assets/Rom Joses Ocampo.pdf"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             download
//           >
//             Download Resume
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// const Header = () => {
//   return (
//     <div>
//     <header className="bg-gray-700 text-white py-8 sm:py-12">
//       <div>
//       <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Rom Joses Ocampo</h1>
//         <p className="text-lg sm:text-xl mb-4">Your Web Developer</p>
//         <a
//           href="/assets/Rom Joses Ocampo.pdf"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           download
//         >
//           Download Resume
//         </a>
//       </div>
//       </div>
//     </header>
//     </div>
//   );
// };

// export default Header;
