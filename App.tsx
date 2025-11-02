
import React from 'react';

const App: React.FC = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex items-center justify-center font-sans">
      <div className="text-center p-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Hello YHacks!!!
        
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          This is a simple React + TypeScript app styled with Tailwind CSS.
        </p>
      </div>
    </main>
  );
};

export default App;
