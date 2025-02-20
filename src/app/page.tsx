export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-white p-6">
      <h1 className="text-6xl font-extrabold animate-pulse">
        App Page
      </h1>
      <p className="p-6 text-lg bg-white text-blue-600 text-center max-w-2xl rounded-2xl mt-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi nesciunt ab corporis labore a illo veniam. Sunt impedit molestias quas minus deleniti, perspiciatis, corporis, sed tempore ullam nesciunt nam vero
      </p>
      <div className="mt-8">
        <a href="/home" className="text-lg font-bold group">
          <span className="z-10 px-8 py-3 bg-red-500 text-white rounded-lg">
            Home
          </span>
        </a>
      </div>
    </div>
  );
}
