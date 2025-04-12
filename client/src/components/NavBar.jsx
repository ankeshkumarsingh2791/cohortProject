
import { useState } from 'react';

import link from "react-dom"




export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  // { label: 'Pricing', path: '/pricing' },
  { label: 'Contact us', path: '/contact' },
];

const NavBar = () => {
  const [isHamburger, setIsHamburger] = useState(false);
 


  return (
    <div className='max-w-[100rem] w-full bg-blue-300 fixed top-0 z-50'>
      {/* Top Navigation */}
     
      {/* Main Navigation */}
      <div className='w-full md:px-4 shadow-xl'>
        <div className='w-full flex justify-between items-center p-2 lg:px-3'>
          {/* Logo */}
          <div className='flex'>
            <button href='/'>
              {/* <Logo
                className='text-black max-md:h-10 max-lg:h-12 max-xl:h-14 2xl:h-[3.3rem]'
                src='FooterLogo.svg'
                alt='logo For Nav'
              /> */}
              ChaiCode
            </button>
          </div>
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center pr-2 gap-6'>
            <div className='text-black flex items-center gap-6'>
              {navItems.map((item) => (
                <span key={item.path}>
                  <button
                    href={item.path}
                    className={`hover:text-primary transition-colors 
                     
                    `}
                  >
                    {item.label}
                  </button>
                </span>
              ))}
              <button
                type='button'
                className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-primaryDull transition-all'
                text='Login'
               
              ></button>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className='lg:hidden '>
            <button id='text' >
              {isHamburger ? (
                // <RiCloseLine className=' text-cross text-xl cursor-pointer' /> 
                "kja"
              ) : (
                // <RiMenu2Line className=' text-primary text-xl cursor-pointer' />
                "lk"
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isHamburger && (
        <div className='fixed inset-0  z-0' onClick={toggler}>
          <div
            className='fixed top-20 right-0 w-full bg-white shadow-lg px-6 '
            // onClick={(e) => e.stopPropagation()}
          >
           <nav className='flex flex-col py-4 items-center justify-center gap-6'>
              {navItems.map((item) => (
                <span 
                  key={item.path} 
                  className={`text-lg w-full flex px-4 justify-center items-center transition-colors py-2 `}
                >
                  <button href={item.path} onClick={toggler}>
                    {item.label}
                  </button>
                </span>
              ))}
              <button
                type='button'
                className='bg-blue-500 w-full text-white px-4 py-2 rounded-3xl hover:bg-blue-700 transition-all'
                text='Login'
                onClick={()=>{
                //   toggler();
                //   redirect('/login')
                }}
              ></button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
