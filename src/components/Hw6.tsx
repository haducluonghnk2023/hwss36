import React from 'react'
import { useEffect } from 'react';
export default function Hw6() {
    const [scrollPosition, setScrollPosition] = React.useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        document.title = `Scroll Position: ${position}`;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <div>
        <h2>
            <h2>Hw6</h2>
            <p>chi so cuon man hinh :{scrollPosition}</p>
            <div style={{height:"100px"}}>
                {[...Array(1)].map((_, index) => (
                    <p key={index}>Lorem ipsum dolor sit  quasi quisquam vol</p>
                ))}
            </div>
        </h2>
    </div>
  )
}
