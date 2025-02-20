function Header() {
  return (
    <header className="bg-gradient-to-r from-green-400 to-green-500 text-white p-4 shadow-lg rounded-b-2xl">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide">LOGO</h1>

        {/* Navigation */}
        <ul className="flex gap-6">
          <li className="px-4 py-2 bg-white text-green-700 rounded-lg cursor-pointer hover:bg-green-700 hover:text-white transition-all duration-300">
            Log In
          </li>
          <li className="px-4 py-2 bg-white text-green-700 rounded-lg cursor-pointer hover:bg-green-700 hover:text-white transition-all duration-300">
            Sign In
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
