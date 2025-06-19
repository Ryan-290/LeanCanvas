import { Link , NavLink } from "react-router-dom";

import { FaHome, FaInfoCircle, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header () {

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome />, to: '/' },
    { id: 'about', label: 'About', icon: <FaInfoCircle />, to: '/about' },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope />, to: '/contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 bg-gray-800 text-white px-8">
      <div className="container mx-auto w-auto h-16 flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-bold">Lean Canvas</Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
          <NavLink key={item.id} to={item.to} className="hover:text-gray-300">
            <div className="flex space-x-2 items-center">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          </NavLink>
          ))}
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          <FaBars/>
        </button>
        <button className="hidden md:block bg-sky-700 hover-bg-sky-500 text-white font-bold px-4 py-2 rounded">
          버튼(비어있음)
        </button>
      </div>

      {/* Mobile Menu */}
      <aside className={`
        fixed top-0 left-0 w-64 h-full bg-gray-800 z-50
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:hidden transform transition-transform duration-300 linear`
        }>
        <div className="flex justify-end p-4">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <FaTimes className="w-6 h-6"/>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          {navItems.map((item) => (
          <NavLink key={item.id} to={item.to} className="hover:text-gray-300">
            <div className="flex space-x-2 items-center">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          </NavLink>
          ))}
        </nav>
      </aside>
    </header>
  )
}