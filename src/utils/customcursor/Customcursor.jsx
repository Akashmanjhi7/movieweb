import React, { useState, useEffect } from 'react';
// import './cursor.css'; // Import your CSS file

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     setPosition({ x: event.clientX, y: event.clientY });
  //   };

  //   document.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <div className="custom-cursor " style={{ left: position.x + 'px', top: position.y + 'px' }} />
  );
};

export default CustomCursor;
