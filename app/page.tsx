"use client"

import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { GridItem } from "../components/GridItem";
import { GRID_ITEMS, BRAND_IMAGES } from "@/constants/constant";
import { Accordion, AccordionItem, Switch } from "@heroui/react";
import { Pricing } from "@/components/Pricing";
import { PRICING_TIERS } from "@/constants/pricing";
import CallToAction from "@/components/callToAction";

// Define testimonial interface
interface Testimonial {
  id: number;
  name: string;
  username: string;
  handle?: string;
  image: string;
  verified?: boolean;
  text: string;
  additionalText?: string;
  footer?: string;
}

export default function Home() {
  const containerAnimation = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    show: { opacity: 1, filter: "blur(0px)", y: 0 }
  };

  
  const TESTIMONIALS: Testimonial[] = [
    {
      id: 1,
      name: "Elon Musk",
      username: "@elonmusk",
      handle: "",
      image: "",
      text: "Thrilled with this futuristic edge platform—it's a game-changer. The intuitive interface and advanced capabilities redefine how I manage distributed computing. The standout, however, is the incredible support team—swift, expert responses to every query. A perfect combo for seamless ops and top-notch service.",
      footer: "P.s. Way better than any legacy cloud platform"
    },
    {
      id: 2,
      name: "Sam Altman",
      username: "@sama",
      image: "",
      verified: true,
      text: "I just transitioned from traditional cloud stacks to this edge-first system.",
      additionalText: "I'm liking it so far. I wasn’t unhappy with legacy infra—it’s fine. But this platform being open infra and forward-compatible made it worth trying. Looks solid."
    },
    {
      id: 3,
      name: "Marc Andreessen",
      username: "@pmarca",
      image: "",
      text: "(finally) migrated to this edge-native platform after getting frustrated with the rigidity of centralized setups. I must say—the dashboard is 10/10.",
      additionalText: "Bravo to the team (I should have made the switch years ago!)",
      footer: "Open Infra fam"
    },
    {
      id: 4,
      name: "Ben Horowitz",
      username: "@bhorowitz",
      image: "",
      verified: true,
      text: "Exceptional. I've been recommending it to portfolio founders. It's enabling more spontaneous product experimentation, thanks to how fluid and scalable it is."
    },
    {
      id: 5,
      name: "Reid Hoffman",
      username: "@reidhoffman",
      image: "",
      text: "I've used this edge platform for a year and I'm amazed at how fast it’s evolving. This is easily the most robust and forward-thinking infrastructure solution on the market. From edge-native APIs to a clean, developer-first UX, it’ll wow your engineers and customers alike."
    },
    {
      id: 6,
      name: "Denis Nazarov",
      username: "@denisnazarov",
      image: "",
      verified: true,
      text: "One of the most promising edge compute platforms—hands down."
    },
    {
      id: 7,
      name: "Naval Ravikant",
      username: "@naval",
      image: "",
      text: "Why are people still tied to outdated infra? Just today I saw a startup pitch using centralized compute when they know this edge-native platform exists.",
      footer: "It’s a no-brainer—great philosophy, smart team, and the tech actually works."
    },
    {
      id: 8,
      name: "Patrick Collison",
      username: "@patrickc",
      image: "",
      text: "I've been using this edge system for a while now, and it's been an incredible journey. The platform is fast, reliable, and developer-first. Highly recommend exploring it."
    },
    {
      id: 9,
      name: "Brian Armstrong",
      username: "@brian_armstrong",
      image: "",
      text: "Decentralized, high-availability edge infrastructure is the future—and this platform gets it right. It’s become a critical part of our backend architecture."
    },
    {
      id: 10,
      name: "Diane Greene",
      username: "@dianegreene",
      image: "",
      text: "Having worked in cloud infrastructure for decades, it’s refreshing to see something this innovative. Fast deployment, localized latency, and developer freedom—finally in one place."
    },
    {
      id: 11,
      name: "Garry Tan",
      username: "@garrytan",
      image: "",
      text: "The future of edge computing is here. This platform is what I recommend to every founder building something real-time, resilient, and global-first."
    }
  ];
  

  // Helper function to get avatar initial display
  const getAvatarDisplay = (testimonial: Testimonial): string | null => {
    if (testimonial.image) return null;
    if (testimonial.username === 'MI') return 'MI';
    if (testimonial.username === 'CL') return 'CL';
    return testimonial.name.charAt(0);
  };

  const FAQ_ITEMS = [
    {
      id: 1,
      question: "What is the purpose of this platform?",
      answer: "This platform is designed to help you build the best products and change the world by offering cutting edge edge computing technology."
    },
    {
      id: 2, 
      question: "Are startup eligible for free credits?",
      answer: "Yes, we offer free credits to startups. Please contact us to get started."
    },
    {
      id: 3,
      question: "How does the platform work?",
      answer: "The platform works by using the latest in edge computing technology to process data. We use a combination of GPUs, CPUs, and other hardware to process data."
    },
    {
      id: 4,
      question: "Does the platform scales automatically when the demand is high?",
      answer: "Yes, the platform scales automatically when the demand is high. We use a combination of GPUs, CPUs, and other hardware to process data."
    },
    {
      id: 5,
      question: "What component library is used in this project?",
      answer: "We use the latest HeroUI components to build this project. We use a combination of GPUs, CPUs, and other hardware to process data."
    }
  ]
  
  return (
    <>
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden w-full">
        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center text-center w-full py-24">
          <motion.div
            className="space-y-6 px-8"
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            transition={{ 
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
              Scale your business
              <br />
              in flash of a second
            </h1>
            <p className="text-lg md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Our edge computing platform is designed to handle the most demanding workloads, from AI to video processing, with the lowest latency and highest throughput.
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-10 px-8"
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            transition={{ 
              duration: 0.8,
              delay: 0.5,
            }}
          >
            <Button className="rounded-full px-8 py-3 bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
              Create account
            </Button>
            <Button className="dbg-[#27272A] dark:bg-[#27272A] bg-gray-100 text-white dark:text-white text-black rounded-full px-8 py-3  text-foreground font-medium hover:opacity-90 transition-opacity">
              Book a call
            </Button>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="w-full mt-16 px-4 md:px-8 lg:px-12"
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            transition={{ 
              duration: 0.8,
              delay: 0.7,
            }}
          >
            <div className="aspect-[16/9] w-full max-w-[1400px] mx-auto relative">
              {/* Dark border container */}
              <div className="absolute -inset-[1px] rounded-2xl bg-[#27272A]" />
              
              {/* Main container with image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#09090b]">
                <Image
                  src="/heroimg.webp"
                  alt="Platform Dashboard"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                />
                
                {/* Inner border overlay */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Company Logo Section */}
    <section className="w-full mt-[8rem]">
    <h2 className="tracking-tighter text-5xl font-semibold mb-4 text-center">Trusted by top engineering teams</h2>
    <p className="text-muted-foreground mb-8 text-center">Engineers from top companies use our platform to build the best products.</p>
    <div className=" flex flex-wrap justify-center items-center gap-x-10 gap-y-2 px-6 mx-auto">
      {BRAND_IMAGES.map((image) => (
        <div key={image.id}>
          <Image 
            src={image.src} 
            alt={image.alt}
            width={150}
            height={150}
            className=" transition-all duration-300 object-contain w-full h-full"
          />
          </div>
      ))}
    </div>
</section>

        {/* Features Section */}
        <section className="w-full mt-[8rem] px-4 md:px-8 lg:px-12 py-24">
          <h2 className="tracking-tighter text-5xl font-semibold mb-4 text-center">Made for modern product teams</h2>
          <p className="text-muted-foreground mb-8 text-center">Our world class engineering team is here to help you build the best products and change the world.</p>
          <div className="grid grid-cols-12 gap-6 max-w-[1400px] mx-auto">
            {GRID_ITEMS.map((item, index) => (
              <GridItem
                key={item.id}
                title={item.title}
                description={item.description}
                background={item.background}
                size={item.size}
                delay={0.3 + (index * 0.1)}
              />
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <Pricing data={PRICING_TIERS} />

        {/* Testimonials Section */}
        <section className="w-full mt-[8rem] px-4 md:px-8 lg:px-12 py-24">
          <motion.div
            className="text-center"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <h2 className="tracking-tighter text-5xl font-semibold mb-4 text-center">Engineers all across the universe love us</h2>
            <p className="text-muted-foreground mb-8 text-center">Read the impact we've had from those who matter most - our customers.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1400px] mx-auto px-6">
            {/* First column */}
            <div className="grid gap-4 content-start">
              <motion.div 
                key={TESTIMONIALS[0].id} 
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col bg-white/5 backdrop-blur-sm h-fit"
                variants={containerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Testimonial 0 content stays the same */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm font-medium overflow-hidden">
                    {getAvatarDisplay(TESTIMONIALS[0])}
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <span className="font-medium">{TESTIMONIALS[0].name}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {TESTIMONIALS[0].username}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3">{TESTIMONIALS[0].text}</p>
                </div>
                {TESTIMONIALS[0].footer && (
                  <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    {TESTIMONIALS[0].footer}
                  </div>
                )}
              </motion.div>

              <motion.div 
                key={TESTIMONIALS[4].id} 
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col bg-white/5 backdrop-blur-sm h-fit"
                variants={containerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* Testimonial 4 content stays the same */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm font-medium overflow-hidden">
                    {getAvatarDisplay(TESTIMONIALS[4])}
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <span className="font-medium">{TESTIMONIALS[4].name}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {TESTIMONIALS[4].username}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3">
                    {TESTIMONIALS[4].text.includes('Cal.com') ? 
                      TESTIMONIALS[4].text.split('Cal.com').map((part, i, arr) => 
                        i < arr.length - 1 ? (
                          <span key={i}>
                            {part}
                            <span className="text-purple-600 font-medium hover:underline">Cal.com</span>
                          </span>
                        ) : part
                      ) : TESTIMONIALS[4].text
                    }
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Second column */}
            <div className="grid gap-4 content-start">
              <motion.div 
                key={TESTIMONIALS[1].id} 
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col bg-white/5 backdrop-blur-sm h-fit"
                variants={containerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {/* Testimonial 1 content stays the same */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden flex items-center justify-center">
                    <div className="font-medium text-sm">K</div>
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <span className="font-medium">{TESTIMONIALS[1].name}</span>
                      {TESTIMONIALS[1].verified && (
                        <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                        </svg>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {TESTIMONIALS[1].username}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3">
                    {TESTIMONIALS[1].text.includes('cal.com') ? 
                      TESTIMONIALS[1].text.split('cal.com').map((part, i, arr) => 
                        i < arr.length - 1 ? (
                          <span key={i}>
                            {part}
                            <span className="text-purple-600 font-medium hover:underline">cal.com</span>
                          </span>
                        ) : part
                      ) : TESTIMONIALS[1].text
                    }
                  </p>
                  {TESTIMONIALS[1].additionalText && (
                    <p className="mb-3">{TESTIMONIALS[1].additionalText}</p>
                  )}
                </div>
              </motion.div>

              <motion.div 
                key={TESTIMONIALS[5].id} 
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col bg-white/5 backdrop-blur-sm h-fit"
                variants={containerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {/* Testimonial 5 content stays the same */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm font-medium overflow-hidden">
                    <div className="font-medium text-sm">D</div>
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <span className="font-medium">{TESTIMONIALS[5].name}</span>
                      {TESTIMONIALS[5].verified && (
                        <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                        </svg>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {TESTIMONIALS[5].username}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3">{TESTIMONIALS[5].text}</p>
                </div>
              </motion.div>

              <motion.div 
                key={TESTIMONIALS[9].id} 
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col bg-white/5 backdrop-blur-sm h-fit"
                variants={containerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* Testimonial 9 content */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm font-medium overflow-hidden">
                    <div className="font-medium text-sm">J</div>
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <span className="font-medium">{TESTIMONIALS[9].name}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {TESTIMONIALS[9].username}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3">{TESTIMONIALS[9].text}</p>
                </div>
              </motion.div>
            </div>

            {/* Third column */}
            <div className="grid gap-4 content-start">
              <motion.div 
                key={TESTIMONIALS[2].id} 
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col bg-white/5 backdrop-blur-sm h-fit"
                variants={containerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* Testimonial 2 content stays the same */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden flex items-center justify-center">
                    <div className="font-medium text-sm">A</div>
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <span className="font-medium">{TESTIMONIALS[2].name}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {TESTIMONIALS[2].username}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3">
                    {TESTIMONIALS[2].text.includes('@calccom') ? 
                      TESTIMONIALS[2].text.split('@calccom').map((part, i, arr) => 
                        i < arr.length - 1 ? (
                          <span key={i}>
                            {part}
                            <span className="text-purple-600 font-medium hover:underline">@calccom</span>
                          </span>
                        ) : part
                      ) : TESTIMONIALS[2].text
                    }
                  </p>
                  {TESTIMONIALS[2].additionalText && (
                    <p className="mb-3">
                      {TESTIMONIALS[2].additionalText.includes('@peer_rich') ? 
                        TESTIMONIALS[2].additionalText.split('@peer_rich').map((part, i, arr) => 
                          i < arr.length - 1 ? (
                            <span key={i}>
                              {part}
                              <span className="text-purple-600 font-medium hover:underline">@peer_rich</span>
                            </span>
                          ) : part
                        ) : TESTIMONIALS[2].additionalText
                      }
                    </p>
                  )}
                </div>
                {TESTIMONIALS[2].footer && (
                  <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    {TESTIMONIALS[2].footer}
                  </div>
                )}
              </motion.div>

              <motion.div 
                key={TESTIMONIALS[6].id} 
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col bg-white/5 backdrop-blur-sm h-fit"
                variants={containerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {/* Testimonial 6 content stays the same */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm font-medium overflow-hidden">
                    <div className="font-medium text-sm">R</div>
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <span className="font-medium">{TESTIMONIALS[6].name}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {TESTIMONIALS[6].username}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3">
                    {TESTIMONIALS[6].text.includes('@calccom') ? 
                      TESTIMONIALS[6].text.split('@calccom').map((part, i, arr) => 
                        i < arr.length - 1 ? (
                          <span key={i}>
                            {part}
                            <span className="text-purple-600 font-medium hover:underline">@calccom</span>
                          </span>
                        ) : part
                      ) : TESTIMONIALS[6].text
                    }
                  </p>
                </div>
                {TESTIMONIALS[6].footer && (
                  <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    {TESTIMONIALS[6].footer}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Fourth column */}
            <div className="grid gap-4 content-start">
              <motion.div 
                key={TESTIMONIALS[3].id} 
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col bg-white/5 backdrop-blur-sm h-fit"
                variants={containerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {/* Testimonial 3 content stays the same */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <div className="font-medium text-sm">B</div>
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <span className="font-medium">{TESTIMONIALS[3].name}</span>
                      {TESTIMONIALS[3].verified && (
                        <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                        </svg>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {TESTIMONIALS[3].username}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3">{TESTIMONIALS[3].text}</p>
                </div>
              </motion.div>

              <motion.div 
                key={TESTIMONIALS[8].id} 
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col bg-white/5 backdrop-blur-sm h-fit"
                variants={containerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {/* Testimonial 8 content */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm font-medium overflow-hidden">
                    <div className="font-medium text-sm">J</div>
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <span className="font-medium">{TESTIMONIALS[8].name}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {TESTIMONIALS[8].username}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3">{TESTIMONIALS[8].text}</p>
                </div>
              </motion.div>

              <motion.div 
                key={TESTIMONIALS[10].id} 
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col bg-white/5 backdrop-blur-sm h-fit"
                variants={containerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {/* Testimonial 10 content */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm font-medium overflow-hidden">
                    <div className="font-medium text-sm">J</div>
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <span className="font-medium">{TESTIMONIALS[10].name}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {TESTIMONIALS[10].username}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3">{TESTIMONIALS[10].text}</p>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.h2
            className="mt-7 tracking-tighter text-5xl font-semibold text-center mb-4"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >and many more...</motion.h2>
        </section>

      {/* FAQ SECTION */}
      <section className="w-full mt-[8rem] px-4 md:px-8 lg:px-12 py-24">
        <h2 className="tracking-tighter text-5xl font-semibold text-center mb-4">Let's answer your questions</h2>
        <p className="text-muted-foreground mb-8 text-center">Need help with something? Here are some of the most common questions we get.</p>
        <Accordion
         motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              overflowY: "unset",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              overflowY: "hidden",
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}>
          {FAQ_ITEMS.map((item) => (
            <AccordionItem className="mb-4" key={item.id} title={item.question} content={item.answer} >
              <p className="text-foreground text-sm">{item.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="w-full mt-[6rem] px-4 md:px-8 lg:px-12 py-24">
        <h2 className="tracking-tighter text-5xl font-semibold text-center mb-4">Ready to scale your business?</h2>
        <p className="text-muted-foreground mb-8 text-center">Book a call with our team to get started.</p>
        <CallToAction />
      </section>
      </main>
    </>
  );
}