export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      {/* Neon Glow Title */}
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] animate-pulse mb-6">
        Welcome
      </h1>

      {/* Glassmorphism Card */}
      <p className="border border-gray-600 p-6 text-lg text-gray-300 text-center max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-yellow-400/30 transition duration-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi nesciunt ab corporis labore a illo veniam. Sunt impedit molestias quas minus deleniti, perspiciatis, corporis, sed tempore ullam nesciunt nam vero?
      </p>

      {/* Animated Button */}
      <div className="mt-8">
        <a href="/home" className="relative inline-block text-lg font-bold group">
          <span className="relative z-10 block px-8 py-3 bg-red-500 text-white rounded-lg shadow-xl transition-all transform group-hover:scale-105 group-hover:shadow-red-500/50">
            Home
          </span>
          <span className="absolute inset-0 bg-red-600 rounded-lg blur-xl opacity-80 transition-opacity group-hover:opacity-100"></span>
        </a>
      </div>
    </div>
  );
}
