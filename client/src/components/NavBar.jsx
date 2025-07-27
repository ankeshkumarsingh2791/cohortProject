
import { useEffect,useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import BrandLogo from './utils/Logo/BrandLogo';


const navLinks = [
  { name: 'Work', path: '/' },
  { name: 'Capabilities', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Blogs', path: '/' },
  { name: 'Contact Us', path: '/contact' },
];

const DesktopNav = () => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-[#1C0B80]/90 to-[#4B14B0]/90 backdrop-blur-md p-3 sm:p-4 fixed top-0 w-full z-[100] shadow-md">
      <div className="ml-4 sm:ml-7 text-xl sm:text-2xl font-extrabold">
        <BrandLogo/>
      </div>
      <div className="flex items-center">
        {navLinks.map(({ name, path }, idx) => (
          <NavLink
            key={idx}
            to={path}
            className="group relative mx-2 sm:mx-4 lg:mx-6 text-white transition duration-300"
          >
            <span className="pb-1">{name}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};


// Mobile Nav
const MobileNav = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isHamburger);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isHamburger]);

  return (
    <div className="sm:hidden fixed top-0 w-full z-50">
      {/* Top Nav */}
      <div
        className={`flex justify-between items-center px-4 py-3 text-lg text-white transition-all ${
          isScrolled ? 'bg-[#1C0B80]/90 shadow-md' : 'bg-transparent'
        }`}
      >
        <div className=""><BrandLogo/></div>
        <button onClick={() => setIsHamburger(!isHamburger)} aria-label="Toggle menu">
          {isHamburger ? (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 6H3" />
              <path d="M21 12H9" />
              <path d="M21 18H7" />
            </svg>
          )}
        </button>
      </div>

      {/* Fullscreen Menu */}
      {isHamburger && (
        <div className="fixed inset-0 bg-[#0F0556] z-40 text-white px-6 pt-6 pb-10">
          <div className="flex justify-end">
            <button onClick={() => setIsHamburger(false)} aria-label="Close menu">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10 flex flex-col gap-6"
          >
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => setIsHamburger(false)}
                className={({ isActive }) =>
                  `text-3xl font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-blue-400' : 'text-slate-100 hover:text-blue-400'
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};


const NavBar = () => {
  return (
    <>
      <div className="hidden sm:block">
        <DesktopNav />
      </div>
      <div className="block sm:hidden">
        <MobileNav />
      </div>
    </>
  );
};

export default NavBar;
