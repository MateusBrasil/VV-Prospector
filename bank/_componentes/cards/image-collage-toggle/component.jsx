import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const IMAGES = [
  { src: 'https://picsum.photos/seed/pic1/400/500', x: 10, y: -15, rotate: 15 },
  { src: 'https://picsum.photos/seed/pic2/400/500', x: 0, y: 10, rotate: -20 },
  { src: 'https://picsum.photos/seed/pic3/400/500', x: -10, y: -30, rotate: 10 },
  { src: 'https://picsum.photos/seed/pic4/400/500', x: 10, y: -10, rotate: -15 },
  { src: 'https://picsum.photos/seed/pic5/400/500', x: 5, y: 10, rotate: 5 },
  { src: 'https://picsum.photos/seed/pic6/400/500', x: 10, y: -20, rotate: -10 },
  { src: 'https://picsum.photos/seed/pic7/400/500', x: 20, y: 40, rotate: 10 },
  { src: 'https://picsum.photos/seed/pic8/400/500', x: 0, y: -20, rotate: -20 },
];

export default function App() {
  const [isOrganized, setIsOrganized] = useState(false);

  const toggleLayout = () => {
    setIsOrganized(prev => !prev);
  };
  
  useEffect(() => {
    document.addEventListener('click', toggleLayout);
    return () => document.removeEventListener('click', toggleLayout);
  }, []);

  return (
    <>
      {/* Injecting the specific font and body styles requested */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');
        
        body {
          background-color: #ececec;
          font-family: "Bricolage Grotesque", sans-serif;
          cursor: crosshair;
          margin: 0;
          min-height: 100vh;
        }
        
        /* Ensure the root element spans properly */
        #root {
          display: grid;
          place-content: center;
          min-height: 100vh;
        }
      `}</style>

      <div className="flex flex-col items-center justify-center gap-12 select-none w-full max-w-[100vw] overflow-x-hidden p-8">
        <div className="text-[#222] text-2xl font-semibold text-center z-10">
          Click anywhere to toggle the layout
        </div>
        
        <motion.div className="h-40 flex items-center justify-center max-w-full flex-wrap sm:flex-nowrap">
          {IMAGES.map((e, i) => (
            <motion.div 
              key={i} 
              className={`w-[80px] sm:w-[120px] aspect-[4/5] ${isOrganized ? '' : 'shadow-lg'} shrink-0`}
              initial={{ opacity: 0, scale: 0.7 }}
              transition={{ type: 'spring', bounce: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: isOrganized ? 0 : e.x, 
                y: isOrganized ? 0 : e.y,
                rotate: isOrganized ? 0 : e.rotate,
              }}
            >
              <img 
                src={e.src} 
                alt="collage part" 
                draggable={false}
                className="w-full h-full object-cover rounded-sm pointer-events-none" 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}