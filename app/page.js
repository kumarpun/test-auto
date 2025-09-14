export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="flex justify-between w-full items-center">
        <nav className="flex gap-6">
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center gap-8">
        <div className="relative">
          <div className="absolute -inset-4 bg-indigo-100 rounded-full blur-lg opacity-70"></div>
          <h1 className="relative text-5xl sm:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Hello There!
          </h1>
        </div>
        
        <p className="text-gray-600 max-w-md text-lg">
          Welcome to our beautiful website.
        </p>
        
        <div className="flex gap-4 mt-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md">
            Get Started
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
            Learn More test
          </button>
        </div>
    
      </main>

      <footer className="text-sm text-gray-500 flex flex-col items-center gap-2">
        <div className="flex gap-4">
          <a href="#" className="hover:text-indigo-600 transition-colors"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-indigo-600 transition-colors"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-indigo-600 transition-colors"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-indigo-600 transition-colors"><i className="fab fa-github"></i></a>
        </div>
        <p>© 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}