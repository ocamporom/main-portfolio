const Header = () => {
  return (
    <header
      className="bg-cover bg-center h-screen text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/rom123.png')" }}
    >
      <div className="bg-gray-700 bg-opacity-70 py-8 sm:py-12 w-full">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Rom Joses Ocampo</h1>
          <p className="text-lg sm:text-xl mb-4">Your Web Developer</p>
          <a
            href="/assets/Rom Joses Ocampo.pdf"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;



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