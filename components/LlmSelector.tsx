import { Switch, Card, CardBody, CardHeader, Button} from "@heroui/react";

export default function LlmSelector() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between px-4 ">
        <h3 className="text-foreground font-medium text-lg">Add LLM</h3>
        <Button className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-white text-sm">
          <span className="text-lg leading-none">+</span>
          <span>Add</span>
        </Button>
      </CardHeader>
      
        <CardBody className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-zinc-200 dark:bg-zinc-900 rounded-md px-3 py-1.5 text-foreground text-xs">
              <span>Grog LLM</span>
            </div>
            <span className="text-foreground text-xs">23rd March</span>
          </div>
          <div className="flex items-center gap-3">
            <Switch  size="sm" className="!h-[18px]" />
            <button className="text-zinc-400 hover:text-white">•••</button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-zinc-200 dark:bg-zinc-900 rounded-md px-3 py-1.5 text-foreground text-xs">
              <span>GPT 4o </span>
            </div>
            <span className="text-foreground text-xs">21st March</span>
          </div>
          <div className="flex items-center gap-3">
            <Switch isSelected={true} size="sm" className="!h-[18px]" />
            <button className="text-foreground hover:text-white">•••</button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-zinc-200 dark:bg-zinc-900 rounded-md px-3 py-1.5 text-foreground text-xs">
              <span>Stable Diffusion</span>
            </div>
            <span className="text-foreground text-xs">3rd May</span>
          </div>
          <div className="flex items-center gap-3">
            <Switch size="sm" className="!h-[18px]" />
            <button className="text-foreground hover:text-white">•••</button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-zinc-200 dark:bg-zinc-900 rounded-md px-3 py-1.5 text-foreground text-xs">
              <span>Llama 2</span>
            </div>
            <span className="text-foreground text-xs">1st April</span>
          </div>
          <div className="flex items-center gap-3">
            <Switch isSelected={true} size="sm" className="!h-[18px]" />
            <button className="text-foreground hover:text-white">•••</button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
} 