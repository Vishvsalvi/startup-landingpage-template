import { useState } from 'react';

type PlanType = 'yearly' | 'quarterly';

interface PricingToggleProps {
  onPlanChange: (plan: PlanType) => void;
}

export function PricingToggle({ onPlanChange }: PricingToggleProps) {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('yearly');

  const handlePlanChange = (plan: PlanType) => {
    setSelectedPlan(plan);
    onPlanChange(plan);
  };

  return (
    <div className="flex items-center gap-2 bg-background p-1 rounded-full max-w-fit">
      <button
        onClick={() => handlePlanChange('yearly')}
        className={`px-4 py-1.5 rounded-full text-sm transition-all ${
          selectedPlan === 'yearly' 
            ? 'text-white bg-neutral-800' 
            : 'text-neutral-500 hover:text-neutral-400'
        }`}
      >
        Pay Yearly
     
      </button>
      
      
      <button
        onClick={() => handlePlanChange('quarterly')}
        className={`px-4 py-1.5 rounded-full text-sm transition-all ${
          selectedPlan === 'quarterly' 
            ? 'text-white bg-neutral-800' 
            : 'text-neutral-500 hover:text-neutral-400'
        }`}
      >
        Pay Quarterly
      </button>
    </div>
  );
} 