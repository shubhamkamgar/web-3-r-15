export interface FeaturedStory {
  id: string;
  companyName: string;
  companyLogo: string;
  industry: string;
  resultType: string;
  challenge: string;
  solution: string;
  results: string[];
  beforeMetric: string;
  afterMetric: string;
  improvementPercentage: number;
  timeframe: string;
  testimonial: string;
  clientName: string;
  videoId: string;
}

export const featuredStories: FeaturedStory[] = [
  {
    id: "1",
    companyName: "TechFlow Solutions",
    companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
    industry: "Technology",
    resultType: "Lead Generation",
    challenge: "A B2B SaaS company struggling with high customer acquisition costs and low-quality leads from traditional marketing channels.",
    solution: "Implemented AI-powered lead scoring, personalized email sequences, and targeted LinkedIn campaigns with advanced retargeting.",
    results: [
      "Generated 2,847% more qualified leads",
      "Reduced customer acquisition cost by 73%",
      "Increased trial-to-paid conversion rate to 34%",
      "Built predictable $180K monthly pipeline"
    ],
    beforeMetric: "12 leads/month",
    afterMetric: "354 leads/month",
    improvementPercentage: 2847,
    timeframe: "6 months",
    testimonial: "AI AdMaxify completely transformed our lead generation. We went from struggling to find qualified prospects to having a consistent pipeline of high-intent leads that convert at incredible rates.",
    clientName: "Sarah Johnson, CEO",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "2",
    companyName: "EcoGear Commerce",
    companyLogo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&h=100&fit=crop",
    industry: "E-commerce",
    resultType: "Revenue Growth",
    challenge: "An outdoor gear e-commerce store facing declining sales, poor ad performance, and intense competition from larger retailers.",
    solution: "Developed AI-driven product recommendation engine, optimized ad targeting across multiple channels, and implemented dynamic pricing strategies.",
    results: [
      "Increased monthly revenue by 1,247%",
      "Improved ROAS from 2.1x to 8.4x",
      "Boosted average order value by 89%",
      "Reduced cart abandonment rate by 62%"
    ],
    beforeMetric: "$45K/month",
    afterMetric: "$607K/month",
    improvementPercentage: 1247,
    timeframe: "8 months",
    testimonial: "The results speak for themselves. Our revenue has exploded, and we're now competing directly with industry giants. The AI targeting found customers we never knew existed.",
    clientName: "Mike Chen, Founder",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "3",
    companyName: "HealthTech Innovations",
    companyLogo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop",
    industry: "Healthcare",
    resultType: "Customer Acquisition",
    challenge: "A telehealth platform struggling to reach healthcare professionals and patients, with limited brand awareness and complex compliance requirements.",
    solution: "Created compliant educational content campaigns, targeted healthcare professional networks, and built patient referral systems with automated follow-ups.",
    results: [
      "Acquired 15,000+ new patients",
      "Onboarded 450+ healthcare providers",
      "Achieved 96% patient satisfaction rate",
      "Reduced patient acquisition cost by 58%"
    ],
    beforeMetric: "890 patients",
    afterMetric: "15,890 patients",
    improvementPercentage: 1685,
    timeframe: "10 months",
    testimonial: "AI AdMaxify helped us navigate complex healthcare marketing regulations while delivering exceptional patient growth. Their understanding of our industry is unmatched.",
    clientName: "Dr. Lisa Rodriguez, CMO",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "4",
    companyName: "FinanceFirst Advisory",
    companyLogo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop",
    industry: "Finance",
    resultType: "ROI Improvement",
    challenge: "A financial advisory firm with difficulty attracting high-net-worth clients and demonstrating ROI on marketing investments.",
    solution: "Developed sophisticated client segmentation, created premium content for wealth management, and implemented account-based marketing for HNW prospects.",
    results: [
      "Attracted 127 high-net-worth clients",
      "Increased average client value by 340%",
      "Achieved 12.4x marketing ROI",
      "Built $85M in assets under management"
    ],
    beforeMetric: "2.1x ROI",
    afterMetric: "12.4x ROI",
    improvementPercentage: 490,
    timeframe: "12 months",
    testimonial: "The sophisticated targeting and premium positioning helped us connect with exactly the right clients. Our ROI has never been higher, and we're managing more assets than ever.",
    clientName: "Robert Williams, Senior Partner",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "5",
    companyName: "ManufacturingMax Pro",
    companyLogo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop",
    industry: "Manufacturing",
    resultType: "Brand Awareness",
    challenge: "A B2B manufacturing company with limited online presence, struggling to reach decision-makers and showcase their capabilities.",
    solution: "Built comprehensive digital presence, created technical content marketing, and implemented LinkedIn thought leadership campaigns targeting industry executives.",
    results: [
      "Increased brand awareness by 780%",
      "Generated 45 enterprise inquiries",
      "Secured $2.8M in new contracts",
      "Established thought leadership position"
    ],
    beforeMetric: "3% brand recognition",
    afterMetric: "26% brand recognition",
    improvementPercentage: 780,
    timeframe: "9 months",
    testimonial: "We went from being virtually unknown to being recognized as industry leaders. The strategic approach to B2B marketing has transformed our entire business trajectory.",
    clientName: "Jennifer Davis, VP Marketing",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "6",
    companyName: "EduTech Academy",
    companyLogo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&h=100&fit=crop",
    industry: "Education",
    resultType: "Lead Generation",
    challenge: "An online education platform facing declining enrollment, high competition, and difficulty reaching adult learners interested in career advancement.",
    solution: "Created career-focused content campaigns, implemented retargeting for course browsers, and built partnerships with professional associations.",
    results: [
      "Increased course enrollments by 934%",
      "Achieved 78% course completion rate",
      "Generated 12,000+ qualified leads",
      "Expanded to 15 new course categories"
    ],
    beforeMetric: "145 students/month",
    afterMetric: "1,500 students/month",
    improvementPercentage: 934,
    timeframe: "7 months",
    testimonial: "The transformation has been incredible. We're now the go-to platform for professional development in our industry, with consistently full course enrollments.",
    clientName: "Amanda Foster, Director of Growth",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "7",
    companyName: "GreenEnergy Solutions",
    companyLogo: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=100&h=100&fit=crop",
    industry: "Technology",
    resultType: "Customer Acquisition",
    challenge: "A renewable energy company struggling to educate consumers about solar benefits and convert leads into installations.",
    solution: "Developed educational solar calculator tools, created geo-targeted campaigns for homeowners, and implemented financing-focused messaging.",
    results: [
      "Installed 2,100+ solar systems",
      "Achieved 42% consultation-to-sale rate",
      "Reduced customer acquisition cost by 51%",
      "Generated $18M in installation revenue"
    ],
    beforeMetric: "23 installations/month",
    afterMetric: "300 installations/month",
    improvementPercentage: 1204,
    timeframe: "11 months",
    testimonial: "We've become the leading solar installer in our region. The educational approach and targeted marketing helped us break through consumer hesitation about renewable energy.",
    clientName: "Carlos Martinez, Sales Director",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "8",
    companyName: "LuxuryStay Rentals",
    companyLogo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=100&fit=crop",
    industry: "E-commerce",
    resultType: "Revenue Growth",
    challenge: "A luxury vacation rental company facing seasonality issues, high competition from platforms like Airbnb, and difficulty commanding premium pricing.",
    solution: "Created premium brand positioning, implemented dynamic pricing strategies, and developed exclusive experience packages with targeted marketing.",
    results: [
      "Increased average nightly rate by 156%",
      "Achieved 94% occupancy rate",
      "Expanded to 25 luxury properties",
      "Generated $4.2M annual revenue"
    ],
    beforeMetric: "$850K/year",
    afterMetric: "$4.2M/year",
    improvementPercentage: 394,
    timeframe: "14 months",
    testimonial: "We've transformed from a small rental business to a luxury hospitality brand. The premium positioning and targeted marketing helped us command rates we never thought possible.",
    clientName: "Elena Vasquez, Owner",
    videoId: "dQw4w9WgXcQ"
  }
];

// Export industries array for filtering
export const industries = [
  'All Industries',
  'Technology',
  'E-commerce',
  'Healthcare',
  'Finance',
  'Manufacturing',
  'Education'
];
