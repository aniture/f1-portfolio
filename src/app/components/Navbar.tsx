'use client';

 function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-lg">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="text-xl font-bold tracking-wide">Home</div>
        <ul className="flex gap-6 text-sm md:text-base font-medium">
          <li><a href="#about" className="hover:text-red-500 transition">About</a></li>
          <li><a href="#projects" className="hover:text-red-500 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-red-500 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-red-500 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar