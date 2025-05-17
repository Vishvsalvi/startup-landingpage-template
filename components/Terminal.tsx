import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Terminal = () => {
  const [typingText, setTypingText] = useState("");
  const [showLines, setShowLines] = useState<number[]>([]);
  const command = "pnpm dlx heroui@latest init";
  
  const lines = [
    { text: "Preflight checks.", color: "text-green-400", prefix: "✓" },
    { text: "Validating Tailwind CSS.", color: "text-green-400", prefix: "✓" },
    { text: "Validating import alias.", color: "text-green-400", prefix: "✓" },
    { text: "Checking registry.", color: "text-green-400", prefix: "✓" },
    { text: "Updating tailwind.config.ts", color: "text-green-400", prefix: "✓" },
    { text: "Updating app/globals.css", color: "text-green-400", prefix: "✓" },
    { text: "Success! Project initialization complete", color: "text-gray-200" },
    { text: "You may now add components.", color: "text-gray-200" }
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Type the command
    const typeCommand = (index: number) => {
      if (index <= command.length) {
        setTypingText(command.slice(0, index));
        timeout = setTimeout(() => typeCommand(index + 1), 100);
      } else {
        // Start showing lines after command is typed
        showNextLine(0);
      }
    };

    // Show lines one by one
    const showNextLine = (index: number) => {
      if (index < lines.length) {
        setShowLines(prev => [...prev, index]);
        timeout = setTimeout(() => showNextLine(index + 1), 500);
      } else {
        // Reset everything after a delay
        timeout = setTimeout(() => {
          setTypingText("");
          setShowLines([]);
          typeCommand(0);
        }, 1000);
      }
    };

    typeCommand(0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-full light:bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 font-mono text-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="space-y-1">
        <div className="text-foreground">
          <span className="text-green-400">➜</span>{" "}
          <span className="text-blue-400">~</span>{" "}
          {typingText}
          {typingText !== command && (
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-2 h-4 bg-white ml-1"
            />
          )}
        </div>
        {lines.map((line, index) => (
          showLines.includes(index) && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`${line.color} ${line.prefix ? 'ml-0' : 'ml-4'}`}
            >
              {line.prefix && <span className="mr-2">{line.prefix}</span>}
              {line.text}
            </motion.div>
          )
        ))}
      </div>
    </div>
  );
};

export default Terminal; 