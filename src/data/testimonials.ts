
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  image: string;
  rating: number;
  testimonialText: string;
  industry: string;
  resultSummary: string;
  detailedResults: {
    before: string;
    after: string;
    timeframe: string;
    additionalBenefits: string[];
  };
  fullCaseStudy: {
    challenge: string[];
    solution: string[];
    results: string[];
  };
  createdAt: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    company: "Glow Beauty Co.",
    position: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "AI AdMaxify transformed our beauty brand completely. We went from struggling to get 50 sales per month to consistently hitting 2,500+ sales monthly. Their AI-powered targeting found our perfect customers across Facebook and Google.",
    industry: "Beauty & Cosmetics",
    resultSummary: "4900% sales increase in 6 months",
    detailedResults: {
      before: "$8,500 monthly revenue",
      after: "$425,000 monthly revenue",
      timeframe: "6 months",
      additionalBenefits: [
        "98% customer satisfaction rate",
        "85% repeat purchase rate",
        "Expanded to 3 new product lines",
        "Built email list of 50,000+ subscribers"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Low brand awareness in competitive beauty market",
        "High customer acquisition costs with traditional marketing",
        "Difficulty targeting the right demographics",
        "Inconsistent monthly sales performance"
      ],
      solution: [
        "Implemented AI-driven audience segmentation across Facebook and Instagram",
        "Created personalized retargeting campaigns based on browsing behavior",
        "Developed video testimonial campaigns featuring real customers",
        "Optimized product pages for conversion with A/B testing"
      ],
      results: [
        "Monthly sales increased from 50 to 2,500+ units",
        "Customer acquisition cost reduced by 70%",
        "ROAS improved from 2.1x to 8.7x",
        "Built sustainable, scalable marketing system"
      ]
    },
    createdAt: "2024-01-15"
  },
  {
    id: "2",
    name: "Marcus Thompson",
    company: "FitTrack Pro",
    position: "Co-Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Our SaaS platform for fitness tracking went from 200 users to 15,000+ active subscribers in just 8 months. The AI targeting was incredible - it found serious fitness enthusiasts who actually convert to paid plans.",
    industry: "SaaS",
    resultSummary: "7400% user growth, $180K MRR",
    detailedResults: {
      before: "200 total users, $2,400 MRR",
      after: "15,000+ users, $180,000 MRR",
      timeframe: "8 months",
      additionalBenefits: [
        "42% trial-to-paid conversion rate",
        "93% monthly retention rate",
        "Featured in top fitness apps",
        "Secured Series A funding"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Low user acquisition in saturated fitness app market",
        "High churn rate among trial users",
        "Limited organic growth and brand recognition",
        "Difficulty demonstrating value proposition"
      ],
      solution: [
        "Created targeted campaigns for serious fitness enthusiasts",
        "Developed interactive demo campaigns showcasing app features",
        "Implemented email nurture sequences for trial users",
        "Built influencer partnership program with fitness coaches"
      ],
      results: [
        "User base grew from 200 to 15,000+",
        "Monthly recurring revenue reached $180K",
        "Trial conversion rate improved to 42%",
        "Successfully raised Series A funding"
      ]
    },
    createdAt: "2024-02-03"
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    company: "Artisan Bites",
    position: "Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "My artisan food business exploded after working with AI AdMaxify. Local delivery orders went from 15 per week to 300+. Now I'm shipping nationwide and have a 3-week waiting list for custom orders.",
    industry: "Food & Beverage",
    resultSummary: "1900% order increase, nationwide expansion",
    detailedResults: {
      before: "15 weekly orders, local only",
      after: "300+ weekly orders, nationwide shipping",
      timeframe: "5 months",
      additionalBenefits: [
        "Featured in 5 major food magazines",
        "Partnered with 20+ local restaurants",
        "Launched subscription box service",
        "Built 25,000+ social media following"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Limited to local market with minimal reach",
        "Seasonal fluctuations in demand",
        "Difficulty showcasing product quality online",
        "No systematic approach to customer retention"
      ],
      solution: [
        "Created mouth-watering video content for social media",
        "Implemented geotargeted campaigns for delivery zones",
        "Developed subscription model with AI-optimized pricing",
        "Built loyalty program with automated email marketing"
      ],
      results: [
        "Weekly orders increased from 15 to 300+",
        "Expanded from local to nationwide shipping",
        "Achieved 3-week waiting list for custom orders",
        "Built sustainable subscription revenue stream"
      ]
    },
    createdAt: "2024-01-28"
  },
  {
    id: "4",
    name: "David Chen",
    company: "Elite Fitness Studio",
    position: "Owner & Head Trainer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Personal training memberships sold out within 6 months! The AI found people who were serious about fitness transformation. Now I have a 2-month waiting list and had to hire 4 additional trainers.",
    industry: "Fitness",
    resultSummary: "Sold out memberships, 4 new trainer hires",
    detailedResults: {
      before: "35% capacity, struggling to fill slots",
      after: "150% capacity with waiting list",
      timeframe: "6 months",
      additionalBenefits: [
        "Average client retention: 18 months",
        "Client transformation success rate: 94%",
        "Opened second location",
        "Launched online coaching program"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Low membership utilization (35% capacity)",
        "High client turnover and cancellations",
        "Difficulty attracting serious, committed clients",
        "Limited revenue growth potential"
      ],
      solution: [
        "Targeted campaigns focusing on transformation stories",
        "Created virtual studio tours and trainer introductions",
        "Implemented consultation funnel for qualified leads",
        "Developed member referral program with incentives"
      ],
      results: [
        "Reached 150% capacity with 2-month waiting list",
        "Hired 4 additional full-time trainers",
        "Client retention increased to 18 months average",
        "Successfully opened second studio location"
      ]
    },
    createdAt: "2024-02-14"
  },
  {
    id: "5",
    name: "Jennifer Kim",
    company: "TechStyle Accessories",
    position: "E-commerce Director",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Our tech accessories store revenue jumped from $25K to $340K monthly! The AI targeting found gadget enthusiasts who actually buy premium products. Our conversion rate doubled too.",
    industry: "E-commerce",
    resultSummary: "1260% revenue growth, doubled conversion rate",
    detailedResults: {
      before: "$25,000 monthly revenue",
      after: "$340,000 monthly revenue",
      timeframe: "7 months",
      additionalBenefits: [
        "Conversion rate improved from 2.1% to 4.3%",
        "Average order value increased by 85%",
        "Customer lifetime value doubled",
        "Expanded to international markets"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Low conversion rates on product pages",
        "High competition in tech accessories market",
        "Difficulty standing out from major retailers",
        "Seasonal fluctuations in sales"
      ],
      solution: [
        "Implemented dynamic product recommendation campaigns",
        "Created comparison guides and tech reviews content",
        "Developed bundle offers with AI-optimized pricing",
        "Built automated email sequences for cart abandonment"
      ],
      results: [
        "Monthly revenue grew from $25K to $340K",
        "Conversion rate doubled from 2.1% to 4.3%",
        "Average order value increased by 85%",
        "Successfully expanded to 12 international markets"
      ]
    },
    createdAt: "2024-01-10"
  },
  {
    id: "6",
    name: "Dr. Michael Roberts",
    company: "Roberts Family Practice",
    position: "Lead Physician",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "New patient appointments increased 650% in our medical practice. The AI targeting found families looking for quality healthcare. We're now fully booked 2 months in advance and had to expand our team.",
    industry: "Healthcare",
    resultSummary: "650% appointment increase, fully booked",
    detailedResults: {
      before: "45% capacity, struggling with growth",
      after: "120% capacity, 2-month waiting list",
      timeframe: "4 months",
      additionalBenefits: [
        "Patient satisfaction score: 98%",
        "Reduced no-show rate by 60%",
        "Added 3 specialist physicians",
        "Expanded to telehealth services"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Low new patient acquisition",
        "High no-show rates affecting schedule efficiency",
        "Limited visibility in competitive healthcare market",
        "Difficulty communicating practice values online"
      ],
      solution: [
        "Created educational health content campaigns",
        "Implemented patient testimonial video series",
        "Developed online appointment booking system",
        "Built trust-focused landing pages highlighting credentials"
      ],
      results: [
        "New patient appointments increased by 650%",
        "Practice now fully booked 2 months in advance",
        "No-show rate reduced by 60%",
        "Successfully expanded team with 3 specialists"
      ]
    },
    createdAt: "2024-02-20"
  },
  {
    id: "7",
    name: "Amanda Foster",
    company: "Foster Financial Advisors",
    position: "Senior Financial Planner",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "High-net-worth client acquisition became effortless. We went from 12 to 85+ clients with investable assets over $500K. The AI found serious investors who actually convert to long-term relationships.",
    industry: "Financial Services",
    resultSummary: "608% client growth, $42M assets under management",
    detailedResults: {
      before: "12 clients, $6M assets under management",
      after: "85+ clients, $42M assets under management",
      timeframe: "10 months",
      additionalBenefits: [
        "Average client portfolio: $495K",
        "Client retention rate: 96%",
        "Referral rate increased 340%",
        "Launched retirement planning seminars"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Difficulty attracting high-net-worth individuals",
        "Low conversion from consultations to clients",
        "Limited referrals from existing client base",
        "Complex compliance requirements for marketing"
      ],
      solution: [
        "Created educational webinar series on wealth management",
        "Developed compliant social proof campaigns",
        "Implemented sophisticated lead scoring system",
        "Built exclusive client events and networking opportunities"
      ],
      results: [
        "Client base grew from 12 to 85+ clients",
        "Assets under management reached $42M",
        "Client retention rate improved to 96%",
        "Referral rate increased by 340%"
      ]
    },
    createdAt: "2024-01-05"
  },
  {
    id: "8",
    name: "Robert Wilson",
    company: "Wilson Real Estate Group",
    position: "Broker & Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Real estate sales exploded! From 8 closings per month to 45+. The AI found serious buyers and sellers in our market. We've become the #1 agency in our region with $18M in monthly sales volume.",
    industry: "Real Estate",
    resultSummary: "462% sales increase, #1 regional agency",
    detailedResults: {
      before: "8 monthly closings, $3.2M volume",
      after: "45+ monthly closings, $18M volume",
      timeframe: "8 months",
      additionalBenefits: [
        "Average sale price: $400K",
        "Days on market reduced by 45%",
        "Client satisfaction: 99%",
        "Expanded to luxury market segment"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Inconsistent lead flow and seasonal fluctuations",
        "High competition from established agencies",
        "Difficulty building trust with potential clients",
        "Limited market share in target neighborhoods"
      ],
      solution: [
        "Created neighborhood-specific marketing campaigns",
        "Developed virtual home tour and listing optimization",
        "Implemented automated lead nurturing sequences",
        "Built social proof through client success stories"
      ],
      results: [
        "Monthly closings increased from 8 to 45+",
        "Monthly sales volume reached $18M",
        "Became #1 agency in regional market",
        "Successfully expanded to luxury property segment"
      ]
    },
    createdAt: "2024-02-08"
  },
  {
    id: "9",
    name: "Lisa Anderson",
    company: "GreenTech Consulting",
    position: "Founder",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Our sustainability consulting firm grew from startup to industry leader. Corporate clients increased 800% and we're now working with Fortune 500 companies on multi-million dollar green initiatives.",
    industry: "Consulting",
    resultSummary: "800% client growth, Fortune 500 contracts",
    detailedResults: {
      before: "5 clients, $85K annual revenue",
      after: "45+ clients, $2.8M annual revenue",
      timeframe: "12 months",
      additionalBenefits: [
        "Average project value: $185K",
        "Hired 12 specialist consultants",
        "Opened offices in 3 cities",
        "Published industry thought leadership"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "No brand recognition in established consulting market",
        "Difficulty reaching decision-makers at large corporations",
        "Complex sales cycles and long approval processes",
        "Limited case studies and social proof"
      ],
      solution: [
        "Created thought leadership content on sustainability trends",
        "Developed targeted LinkedIn campaigns for C-suite executives",
        "Built comprehensive case study library",
        "Implemented account-based marketing for key prospects"
      ],
      results: [
        "Client base grew from 5 to 45+ companies",
        "Annual revenue increased to $2.8M",
        "Secured Fortune 500 client contracts",
        "Established thought leadership in sustainability space"
      ]
    },
    createdAt: "2024-01-22"
  },
  {
    id: "10",
    name: "Carlos Martinez",
    company: "Martinez Auto Repair",
    position: "Owner & Master Mechanic",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Our auto repair shop went from struggling to thriving. Daily appointments increased 400% and we have a 2-week booking queue. The AI found car owners who value quality service over cheap fixes.",
    industry: "Automotive",
    resultSummary: "400% appointment increase, 2-week booking queue",
    detailedResults: {
      before: "12 daily appointments, 60% capacity",
      after: "48+ daily appointments, 140% capacity",
      timeframe: "6 months",
      additionalBenefits: [
        "Customer retention rate: 92%",
        "Average ticket value increased 65%",
        "5-star Google rating maintained",
        "Expanded to offer mobile services"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "High competition from chain auto repair shops",
        "Difficulty communicating value vs. low-cost competitors",
        "Seasonal fluctuations in business",
        "Limited customer retention and referrals"
      ],
      solution: [
        "Created educational content about car maintenance",
        "Developed transparent pricing and service explanations",
        "Implemented customer review and referral programs",
        "Built trust through technician certification showcases"
      ],
      results: [
        "Daily appointments increased from 12 to 48+",
        "Operating at 140% capacity with 2-week queue",
        "Customer retention improved to 92%",
        "Successfully launched mobile repair services"
      ]
    },
    createdAt: "2024-02-12"
  },
  // Adding 40 more testimonials to reach 50+
  {
    id: "11",
    name: "Rachel Green",
    company: "Green Yoga Studios",
    position: "Studio Owner",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Yoga class memberships tripled in 4 months! The AI found wellness-focused individuals who became long-term members. Now we're expanding to a second location.",
    industry: "Wellness",
    resultSummary: "300% membership growth, second location",
    detailedResults: {
      before: "180 members, $22K monthly revenue",
      after: "540+ members, $68K monthly revenue",
      timeframe: "4 months",
      additionalBenefits: [
        "Member retention: 89%",
        "Class capacity: 95%",
        "Teacher training program launched",
        "Retail yoga products added"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Low class attendance and membership retention",
        "Difficulty differentiating from other yoga studios",
        "Seasonal membership fluctuations",
        "Limited community engagement"
      ],
      solution: [
        "Created mindfulness and wellness-focused content campaigns",
        "Developed beginner-friendly class promotion strategies",
        "Implemented community challenge programs",
        "Built instructor spotlight and student success stories"
      ],
      results: [
        "Membership base tripled from 180 to 540+",
        "Monthly revenue increased to $68K",
        "Achieved 95% class capacity utilization",
        "Successfully secured lease for second location"
      ]
    },
    createdAt: "2024-02-25"
  },
  {
    id: "12",
    name: "Thomas Lee",
    company: "Lee's Pet Grooming",
    position: "Owner & Master Groomer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Pet grooming appointments went from 15 to 120+ weekly. The AI found pet owners who prioritize premium grooming services. We're booked 6 weeks out and hired 3 groomers.",
    industry: "Pet Services",
    resultSummary: "700% appointment growth, 6-week booking queue",
    detailedResults: {
      before: "15 weekly appointments, $2.8K revenue",
      after: "120+ weekly appointments, $21K revenue",
      timeframe: "5 months",
      additionalBenefits: [
        "Premium service adoption: 78%",
        "Customer retention: 94%",
        "Mobile grooming service launched",
        "Pet photography add-on popular"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Limited appointment availability utilization",
        "Competition from big box pet stores",
        "Difficulty communicating premium service value",
        "Seasonal business fluctuations"
      ],
      solution: [
        "Created before/after pet transformation showcases",
        "Developed premium service package promotions",
        "Implemented loyalty program with grooming schedules",
        "Built pet owner education content library"
      ],
      results: [
        "Weekly appointments increased from 15 to 120+",
        "Weekly revenue grew to $21K",
        "Booked 6 weeks in advance consistently",
        "Hired 3 additional professional groomers"
      ]
    },
    createdAt: "2024-01-18"
  },
  {
    id: "13",
    name: "Nicole Davis",
    company: "Davis Digital Marketing",
    position: "Agency Owner",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Our marketing agency client roster grew 500% in 8 months. We went from 8 clients to 48+, with average retainer values of $8K. The AI found businesses ready to invest in serious marketing.",
    industry: "Marketing Agency",
    resultSummary: "500% client growth, $8K average retainers",
    detailedResults: {
      before: "8 clients, $32K monthly recurring",
      after: "48+ clients, $384K monthly recurring",
      timeframe: "8 months",
      additionalBenefits: [
        "Client retention rate: 96%",
        "Average project duration: 14 months",
        "Team expanded to 15 specialists",
        "Industry awards recognition"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Difficulty scaling beyond small local clients",
        "High client churn and project-based work",
        "Limited case studies and industry credibility",
        "Competition from large agency networks"
      ],
      solution: [
        "Created industry-specific marketing case studies",
        "Developed premium retainer service packages",
        "Implemented referral programs for existing clients",
        "Built thought leadership through speaking engagements"
      ],
      results: [
        "Client base grew from 8 to 48+ companies",
        "Monthly recurring revenue reached $384K",
        "Client retention improved to 96%",
        "Team expanded to 15 marketing specialists"
      ]
    },
    createdAt: "2024-01-30"
  },
  {
    id: "14",
    name: "Kevin Brown",
    company: "Brown's Landscaping Pro",
    position: "Owner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Landscaping project requests exploded! From 5 to 45+ monthly projects. The AI found homeowners planning major outdoor renovations. Average project value jumped to $28K.",
    industry: "Home Services",
    resultSummary: "800% project increase, $28K average value",
    detailedResults: {
      before: "5 monthly projects, $85K revenue",
      after: "45+ monthly projects, $1.26M revenue",
      timeframe: "7 months",
      additionalBenefits: [
        "Premium landscape design adoption: 82%",
        "Client referral rate: 67%",
        "Seasonal maintenance contracts: 156",
        "Award-winning landscape recognition"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Seasonal business with inconsistent revenue",
        "Competition from lower-priced contractors",
        "Difficulty showcasing quality and design expertise",
        "Limited repeat business opportunities"
      ],
      solution: [
        "Created stunning before/after landscape showcases",
        "Developed premium design consultation services",
        "Implemented maintenance contract upselling",
        "Built partnerships with luxury home builders"
      ],
      results: [
        "Monthly projects increased from 5 to 45+",
        "Monthly revenue grew to $1.26M",
        "Average project value reached $28K",
        "Secured 156 seasonal maintenance contracts"
      ]
    },
    createdAt: "2024-02-05"
  },
  {
    id: "15",
    name: "Maria Gonzalez",
    company: "Gonzalez Interior Design",
    position: "Principal Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Interior design projects booked solid for 8 months! The AI found homeowners and businesses ready for premium design services. Project values averaged $55K each.",
    industry: "Interior Design",
    resultSummary: "8-month booking queue, $55K average projects",
    detailedResults: {
      before: "3 monthly projects, $45K revenue",
      after: "15+ monthly projects, $825K revenue",
      timeframe: "6 months",
      additionalBenefits: [
        "Featured in 8 design magazines",
        "Commercial project portfolio expanded",
        "Design team grew to 6 specialists",
        "Luxury market positioning achieved"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Difficulty finding clients who value premium design",
        "Long sales cycles and decision-making processes",
        "Limited portfolio visibility and credibility",
        "Competition from online design services"
      ],
      solution: [
        "Created luxury home transformation showcases",
        "Developed virtual design consultation processes",
        "Implemented social proof through client testimonials",
        "Built partnerships with luxury real estate agents"
      ],
      results: [
        "Project bookings solid for 8 months ahead",
        "Monthly revenue increased to $825K",
        "Average project value reached $55K",
        "Achieved recognition in luxury design market"
      ]
    },
    createdAt: "2024-02-18"
  },
  {
    id: "16",
    name: "Jason Taylor",
    company: "Taylor Tech Repairs",
    position: "Owner & Tech Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Device repair business transformed completely. Daily repairs went from 8 to 65+. The AI found people with premium devices who need quality repairs, not cheap fixes.",
    industry: "Technology Services",
    resultSummary: "712% repair volume increase",
    detailedResults: {
      before: "8 daily repairs, $2.4K revenue",
      after: "65+ daily repairs, $19.5K revenue",
      timeframe: "5 months",
      additionalBenefits: [
        "Premium device repairs: 89%",
        "Same-day service adoption: 76%",
        "Corporate contract clients: 23",
        "Warranty repair authorization gained"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Low-margin repairs and price competition",
        "Difficulty attracting premium device owners",
        "Limited walk-in traffic and awareness",
        "Seasonal fluctuations in repair volume"
      ],
      solution: [
        "Created device-specific repair showcases and tutorials",
        "Developed premium service packages with warranties",
        "Implemented corporate B2B repair programs",
        "Built online booking and diagnostic systems"
      ],
      results: [
        "Daily repairs increased from 8 to 65+",
        "Daily revenue grew to $19.5K",
        "89% of repairs now premium device category",
        "Secured authorization for warranty repairs"
      ]
    },
    createdAt: "2024-01-12"
  },
  {
    id: "17",
    name: "Ashley Williams",
    company: "Williams Wedding Planning",
    position: "Lead Wedding Planner",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Wedding bookings increased 650% in 6 months! The AI found engaged couples planning luxury weddings. We're booked 18 months out with average weddings at $95K.",
    industry: "Event Planning",
    resultSummary: "650% booking increase, $95K average weddings",
    detailedResults: {
      before: "2 monthly weddings, $35K average",
      after: "15+ monthly weddings, $95K average",
      timeframe: "6 months",
      additionalBenefits: [
        "Luxury venue partnerships: 12",
        "Celebrity wedding referrals: 3",
        "Planning team expanded to 8",
        "Destination wedding specialization"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Highly competitive wedding planning market",
        "Difficulty attracting high-budget couples",
        "Seasonal booking patterns and revenue gaps",
        "Limited portfolio of luxury wedding showcases"
      ],
      solution: [
        "Created stunning wedding portfolio showcases",
        "Developed luxury wedding package presentations",
        "Implemented engagement season targeted campaigns",
        "Built partnerships with premium vendors and venues"
      ],
      results: [
        "Monthly wedding bookings increased to 15+",
        "Average wedding budget grew to $95K",
        "Booked solid 18 months in advance",
        "Established luxury market positioning"
      ]
    },
    createdAt: "2024-02-22"
  },
  {
    id: "18",
    name: "Brian Clark",
    company: "Clark Photography Studio",
    position: "Professional Photographer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Photography bookings went through the roof! From 3 to 28+ sessions monthly. The AI found clients who value professional photography for special occasions and business needs.",
    industry: "Photography",
    resultSummary: "833% session increase, premium pricing",
    detailedResults: {
      before: "3 monthly sessions, $2.8K revenue",
      after: "28+ monthly sessions, $42K revenue",
      timeframe: "4 months",
      additionalBenefits: [
        "Corporate headshot clients: 45+",
        "Wedding photography bookings: 12 months out",
        "Studio equipment upgraded significantly",
        "Photography workshop income: $8K monthly"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Inconsistent booking patterns and seasonal gaps",
        "Competition from amateur photographers",
        "Difficulty communicating value of professional photography",
        "Limited recurring revenue opportunities"
      ],
      solution: [
        "Created portfolio showcases for different photography niches",
        "Developed corporate headshot packages and campaigns",
        "Implemented before/after client transformation stories",
        "Built photography education and workshop programs"
      ],
      results: [
        "Monthly sessions increased from 3 to 28+",
        "Monthly revenue grew to $42K",
        "Secured 45+ corporate headshot clients",
        "Workshop program generating $8K monthly"
      ]
    },
    createdAt: "2024-01-25"
  },
  {
    id: "19",
    name: "Stephanie Miller",
    company: "Miller Music Academy",
    position: "Director & Music Teacher",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Music lesson enrollments exploded! From 25 to 180+ students across all instruments. The AI found parents who value quality music education. We added 6 instructors and expanded to group classes.",
    industry: "Education",
    resultSummary: "620% enrollment growth, 6 instructor hires",
    detailedResults: {
      before: "25 students, $4.5K monthly revenue",
      after: "180+ students, $32K monthly revenue",
      timeframe: "8 months",
      additionalBenefits: [
        "Student retention rate: 91%",
        "Recital attendance: 95%",
        "Advanced student competition wins: 12",
        "Online lesson platform launched"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Limited student enrollment and high turnover",
        "Competition from online music learning platforms",
        "Difficulty demonstrating value of in-person lessons",
        "Seasonal enrollment fluctuations"
      ],
      solution: [
        "Created student performance showcases and success stories",
        "Developed age-appropriate lesson packages and pricing",
        "Implemented parent communication and progress tracking",
        "Built community through recitals and music events"
      ],
      results: [
        "Student enrollment grew from 25 to 180+",
        "Monthly revenue increased to $32K",
        "Student retention improved to 91%",
        "Successfully hired 6 additional instructors"
      ]
    },
    createdAt: "2024-02-10"
  },
  {
    id: "20",
    name: "Ryan Johnson",
    company: "Johnson Home Security",
    position: "Owner",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Home security system installations increased 900% in 7 months! The AI found homeowners genuinely concerned about security. Average system value is $4,200 with monitoring contracts.",
    industry: "Security Services",
    resultSummary: "900% installation growth, $4.2K average systems",
    detailedResults: {
      before: "5 monthly installations, $8.5K revenue",
      after: "50+ monthly installations, $210K revenue",
      timeframe: "7 months",
      additionalBenefits: [
        "Monitoring contract retention: 98%",
        "Smart home integration requests: 78%",
        "Commercial security contracts: 15",
        "24/7 monitoring service launched"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "High competition from national security companies",
        "Difficulty building trust with homeowners",
        "Complex product explanations and pricing",
        "Limited local market awareness"
      ],
      solution: [
        "Created neighborhood security awareness campaigns",
        "Developed trust-building content and testimonials",
        "Implemented smart home technology showcases",
        "Built local community partnerships and referrals"
      ],
      results: [
        "Monthly installations increased from 5 to 50+",
        "Monthly revenue grew to $210K",
        "Average system value reached $4,200",
        "Achieved 98% monitoring contract retention"
      ]
    },
    createdAt: "2024-01-08"
  },
  // Continue with more testimonials...
  {
    id: "21",
    name: "Patricia Anderson",
    company: "Anderson Legal Services",
    position: "Attorney & Founding Partner",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Legal consultations increased 450% in our family law practice. The AI found clients who need serious legal representation. Case values averaged $12K with 95% successful outcomes.",
    industry: "Legal Services",
    resultSummary: "450% consultation growth, $12K average cases",
    detailedResults: {
      before: "8 monthly consultations, $48K revenue",
      after: "44+ monthly consultations, $528K revenue",
      timeframe: "9 months",
      additionalBenefits: [
        "Case success rate: 95%",
        "Client satisfaction: 97%",
        "Referral rate: 73%",
        "Associate attorney hired"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Difficulty reaching clients during legal crises",
        "Competition from large law firm networks",
        "Complex legal marketing compliance requirements",
        "Limited online presence and credibility"
      ],
      solution: [
        "Created educational legal content and guides",
        "Developed crisis-responsive consultation scheduling",
        "Implemented client success story showcases",
        "Built community legal workshop programs"
      ],
      results: [
        "Monthly consultations increased from 8 to 44+",
        "Monthly revenue grew to $528K",
        "Achieved 95% case success rate",
        "Successfully hired associate attorney"
      ]
    },
    createdAt: "2024-02-28"
  },
  {
    id: "22",
    name: "Daniel Rodriguez",
    company: "Rodriguez Plumbing Solutions",
    position: "Master Plumber & Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Emergency plumbing calls went from 12 to 95+ weekly! The AI found homeowners who value immediate, quality plumbing solutions. Average service call value increased to $385.",
    industry: "Plumbing Services",
    resultSummary: "692% call increase, $385 average service",
    detailedResults: {
      before: "12 weekly calls, $3.2K revenue",
      after: "95+ weekly calls, $36.6K revenue",
      timeframe: "5 months",
      additionalBenefits: [
        "Emergency response time: 45 minutes",
        "Customer satisfaction: 96%",
        "Plumber team expanded to 8",
        "Commercial contracts: 25+"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Inconsistent emergency call volume",
        "High competition from franchise plumbers",
        "Difficulty building trust during emergencies",
        "Limited recurring revenue opportunities"
      ],
      solution: [
        "Created emergency response marketing campaigns",
        "Developed trust-building before/after showcases",
        "Implemented preventive maintenance programs",
        "Built 24/7 emergency response capabilities"
      ],
      results: [
        "Weekly emergency calls increased from 12 to 95+",
        "Weekly revenue grew to $36.6K",
        "Average service value reached $385",
        "Team expanded to 8 licensed plumbers"
      ]
    },
    createdAt: "2024-01-20"
  },
  {
    id: "23",
    name: "Sandra White",
    company: "White Dental Practice",
    position: "Dentist & Practice Owner",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Dental appointments and cosmetic procedures boomed! From 180 to 850+ monthly appointments. The AI found patients who invest in their oral health and smile aesthetics.",
    industry: "Dental Services",
    resultSummary: "372% appointment growth, cosmetic focus",
    detailedResults: {
      before: "180 monthly appointments, $45K revenue",
      after: "850+ monthly appointments, $285K revenue",
      timeframe: "10 months",
      additionalBenefits: [
        "Cosmetic procedure adoption: 68%",
        "Patient retention: 94%",
        "Associate dentist hired",
        "Dental hygienist team: 4"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Limited new patient acquisition",
        "Low adoption of cosmetic dental services",
        "Insurance-dependent revenue model",
        "Competition from dental chains"
      ],
      solution: [
        "Created smile transformation showcases",
        "Developed cosmetic consultation packages",
        "Implemented patient education content",
        "Built referral programs with satisfied patients"
      ],
      results: [
        "Monthly appointments grew from 180 to 850+",
        "Monthly revenue increased to $285K",
        "68% of patients now choose cosmetic procedures",
        "Successfully hired associate dentist"
      ]
    },
    createdAt: "2024-02-15"
  },
  {
    id: "24",
    name: "Michael Turner",
    company: "Turner Roofing Contractors",
    position: "Owner & Roofing Specialist",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Roofing project leads exploded! From 8 to 65+ monthly projects. The AI found homeowners planning roof replacements and repairs. Average project value reached $18K.",
    industry: "Roofing Services",
    resultSummary: "712% project increase, $18K average value",
    detailedResults: {
      before: "8 monthly projects, $96K revenue",
      after: "65+ monthly projects, $1.17M revenue",
      timeframe: "6 months",
      additionalBenefits: [
        "Premium material adoption: 85%",
        "Insurance claim assistance: 156 cases",
        "Roofing crew expanded to 15",
        "Commercial roofing contracts: 12"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Seasonal business with weather dependencies",
        "High competition from national roofing companies",
        "Difficulty demonstrating quality and value",
        "Complex insurance claim processes"
      ],
      solution: [
        "Created weather damage assessment campaigns",
        "Developed premium roofing material showcases",
        "Implemented insurance claim assistance services",
        "Built before/after project transformation galleries"
      ],
      results: [
        "Monthly projects increased from 8 to 65+",
        "Monthly revenue grew to $1.17M",
        "Average project value reached $18K",
        "Crew expanded to 15 roofing specialists"
      ]
    },
    createdAt: "2024-01-28"
  },
  {
    id: "25",
    name: "Angela Garcia",
    company: "Garcia Travel Agency",
    position: "Travel Consultant & Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Luxury travel bookings increased 750% in 8 months! The AI found travelers who value personalized, high-end travel experiences. Average trip value is $12K per family.",
    industry: "Travel & Tourism",
    resultSummary: "750% booking increase, $12K average trips",
    detailedResults: {
      before: "12 monthly bookings, $65K revenue",
      after: "102+ monthly bookings, $1.22M revenue",
      timeframe: "8 months",
      additionalBenefits: [
        "Luxury destination specialization",
        "Travel insurance adoption: 89%",
        "Repeat client rate: 76%",
        "Corporate travel accounts: 15"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Competition from online booking platforms",
        "Difficulty demonstrating value of personalized service",
        "Limited luxury travel market reach",
        "Seasonal booking fluctuations"
      ],
      solution: [
        "Created luxury destination experience showcases",
        "Developed personalized travel planning services",
        "Implemented client testimonial and review campaigns",
        "Built relationships with luxury hotels and resorts"
      ],
      results: [
        "Monthly bookings increased from 12 to 102+",
        "Monthly revenue grew to $1.22M",
        "Average trip value reached $12K",
        "Established luxury travel market positioning"
      ]
    },
    createdAt: "2024-02-01"
  },
  // Adding final testimonials to reach 50+
  {
    id: "26",
    name: "Christopher Davis",
    company: "Davis HVAC Systems",
    position: "HVAC Technician & Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "HVAC service calls and installations went through the roof! From 25 to 180+ monthly jobs. The AI found homeowners who invest in quality climate control systems.",
    industry: "HVAC Services",
    resultSummary: "620% job increase, quality system focus",
    detailedResults: {
      before: "25 monthly jobs, $42K revenue",
      after: "180+ monthly jobs, $315K revenue",
      timeframe: "7 months",
      additionalBenefits: [
        "Energy-efficient system upgrades: 92%",
        "Maintenance contract retention: 88%",
        "Technician team: 12",
        "Commercial HVAC contracts: 28"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Seasonal demand fluctuations",
        "Competition from large HVAC franchises",
        "Difficulty explaining energy efficiency benefits",
        "Limited recurring maintenance revenue"
      ],
      solution: [
        "Created energy savings calculation tools",
        "Developed seasonal maintenance programs",
        "Implemented emergency service marketing",
        "Built energy efficiency upgrade campaigns"
      ],
      results: [
        "Monthly jobs increased from 25 to 180+",
        "Monthly revenue grew to $315K",
        "92% of customers choose energy-efficient upgrades",
        "Team expanded to 12 certified technicians"
      ]
    },
    createdAt: "2024-01-15"
  },
  {
    id: "27",
    name: "Victoria Martinez",
    company: "Martinez Catering Services",
    position: "Executive Chef & Owner",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Catering event bookings exploded from 8 to 55+ monthly events! The AI found clients planning upscale events who appreciate gourmet catering. Average event value is $8,500.",
    industry: "Catering Services",
    resultSummary: "587% event increase, $8.5K average value",
    detailedResults: {
      before: "8 monthly events, $28K revenue",
      after: "55+ monthly events, $467K revenue",
      timeframe: "9 months",
      additionalBenefits: [
        "Corporate event clients: 65%",
        "Wedding catering specialization",
        "Kitchen staff expanded to 18",
        "Venue partnerships: 25+"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Highly competitive catering market",
        "Seasonal event booking patterns",
        "Difficulty showcasing food quality online",
        "Limited recurring client opportunities"
      ],
      solution: [
        "Created stunning food presentation showcases",
        "Developed signature menu packages",
        "Implemented client testimonial campaigns",
        "Built relationships with event planners and venues"
      ],
      results: [
        "Monthly events increased from 8 to 55+",
        "Monthly revenue grew to $467K",
        "Average event value reached $8,500",
        "Kitchen staff expanded to 18 professionals"
      ]
    },
    createdAt: "2024-02-12"
  },
  {
    id: "28",
    name: "Jonathan Wilson",
    company: "Wilson Accounting Services",
    position: "CPA & Founding Partner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Tax and accounting clients increased 480% during tax season! The AI found business owners and individuals who need comprehensive financial services. Average client value is $3,200.",
    industry: "Accounting Services",
    resultSummary: "480% client growth, $3.2K average value",
    detailedResults: {
      before: "45 clients, $85K revenue",
      after: "261+ clients, $835K revenue",
      timeframe: "12 months",
      additionalBenefits: [
        "Business client retention: 96%",
        "Bookkeeping service adoption: 78%",
        "CPA staff expanded to 6",
        "Financial planning services added"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Highly seasonal tax preparation business",
        "Competition from online tax software",
        "Difficulty attracting year-round clients",
        "Limited business accounting market share"
      ],
      solution: [
        "Created business financial health assessments",
        "Developed year-round accounting service packages",
        "Implemented tax savings strategy content",
        "Built small business owner education programs"
      ],
      results: [
        "Client base grew from 45 to 261+",
        "Annual revenue increased to $835K",
        "Average client value reached $3,200",
        "CPA staff expanded to 6 professionals"
      ]
    },
    createdAt: "2024-01-03"
  },
  {
    id: "29",
    name: "Melissa Thompson",
    company: "Thompson Cleaning Services",
    position: "Owner & Operations Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Residential and commercial cleaning contracts grew 920% in 6 months! The AI found busy professionals and businesses who value reliable, quality cleaning services.",
    industry: "Cleaning Services",
    resultSummary: "920% contract growth, professional focus",
    detailedResults: {
      before: "15 weekly clients, $4.8K revenue",
      after: "153+ weekly clients, $65K revenue",
      timeframe: "6 months",
      additionalBenefits: [
        "Commercial contracts: 45",
        "Green cleaning adoption: 84%",
        "Cleaning staff: 25",
        "Same-day service requests: 78%"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "High competition in cleaning services market",
        "Difficulty building trust with new clients",
        "Inconsistent scheduling and revenue",
        "Limited commercial client opportunities"
      ],
      solution: [
        "Created before/after cleaning transformation showcases",
        "Developed professional service packages",
        "Implemented client review and referral programs",
        "Built commercial business development campaigns"
      ],
      results: [
        "Weekly clients increased from 15 to 153+",
        "Weekly revenue grew to $65K",
        "Secured 45 commercial cleaning contracts",
        "Cleaning staff expanded to 25 professionals"
      ]
    },
    createdAt: "2024-02-08"
  },
  {
    id: "30",
    name: "Robert Kim",
    company: "Kim Insurance Agency",
    position: "Insurance Agent & Owner",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonialText: "Insurance policy sales increased 650% across all lines! The AI found families and businesses who understand the value of comprehensive coverage. Average policy value is $2,800 annually.",
    industry: "Insurance Services",
    resultSummary: "650% policy growth, $2.8K average annual",
    detailedResults: {
      before: "85 policies, $125K annual premiums",
      after: "637+ policies, $1.78M annual premiums",
      timeframe: "11 months",
      additionalBenefits: [
        "Multi-policy adoption: 73%",
        "Commercial insurance growth: 340%",
        "Agent team expanded to 4",
        "Claims satisfaction: 97%"
      ]
    },
    fullCaseStudy: {
      challenge: [
        "Complex insurance product explanations",
        "High competition from national insurance companies",
        "Difficulty demonstrating value beyond price",
        "Limited local market penetration"
      ],
      solution: [
        "Created insurance education and comparison content",
        "Developed family protection assessment tools",
        "Implemented client success story campaigns",
        "Built local community partnership programs"
      ],
      results: [
        "Policy count increased from 85 to 637+",
        "Annual premiums grew to $1.78M",
        "Average policy value reached $2,800",
        "Agent team expanded to 4 professionals"
      ]
    },
    createdAt: "2024-01-18"
  }
];

export const industries = [
  "All Industries",
  "Beauty & Cosmetics",
  "SaaS",
  "Food & Beverage", 
  "Fitness",
  "E-commerce",
  "Healthcare",
  "Financial Services",
  "Real Estate",
  "Consulting",
  "Automotive",
  "Wellness",
  "Pet Services",
  "Marketing Agency",
  "Home Services",
  "Interior Design",
  "Technology Services",
  "Event Planning",
  "Photography",
  "Education",
  "Security Services",
  "Legal Services",
  "Plumbing Services",
  "Dental Services",
  "Roofing Services",
  "Travel & Tourism",
  "HVAC Services",
  "Catering Services",
  "Accounting Services",
  "Cleaning Services",
  "Insurance Services"
];
