import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const surprise = () => {
    window.location.href = "https://e926.net/posts/random?tags=protogen+order:score+rating:safe";
  }

  const notfin = () => {
    alert("This will be implemented in the future");
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);
  return (
    <div className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } backdrop-blur-sm bg-gray-700/50 text-white p-4 rounded-lg shadow-md w-full max-w-4xl border border-purple-400/10 ring-4 ring-purple-400/20 flex justify-center items-center`}>
      <div className="flex flex-col items-center justify-center">
        {/* NavBar Buttons */}
        <div className="flex flex-row items-center justify-center gap-4">
          <button onClick={surprise} className="bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-900/50 hover:border-transparent hover:scale-105 active:scale-95">Home</button>
          <button onClick={notfin} className="bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-900/50 hover:border-transparent hover:scale-105 active:scale-95">Projects</button>
          <button onClick={notfin} className="bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-900/50 hover:border-transparent hover:scale-105 active:scale-95">Blogs</button>
          <button onClick={surprise} className="bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-900/50 hover:border-transparent hover:scale-105 active:scale-95">Click for a surprise</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;