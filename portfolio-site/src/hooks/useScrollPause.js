import { useEffect, useState, useRef } from 'react';

export default function useScrollPause({ timeout = 120 } = {}) {
  const [isScrolling, setIsScrolling] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const setActive = () => {
      setIsScrolling(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIsScrolling(false), timeout);
    };

    const options = { passive: true };
    window.addEventListener('wheel', setActive, options);
    window.addEventListener('touchstart', setActive, options);
    window.addEventListener('touchmove', setActive, options);
    window.addEventListener('scroll', setActive, options);

    return () => {
      window.removeEventListener('wheel', setActive, options);
      window.removeEventListener('touchstart', setActive, options);
      window.removeEventListener('touchmove', setActive, options);
      window.removeEventListener('scroll', setActive, options);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timeout]);

  return isScrolling;
}
