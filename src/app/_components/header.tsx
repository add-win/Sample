function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <img src="globe.svg" alt="Globe" className="w-10 h-10" />
        <ul className="flex gap-6">
          <li className="px-4 py-2 bg-white text-blue-700 rounded-lg cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-300 font-bold">
            Log In
          </li>
          <li className="px-4 py-2 bg-white text-blue-700 rounded-lg cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-300 font-bold">
            Sign In
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
