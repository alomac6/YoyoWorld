export default function Navbar() {
    return (
      <nav className="bg-blue-600 flex w-full h-16">
        <div className="container mx-0 flex justify-left box-content ml-1/20">
          <ul className="flex items-center justify-between w-6/8">
            <li className="text-white text-2xl flex h-16 items-center hover:text-black hover:underline hover:decoration-2"><a href="placeholder">Gallery</a></li>
            <li className="text-white text-2xl flex h-16 items-center hover:text-black hover:underline hover:decoration-2"><a href="placeholder">Tutorials</a></li>
            <li className="text-white text-2xl flex h-16 items-center hover:bg-blue-950"><a href="placeholder">YoYo Glossary</a></li>
            <li className="text-white text-2xl flex h-16 items-center hover:bg-blue-950"><a href="placeholder">YoYo Glossary</a></li>
          </ul>
        </div>
      </nav>
    );
  }