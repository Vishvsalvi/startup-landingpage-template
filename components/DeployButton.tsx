import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

export default function DeployButton() {
  const [isDeploying, setIsDeploying] = useState(false);
  const controls = useAnimationControls();

  const handleDeploy = async () => {
    setIsDeploying(true);
    await controls.start({
      scale: [1, 0.95, 1],
      transition: { duration: 0.2 }
    });

    // Simulate deployment progress
    setTimeout(() => {
      setIsDeploying(false);
    }, 2000);
  };

  return (
    <div className="w-[320px] bg-[#1C1C1C] rounded-xl p-6 space-y-6">
      {/* Status Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-gray-400">Ready to deploy</span>
        </div>
        <motion.div 
          className="text-xs text-gray-400"
          animate={{ opacity: isDeploying ? 1 : 0 }}
        >
          Deploying...
        </motion.div>
      </div>

      {/* Deploy Button */}
      <motion.button
        className="relative w-full bg-zinc-800 text-white rounded-lg px-6 py-3 font-medium"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        animate={controls}
        onClick={handleDeploy}
        disabled={isDeploying}
      >
        <span className="relative z-10">Deploy to Production</span>
        
        {/* Button Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-lg blur-xl"
          animate={{
            opacity: isDeploying ? [0.2, 0.4, 0.2] : 0.2,
          }}
          transition={{
            duration: 2,
            repeat: isDeploying ? Infinity : 0,
            ease: "easeInOut"
          }}
        />
      </motion.button>

      {/* Deployment Progress */}
      {isDeploying && (
        <div className="space-y-4">
          <motion.div
            className="h-1 w-full bg-gray-800 rounded-full overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          
          {/* Progress Steps */}
          <div className="space-y-3">
            {[
              "Building application...",
              "Running tests...",
              "Optimizing assets...",
              "Deploying to edge..."
            ].map((step, index) => (
              <motion.div
                key={step}
                className="flex items-center space-x-2 text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.4 }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full border-2 border-green-500 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                    // borderColor: ["#3B82F6", "#60A5FA", "#3B82F6"]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                >
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.4
                    }}
                  />
                </motion.div>
                <span className="text-gray-400">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 