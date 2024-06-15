import { useEffect, useRef } from 'react';

export const useCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      const cursorWidth = cursorRef.current.offsetWidth;
      const cursorHeight = cursorRef.current.offsetHeight;
      cursorRef.current.style.left = `${x - cursorWidth / 2}px`;
      cursorRef.current.style.top = `${y - cursorHeight / 2}px`;
    };

    window.addEventListener('mousemove', editCursor);

    return () => {
      window.removeEventListener('mousemove', editCursor);
    };
  }, []);

  return cursorRef;
};
