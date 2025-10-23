import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

const CustomCursor: React.FC = () => {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const interactiveElements = document.querySelectorAll('a, button, [data-interactive]');
    
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const cursorSize = isHovering ? 40 : 24;
  const clickScale = isClicking ? 0.8 : 1;

  const borderColor = theme === 'dark' ? '#00F5FF' : '#3B82F6';
  const hoverBgColor = theme === 'dark' ? 'rgba(0, 245, 255, 0.2)' : 'rgba(59, 130, 246, 0.2)';

  return (
    <div className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 hidden md:block"
         style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      <div
        className="rounded-full border-2 transition-all duration-300 ease-in-out"
        style={{
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          transform: `scale(${clickScale})`,
          borderColor: borderColor,
          backgroundColor: isHovering ? hoverBgColor : 'transparent',
        }}
      />
    </div>
  );
};

export default CustomCursor;
