import { Button } from "@heroui/button";
import { Chip, Switch} from "@heroui/react";
import { Check } from "lucide-react";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PricingFeature {
  name: string;
}

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

interface PricingProps {
  data: PricingTier[];
}

const YEARLY_DISCOUNT = 0.8; // 20% discount for yearly plans

export function Pricing({ data }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const getPrice = (basePrice: number) => {
    const price = isYearly ? basePrice * 12 * YEARLY_DISCOUNT : basePrice;
    return price.toFixed(0);
  };

  const getCardAnimation = (index: number) => {
    // First card (Basic) slides from left
    if (index === 0) {
      return {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 },
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
      };
    }
    // Last card (Enterprise) slides from right
    if (index === data.length - 1) {
      return {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 },
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
      };
    }
    // Middle card (Pro) fades in
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 },
      transition: { duration: 0.8, ease: "easeOut" }
    };
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-24">
      <h2 className="tracking-tighter text-5xl font-semibold text-center mb-4">Pricing</h2>
      <p className="text-muted-foreground mb-8 text-center">We offer a range of pricing options to suit your needs.</p>
      
      {/* Monthly/Yearly Toggle */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <span className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
        <Switch 
          defaultSelected={isYearly}
          onValueChange={setIsYearly}
          className="data-[selected=true]"
        />
        <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Yearly</span>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {data.map((tier, index) => (
          <motion.div
            key={tier.name}
            {...getCardAnimation(index)}
            className="shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-col p-6 dark:border-none border border-zinc-200 dark:bg-zinc-900 rounded-xl relative"
          >
            {tier.isPopular && (
              <div className="absolute -top-3 right-4">
                <Chip className="bg-red-500 text-white text-xs">Popular</Chip>
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">${getPrice(tier.price)}</span>
              <span className="text-muted-foreground">/ {isYearly ? 'year' : 'month'}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              billed {isYearly ? 'yearly' : 'monthly'}
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
              {tier.features.map((feature) => (
                <li key={feature.name} className="flex items-center gap-2">
                  <Check 
                    className={`w-5 h-5 ${
                      tier.name === "BASIC" 
                        ? "text-foreground" 
                        : "text-green-500"
                    }`} 
                  />
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
            <Button 
              className={
                tier.isPopular 
                  ? "w-full bg-foreground text-background hover:opacity-90"
                  : "w-full bg-background dark:bg-zinc-800 dark:border-none border border-zinc-200 text-foreground hover:bg-foreground dark:hover:text-foreground hover:text-background"
              }
            >
              Subscribe
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">{tier.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 