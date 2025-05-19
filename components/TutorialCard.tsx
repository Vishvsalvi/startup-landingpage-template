import { ReactNode } from "react";
import { Chip } from "@heroui/react";

interface TutorialCardProps {
  step: string | number;
  title: string;
  description: string;
  background: ReactNode;
}

export function TutorialCard({ step, title, description, background }: TutorialCardProps) {
  return (
    <div className="col-span-12 md:col-span-4 relative group rounded-3xl bg-background dark:bg-zinc-900 overflow-hidden min-h-[400px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
      {/* Top Content Section */}
      <div className="relative z-10 p-8">
        {/* Step Badge */}
        <div className="inline-flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 rounded-full px-3 py-1">
          <span className="text-sm text-foreground font-medium">0{step}</span>
        </div>

        {/* Title and Description */}
        <div className="mt-4 space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-foreground/80">{description}</p>
        </div>
      </div>

      {/* Background Component Container */}
      <div className="absolute inset-x-0 right-2 h-[75%] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            {background}
          </div>
        </div>
      </div>

      {/* Border Ring */}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
    </div>
  );
} 