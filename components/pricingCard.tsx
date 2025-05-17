import React from 'react'
import { Card, CardHeader, CardBody, Button, Divider} from '@heroui/react'  


interface PricingCardProps {
    plan: string;
    price: string;
    features: string[];
    description: string;
}

const PricingCard = ({plan, price, features, description}: PricingCardProps) => {
  const getButtonText = (planType: string) => {
    switch(planType.toLowerCase()) {
      case 'free':
        return 'Get Started';
      case 'pro':
        return 'Start Pro Trial';
      case 'enterprise':
        return 'Contact Sales';
      default:
        return 'Get Started';
    }
  }

  return (
    <Card className="border border-zinc-800 text-white h-full w-full max-w-sm">
        <CardHeader className="flex flex-col p-6 pb-4 items-start text-left">
            <h3 className="text-xl font-semibold tracking-tight text-white mb-2 text-left w-full">{plan}</h3>
            <p className="text-sm text-zinc-400 mb-4 min-h-[40px] text-left w-full">{description}</p>
            <div className="mb-2 text-left w-full">
                <span className="text-2xl font-semibold">{price}</span>
                <span className="text-zinc-400 ml-2">/month</span>
            </div>
        </CardHeader>
        <div className="px-6 py-2">
          <Divider className='border-zinc-800 border-dashed' />   
        </div>
        <CardBody className="p-6 pt-4 space-y-6">
            <ul className="space-y-3">
                {features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className='text-white tracking-tight' >{feature}</span>
                    </li>
                ))}
            </ul>
            <Button 
                className="w-full bg-white text-black hover:bg-zinc-200 font-semibold py-2 rounded-lg transition-colors"
            >
                {getButtonText(plan)}
            </Button>
        </CardBody>
    </Card>
  )
}

export default PricingCard