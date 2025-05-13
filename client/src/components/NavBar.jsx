
import { useEffect,useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import {motion} from 'framer-motion';




const navLinks = [
  { name: 'Work', path: '/' },
  { name: 'Capabilities', path: '/services' },
  { name: 'About Us', path: '/' },
  { name: 'Blogs', path: '/' },
  { name: 'Contact Us', path: '/contact' },
];


const NavBar = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // add bg when scrolled more than 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isHamburger) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isHamburger]);
 


  return (
    <div  className={`w-full  px-4 py-2 text-xl flex justify-between items-center  fixed top-0 left-0 z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-gradient-vertical h-16 shadow-md' : 'bg-transparent'
    }`}>
       <div>Logo</div>
       <div>
        
        <div className=' flex items-center'>
          <button onClick={() => setIsHamburger(!isHamburger)}>
            {isHamburger ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-right-icon lucide-align-right"><path d="M21 12H9"/><path d="M21 18H7"/><path d="M21 6H3"/></svg>}
          </button>
          {isHamburger && (
            <div className=' w-full h-screen absolute top-10 right-0 bg-white  p-4'>
              <motion.div 
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
              className='flex flex-col mt-10 px-8 mb-4 space-y-2 hover:text-blue-400'>
              {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors text-4xl font-medium mt-2 duration-200 ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-800 hover:text-blue-500'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
              </motion.div>
              <hr className='w-full h-2 mt-10 ' />
            </div>
          )}
          
        </div>
       </div>
    </div>
  );
};

export default NavBar;
