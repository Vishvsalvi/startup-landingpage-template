import { ReactNode } from "react"
import Terminal from "../components/Terminal"
import DashboardPreview from "@/components/dashboardpreview";
import ScrollCardRow from "@/components/ScrollCardRow";
import LlmSelector from "@/components/LlmSelector";


interface GridItem {
  id: number;
  title: string;
  description: string;
  background: ReactNode;
  size: "small" | "large";
}


export const BRAND_IMAGES = [
    {
      id: 2,
      src: "/microsoft.png",
      alt: "OpenAI"
    },
    {
      id: 3,
      src: "/spotify.png",
      alt:"Spotify"
    },
    {
      id: 4,
      src: "/netflix.png",
      alt: "Netflix"
    },
    {
      id: 5,
      src: "/deepmind.png",
      alt: "DeepMind"
    },
    {
      id: 6,
      src: "/cursor.png",
      alt: "Cursor"
    }
  ]



export const CHIPSTYLE = "text-xs bg-zinc-900 text-white relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:h-1/6"

export const GRID_ITEMS: GridItem[] = [
  {
    id: 1,
    title: "Dedicated CLI",
    description: "Easy to use CLI to deploy and scale your platform.",
    size: "small",
    background: (
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <Terminal />
      </div>
    )
  },
  {
    id: 2,
    title: "Intuitive workflow",
    description: "With our intuitive workflow, you can easily manage your app without complex steps.",
    size: "large",
    background: (
      <div className=" absolute inset-0 flex items-center justify-center">
         <DashboardPreview />
      </div>
    )
  },
  {
    id: 3,
    title: "Hosting over the edge",
    description: "With our edge network, we host your website by going into each city by ourselves.",
    size: "large",
    background: (
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <ScrollCardRow />
      </div>
    )
  },
  {
    id: 4,
    title: "AI Model Selection",
    description: "Choose from the latest AI models to power your creative projects.",
    size: "small",
    background: (
      <div className="absolute top-3 right-5">
        <LlmSelector />
      </div>
    )
  }
];