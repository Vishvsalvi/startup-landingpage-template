export const PRICING_TIERS = [
  {
    name: "BASIC",
    price: 19,
    description: "Perfect for individuals and small projects",
    features: [
      { name: "1 User" },
      { name: "5GB Storage" },
      { name: "Basic Support" },
      { name: "Limited API Access" },
      { name: "Standard Analytics" }
    ]
  },
  {
    name: "PRO",
    price: 49,
    description: "Ideal for growing businesses and teams",
    features: [
      { name: "5 Users" },
      { name: "50GB Storage" },
      { name: "Priority Support" },
      { name: "Full API Access" },
      { name: "Advanced Analytics" }
    ],
    isPopular: true
  },
  {
    name: "ENTERPRISE",
    price: 99,
    description: "For large-scale operations and high-volume users",
    features: [
      { name: "Unlimited Users" },
      { name: "500GB Storage" },
      { name: "24/7 Premium Support" },
      { name: "Custom Integrations" },
      { name: "AI-Powered Insights" }
    ]
  }
]; 