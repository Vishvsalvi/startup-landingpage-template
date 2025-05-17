import React from "react";

interface Agent {
    id: number;
    name: string;
    description: string;
    inspiration: string;
    img: string;
}
const Democard = ({agent}: {agent: Agent}) => {
  // Hardcoded image URL for demonstration
  const imageUrl = agent.img;

  return (
    <div 
      className="hover:grayscale-0 grayscale group relative shadow-lg overflow-hidden rounded-2xl min-h-[400px] bg-cover bg-top bg-no-repeat transition-all duration-300 ease-in-out hover:shadow-xl"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
        <span className="mb-2 inline-block rounded-md bg-white/20 px-2 py-1 font-mono text-sm font-bold backdrop-blur-sm">
          {agent.name}
        </span>
        <p className="text-lg font-semibold mb-1">{agent.inspiration}</p>
        
        {/* Hidden Description - Appears on hover */}
        <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
          <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
            {agent.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Democard;
