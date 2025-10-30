export const journeyStages = [
  {
    id: 1,
    title: "Onboarding",
    features: ["Welcome Tour", "Product Walkthrough", "Personalization Wizard"],
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    title: "Dashboard",
    features: ["Today with ViQi", "Smart Search", "Quick Actions"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Search & Discovery",
    features: [
      "Conversational Search Mode",
      "Dynamic Filters",
      "AI Explanation Layer",
    ],
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 4,
    title: "Qualification",
    features: [
      "360° Profile Cards",
      "Smart Similarity Engine",
      "ViQi Summary",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    title: "Outreach",
    features: ["Smart Composer", "CRM Integrations", "Connection Insights"],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "Monitoring",
    features: [
      "Smart Alerts",
      "Market Trends Dashboard",
      "Competitor Watchlist",
    ],
    color: "from-rose-500 to-red-500",
  },
  {
    id: 7,
    title: "Continuous Learning",
    features: [
      "Learning Feedback Loop",
      "Usage Insights",
      "In-App Coaching",
    ],
    color: "from-red-500 to-violet-600",
  },
];

export const featureHighlights = [
  {
    id: "contextual-intelligence",
    title: "Contextual Intelligence",
    description:
      "ViQi surfaces relationship intelligence, project history, and market signals so you can prioritize the right opportunities faster.",
    bullets: ["Unified knowledge graph", "Executive relationship mapping"],
    icon: "globe-alt",
  },
  {
    id: "adaptive-automation",
    title: "Adaptive Automation",
    description:
      "Automate workflows without losing the human touch. ViQi drafts outreach, syncs with CRM, and learns from your feedback.",
    bullets: ["AI-powered outreach suggestions", "CRM & productivity integrations"],
    icon: "bolt",
  },
  {
    id: "trusted-visibility",
    title: "Trusted Visibility",
    description:
      "Monitor industry movements, competitor shifts, and portfolio updates in real-time with customizable alerting.",
    bullets: ["Smart monitoring dashboards", "Signal-based notifications"],
    icon: "eye",
  },
];

export const navLinks = [
  { href: "/#overview", label: "Overview" },
  { href: "/#features", label: "Features" },
  { href: "/#journey", label: "Journey" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/vitrina-ai",
    external: true,
  },
];
