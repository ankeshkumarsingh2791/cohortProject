import { useEffect, useState } from 'react';

const useBreakpointValue = () => {
  const [xOffset, setXOffset] = useState(200);

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth >= 768) {
        setXOffset(400); // md and above
      } else {
        setXOffset(200); // below md
      }
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  return xOffset;
};

export default useBreakpointValue;
