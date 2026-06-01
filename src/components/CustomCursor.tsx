import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Event delegation to check for hover targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if target or any parent is a button, link, interactive card or has an interactive class
      const isHoverable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('.hover-target') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('cursor-pointer');

      setHovered(!!isHoverable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <>
      {/* Outer Halo */}
      <div
        className="custom-cursor fixed top-0 left-0 w-8 h-8 pointer-events-none rounded-full z-50 mix-blend-screen transition-transform duration-300 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          border: '1.5px solid #FFD600',
          boxShadow: hovered 
            ? '0 0 16px rgba(255, 214, 0, 0.8), inset 0 0 8px rgba(255, 214, 0, 0.4)' 
            : '0 0 8px rgba(255, 214, 0, 0.3)',
          transform: `translate3d(-50%, -50%, 0) scale(${clicked ? 0.7 : hovered ? 1.6 : 1})`,
          backgroundColor: hovered ? 'rgba(255, 214, 0, 0.08)' : 'transparent',
        }}
      />
      {/* Micro Core Dot */}
      <div
        className="custom-cursor fixed top-0 left-0 w-2 h-2 pointer-events-none rounded-full z-50 bg-[#FFD600] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          boxShadow: '0 0 6px rgba(255, 214, 0, 1)',
          transform: `translate3d(-50%, -50%, 0) scale(${clicked ? 0.5 : hovered ? 0.2 : 1})`,
        }}
      />
    </>
  );
}
