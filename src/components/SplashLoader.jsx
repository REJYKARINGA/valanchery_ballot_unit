import React from 'react';

const SplashLoader = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="relative">
        {/* Circular loader with a quarter arc (90 degrees) that rotates */}
        <div className="absolute inset-0 border-4 border-black rounded-full m-4" 
             style={{
               borderTopColor: 'transparent',
               borderRightColor: 'transparent',
               borderBottomColor: 'transparent',
               animation: 'rotate 1.5s linear infinite'
             }}></div>
        
        {/* Umbrella image */}
        <img 
          src="/umbrella.png" 
          alt="Loading..." 
          className="w-20 h-20 m-5 p-2 object-contain"
        />
      </div>
      
      {/* Keyframes for rotation animation in global styles */}
      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SplashLoader;