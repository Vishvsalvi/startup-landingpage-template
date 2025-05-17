import { motion } from "framer-motion";
import ScrollCard from "./scrollcard";

export default function ScrollCardRow() {
  // Card width (280px) + gap (5px) = 565px for 2 cards
  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center pt-2">
      {/* Container limited to show only 2 cards at a time */}
      <div className="w-full relative">
        {/* Gradient mask and blur effect for right edge */}
        <div className="absolute inset-y-0 right-0 w-[30px] bg-gradient-to-r from-transparent via-white/30 to-white/80 dark:via-zinc-900/30 dark:to-zinc-900/90 z-10 backdrop-blur-[3px] pointer-events-none"></div>
        
        {/* Gradient mask and blur effect for left edge */}
        <div className="absolute inset-y-0 left-0 w-[30px] bg-gradient-to-l from-transparent via-white/30 to-white/80 dark:via-zinc-900/30 dark:to-zinc-900/90 z-10 backdrop-blur-[3px] pointer-events-none"></div>
        
        {/* Cards container */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-5"
            animate={{ 
              x: [0, "-100%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }
            }}
          >
            {Array(6).fill(0).map((_, index) => (
              <ScrollCard key={`card-${index}`} />
            ))}
          </motion.div>
          
          <motion.div 
            className="flex gap-5 absolute left-full"
            animate={{ 
              x: [0, "-100%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }
            }}
          >
            {Array(6).fill(0).map((_, index) => (
              <ScrollCard key={`card-duplicate-${index}`} />
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
} 