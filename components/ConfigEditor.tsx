import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const CONFIG_CONTENT = [
  "# Scalability",
  "",
  "You're an expert in Scalability, React",
  "",
  "## Performance",
  "",
  "- If user count is more than 1000, then add",
  "  component with 'willChange'",
  "- If animating 'backgroundColor',",
  "  'filter', 'opacity', also use",
  "  willChange"
];

export default function ConfigEditor() {
  const controls = useAnimationControls();

  useEffect(() => {
    const animateText = async () => {
      await controls.start("visible");
      // Reset animation after completion
      setTimeout(async () => {
        await controls.start("hidden");
        animateText();
      }, 3000);
    };

    animateText();
  }, [controls]);

  return (
    <motion.div 
      className="w-[320px] bg-[#1C1C1C] rounded-xl overflow-hidden font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Editor Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#2A2A2A]">
        <span className="text-xs text-gray-400">config.yaml</span>
        <div className="w-16" /> {/* Spacer for alignment */}
      </div>

      {/* Editor Content */}
      <div className="p-4 space-y-1 text-sm">
        {CONFIG_CONTENT.map((line, index) => (
          <motion.div
            key={index}
            className="text-gray-300 font-mono"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  delay: index * 0.15,
                  duration: 0.2
                }
              }
            }}
          >
            {line.startsWith("#") ? (
              <span className="text-neutral-300 text-sm">{line}</span>
            ) : line.startsWith("-") ? (
              <>
                <span className="text-neutral-300">{"  "}</span>
                <span className="text-neutral-300 text-sm">{line}</span>
              </>
            ) : line.includes("'") ? (
              <>
                {line.split("'").map((part, i) => (
                  i % 2 === 0 ? (
                    <span key={i}>{part}</span>
                  ) : (
                    <span key={i} className="text-neutral-300 text-sm">'{part}'</span>
                  )
                ))}
              </>
            ) : (
              line
            )}
          </motion.div>
        ))}

        {/* Cursor */}
        <motion.div
          className="inline-block w-2 h-4 bg-neutral-300"
          animate={{
            opacity: [1, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </motion.div>
  );
} 