
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
    <div className='w-full px-2 text-xl flex justify-between'>
        <p>nasnj</p>
        <p>kjf</p>
    </div>
  );
};

export default NavBar;
