import { motion } from "framer-motion";
import { ReactNode } from "react";
interface GridItemProps {
  title: string;
  description: string;
  background: ReactNode;
  size: "small" | "large";
  delay?: number;
}

const containerAnimation = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  show: { opacity: 1, filter: "blur(0px)", y: 0 }
};

export function GridItem({ title, description, background, size, delay = 0.3 }: GridItemProps) {
  return (
    <motion.div
      className={`col-span-12 ${size === "small" ? "md:col-span-4" : "md:col-span-8"} relative group rounded-3xl bg-white dark:bg-[#09090b] overflow-hidden min-h-[400px] cursor-pointer shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`}
      variants={containerAnimation}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.8, delay }}
    >
      {/* Background Component */}
      <div className="absolute inset-0 bg-white dark:bg-[#09090b]">
        <div className="absolute inset-0 bg-gray-100/50 dark:bg-[#27272A]/50 backdrop-blur-sm flex items-center justify-center">
          {background}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-white/90 via-white/70 to-transparent dark:from-[#09090b] dark:via-[#09090b]/80 dark:to-transparent pt-24">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-3xl pointer-events-none" />
    </motion.div>
  );
} 