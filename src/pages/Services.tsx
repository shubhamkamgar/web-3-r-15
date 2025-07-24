import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceModal from '@/components/ServiceModal';
import { Brain, TrendingUp, Target, Users, BarChart3, Megaphone, Search, ShoppingCart, Mail, Camera, Code, ArrowRight, CheckCircle, Star, Zap, Video, Smartphone, Globe, MessageSquare, Shield, Award, Rocket, Clock, DollarSign, BarChart, Lightbulb, Settings, HeadphonesIcon, Database, Cloud, Lock, Cpu, Palette, FileText, Mic, Calendar, Activity } from 'lucide-react';
const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const handleLearnMore = (service: any) => {
    const serviceWithModal = {
      ...service,
      fullDescription: service.description + " Our expert team combines cutting-edge technology with proven strategies to deliver exceptional results for your business.",
      benefits: ["Increased ROI and business growth", "Enhanced online presence and visibility", "Improved customer engagement and conversion", "Data-driven insights and optimization", "24/7 monitoring and support"]
    };
    setSelectedService(serviceWithModal);
  };
  const mainServices = [{
    id: 1,
    icon: Brain,
    title: "AI-Powered Marketing",
    description: "Revolutionary AI-driven marketing strategies that adapt and learn from your audience behavior in real-time.",
    features: ["AI Content Generation & Optimization", "Predictive Analytics & Forecasting", "Automated Campaign Management", "Smart Audience Segmentation", "Real-time Performance Optimization", "Competitive Intelligence Analysis"],
    pricing: "Starting at $1,997/month",
    results: "+400% engagement increase",
    category: "Premium",
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
  }, {
    icon: Search,
    title: "Advanced SEO & Content Strategy",
    description: "Data-driven SEO strategies with AI-powered content optimization that dominates search rankings.",
    features: ["Advanced Keyword Research & Analysis", "Technical SEO Optimization", "AI-Powered Content Strategy", "Link Building & Authority Growth", "Local SEO & Maps Optimization", "Voice Search Optimization"],
    pricing: "Starting at $797/month",
    results: "+350% organic traffic growth",
    category: "Popular",
    color: "from-green-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  }, {
    icon: Target,
    title: "Precision PPC Advertising",
    description: "AI-optimized advertising campaigns that maximize ROI across all major platforms.",
    features: ["Google Ads & Microsoft Ads Management", "Facebook & Instagram Advertising", "LinkedIn & Twitter Campaigns", "AI-Powered Bid Optimization", "Advanced Conversion Tracking", "Multi-Platform Attribution Modeling"],
    pricing: "Starting at $997/month",
    results: "+500% ROI improvement",
    category: "High ROI",
    color: "from-blue-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  }, {
    icon: Mail,
    title: "Email Marketing Automation",
    description: "Sophisticated email marketing systems that nurture leads and drive conversions at scale.",
    features: ["Advanced Automation Sequences", "Dynamic Personalization", "A/B Testing & Optimization", "Behavioral Trigger Campaigns", "CRM Integration & Syncing", "Advanced Analytics & Reporting"],
    pricing: "Starting at $597/month",
    results: "+60% email open rates",
    category: "Conversion",
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
  }, {
    icon: BarChart3,
    title: "Conversion Rate Optimization",
    description: "Scientific approach to increasing website conversions through data-driven testing and optimization.",
    features: ["Comprehensive Website Audits", "A/B & Multivariate Testing", "User Experience Optimization", "Landing Page Development", "Conversion Funnel Analysis", "Heat Mapping & User Recording"],
    pricing: "Starting at $897/month",
    results: "+45% conversion rate increase",
    category: "Growth",
    color: "from-cyan-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  }, {
    icon: Video,
    title: "Video Marketing Excellence",
    description: "Complete video marketing solutions from strategy to production and distribution.",
    features: ["Video Strategy Development", "Professional Production", "YouTube Channel Optimization", "Video Advertising Campaigns", "Performance Analytics", "Live Streaming Solutions"],
    pricing: "Starting at $1,297/month",
    results: "+200% engagement increase",
    category: "Creative",
    color: "from-pink-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop"
  }];
  const additionalServices = [{
    icon: Smartphone,
    title: "Mobile App Marketing",
    description: "Drive app downloads and engagement with targeted mobile marketing strategies.",
    features: ["App Store Optimization (ASO)", "Mobile Ad Campaign Management", "User Acquisition Strategies", "In-App Engagement Optimization", "App Analytics & Reporting"],
    pricing: "Starting at $797/month",
    results: "+300% app downloads",
    color: "from-indigo-500 to-purple-500"
  }, {
    icon: Globe,
    title: "Website Design & Development",
    description: "Create stunning, high-converting websites that drive business growth.",
    features: ["Custom Website Design", "Responsive Development", "E-commerce Solutions", "CMS Integration", "Performance Optimization"],
    pricing: "Starting at $2,997 one-time",
    results: "+80% user engagement",
    color: "from-green-500 to-emerald-500"
  }, {
    icon: MessageSquare,
    title: "Chatbot & AI Automation",
    description: "Automate customer service and lead generation with intelligent chatbots.",
    features: ["AI Chatbot Development", "Lead Qualification Automation", "Customer Support Integration", "Multi-platform Deployment", "Analytics & Optimization"],
    pricing: "Starting at $497/month",
    results: "+24/7 customer support",
    color: "from-violet-500 to-purple-500"
  }, {
    icon: ShoppingCart,
    title: "E-commerce Marketing",
    description: "Boost online sales with comprehensive e-commerce marketing strategies.",
    features: ["Product Listing Optimization", "Shopping Campaign Management", "Cart Abandonment Recovery", "Inventory Marketing", "Customer Retention Strategies"],
    pricing: "Starting at $697/month",
    results: "+40% online sales increase",
    color: "from-yellow-500 to-orange-500"
  }, {
    icon: Camera,
    title: "Brand Photography & Design",
    description: "Professional visual content that elevates your brand presence.",
    features: ["Professional Photography", "Brand Identity Design", "Graphic Design Services", "Visual Content Strategy", "Brand Guidelines Development"],
    pricing: "Starting at $1,497/month",
    results: "+Enhanced brand recognition",
    color: "from-pink-500 to-red-500"
  }, {
    icon: Megaphone,
    title: "Influencer Marketing",
    description: "Leverage influencer partnerships to expand your reach and credibility.",
    features: ["Influencer Identification & Outreach", "Campaign Strategy & Management", "Content Collaboration", "Performance Tracking", "ROI Measurement"],
    pricing: "Starting at $897/month",
    results: "+Expanded brand reach",
    color: "from-purple-500 to-indigo-500"
  }, {
    icon: Database,
    title: "Marketing Automation",
    description: "Streamline your marketing processes with advanced automation tools.",
    features: ["Lead Scoring & Nurturing", "Workflow Automation", "CRM Integration", "Customer Journey Mapping", "Performance Tracking"],
    pricing: "Starting at $597/month",
    results: "+70% lead quality improvement",
    color: "from-teal-500 to-cyan-500"
  }, {
    icon: BarChart,
    title: "Advanced Analytics & Reporting",
    description: "Get deep insights into your marketing performance with custom analytics solutions.",
    features: ["Custom Dashboard Development", "Advanced Data Analysis", "Predictive Modeling", "ROI Tracking", "Automated Reporting"],
    pricing: "Starting at $497/month",
    results: "+90% better decision making",
    color: "from-blue-500 to-indigo-500"
  }, {
    icon: Lightbulb,
    title: "Marketing Strategy Consulting",
    description: "Expert guidance to develop comprehensive marketing strategies for your business.",
    features: ["Market Research & Analysis", "Competitor Analysis", "Strategy Development", "Implementation Planning", "Performance Monitoring"],
    pricing: "Starting at $2,997/month",
    results: "+Strategic clarity & direction",
    color: "from-yellow-500 to-amber-500"
  }];
  const trustBadges = [{
    icon: Shield,
    text: "100% Secure"
  }, {
    icon: Award,
    text: "Award Winning"
  }, {
    icon: Users,
    text: "500+ Clients"
  }, {
    icon: Clock,
    text: "24/7 Support"
  }];
  return <>
      <Navbar />
      
      {/* Hero Section with Enhanced Animations */}
      <section className="bg-animate-gradient text-white page-with-navbar section-padding overflow-hidden particle-bg relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-floating-shapes" />
          <motion.div animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          x: [100, -100, 100],
          y: [-50, 50, -50]
        }} transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-floating-shapes" />
          <motion.div animate={{
          rotate: [0, 360]
        }} transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full animate-rotate-slow" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="animate-fade-in-up">
            <motion.div whileHover={{
            scale: 1.05
          }} className="inline-block">
              <Badge className="bg-white/20 text-white mb-6 text-lg px-6 py-3 animate-pulse-glow glow-effect border-0">
                🚀 Next-Generation Marketing Solutions
              </Badge>
            </motion.div>
            
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in" initial={{
            scale: 0.8,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            duration: 1,
            delay: 0.2
          }}>
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent animate-pulse-glow">
                AI-Powered Marketing
              </span>
            </motion.h1>
            
            <motion.p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 animate-slide-in-left" initial={{
            x: -50,
            opacity: 0
          }} animate={{
            x: 0,
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }}>
              Experience the future of digital marketing with our comprehensive suite of AI-powered services. 
              From strategy to execution, we deliver measurable results that accelerate your business growth.
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" initial={{
            y: 30,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }}>
              <Link to="/strategy-call-calendly">
                <motion.div whileHover={{
                scale: 1.05,
                y: -2
              }} whileTap={{
                scale: 0.95
              }} className="micro-bounce">
                  <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-lg px-8 py-4 rounded-xl shimmer-effect glow-effect">
                    Get Free Strategy Session <Rocket className="ml-2" size={20} />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/contact">
                <motion.div whileHover={{
                scale: 1.05,
                y: -2
              }} whileTap={{
                scale: 0.95
              }} className="micro-bounce">
                  <Button variant="outline" className="border-2 border-white hover:bg-white text-lg px-8 py-4 rounded-xl transition-all duration-300 text-green-500">
                    View Case Studies <ArrowRight className="ml-2" size={20} />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div className="flex flex-wrap justify-center gap-6 mb-8" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 1,
            delay: 0.8
          }}>
              {trustBadges.map((badge, index) => <motion.div key={index} whileHover={{
              scale: 1.1,
              y: -5
            }} className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm glow-effect">
                  <badge.icon size={20} className="text-yellow-300 animate-pulse-glow" />
                  <span className="text-white font-medium">{badge.text}</span>
                </motion.div>)}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding particle-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-4 text-lg px-4 py-2">
              Featured Services
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Premium Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of marketing services designed to drive growth and maximize your ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} whileHover={{
            y: -10,
            scale: 1.02
          }} viewport={{
            once: true
          }} className="h-full group">
                <Card className="h-full flex flex-col overflow-hidden shadow-xl border-0 bg-white hover-glow relative glow-effect">
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className={`bg-gradient-to-r ${service.color} text-white animate-pulse-glow`}>
                      {service.category}
                    </Badge>
                  </div>

                  {/* Service Image with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`} />
                    <motion.div whileHover={{
                  scale: 1.2,
                  rotate: 360
                }} transition={{
                  duration: 0.5
                }} className="absolute bottom-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 animate-bounce-gentle">
                        <service.icon size={32} className="text-white" />
                      </div>
                    </motion.div>
                    
                    {/* Floating Price */}
                    <motion.div whileHover={{
                  scale: 1.05
                }} className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 animate-float">
                      <span className="text-gray-900 font-bold text-sm">{service.pricing}</span>
                    </motion.div>
                  </div>

                  <CardHeader className="flex-grow">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-4">
                      {service.description}
                    </CardDescription>
                    
                    {/* Results Badge */}
                    <motion.div whileHover={{
                  scale: 1.05
                }} className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.color} text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse-glow`}>
                      <TrendingUp size={16} />
                      <span>{service.results}</span>
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Star className="text-yellow-500 mr-2 animate-pulse" size={16} />
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => <motion.li key={featureIndex} className="flex items-start space-x-2" initial={{
                      opacity: 0,
                      x: -20
                    }} whileInView={{
                      opacity: 1,
                      x: 0
                    }} transition={{
                      delay: featureIndex * 0.1
                    }} viewport={{
                      once: true
                    }}>
                            <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0 animate-pulse" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </motion.li>)}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <motion.div whileHover={{
                    scale: 1.02
                  }} whileTap={{
                    scale: 0.98
                  }}>
                        <Button onClick={() => handleLearnMore(service)} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-lg border-0 min-h-[44px] transition-all duration-300">
                          Learn More <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <Badge className="bg-gradient-to-r from-green-600 to-teal-600 text-white mb-4 text-lg px-4 py-2 animate-pulse-glow">
              Additional Services
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Marketing Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expand your marketing capabilities with our specialized services designed to cover every aspect of your digital presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} whileHover={{
            y: -8,
            scale: 1.02
          }} viewport={{
            once: true
          }} className="h-full group">
                <Card className="h-full flex flex-col overflow-hidden shadow-xl border-0 bg-white hover-glow glow-effect">
                  <CardHeader className="relative bg-gradient-to-br from-white to-gray-50">
                    <motion.div whileHover={{
                  scale: 1.1,
                  rotate: 5
                }} className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} mb-4 animate-bounce-gentle`}>
                      <service.icon size={32} className="text-white" />
                    </motion.div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-4">
                      {service.description}
                    </CardDescription>
                    
                    {/* Pricing */}
                    <motion.div whileHover={{
                  scale: 1.05
                }} className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      <DollarSign size={16} />
                      <span>{service.pricing}</span>
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Zap className="text-yellow-500 mr-2 animate-pulse" size={16} />
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => <motion.li key={featureIndex} className="flex items-start space-x-2" initial={{
                      opacity: 0,
                      x: -20
                    }} whileInView={{
                      opacity: 1,
                      x: 0
                    }} transition={{
                      delay: featureIndex * 0.1
                    }} viewport={{
                      once: true
                    }}>
                            <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0 animate-pulse" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </motion.li>)}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <motion.div whileHover={{
                    scale: 1.02
                  }} whileTap={{
                    scale: 0.98
                  }}>
                        <Button onClick={() => handleLearnMore(service)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg border-0 min-h-[44px] transition-all duration-300">
                          Get Started <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-animate-gradient text-white section-padding particle-bg relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0">
          <motion.div animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 360],
          opacity: [0.1, 0.3, 0.1]
        }} transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-rotate-slow" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="animate-float">
            <motion.div whileHover={{
            scale: 1.05
          }} className="inline-block mb-6">
              <Badge className="bg-yellow-400 text-black text-xl px-6 py-3 animate-pulse-glow">
                🎯 Ready to Dominate Your Market?
              </Badge>
            </motion.div>
            
            <h2 className="text-4xl md:text-7xl font-bold mb-6 animate-scale-in">
              Let's <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Transform</span> Your Business
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
              Join 500+ successful businesses that have accelerated their growth with our AI-powered marketing solutions. 
              Get your custom strategy session today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link to="/strategy-call-calendly">
                <motion.div whileHover={{
                scale: 1.08,
                y: -5
              }} whileTap={{
                scale: 0.95
              }} className="micro-bounce">
                  <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-xl px-12 py-6 rounded-2xl shimmer-effect glow-effect shadow-2xl">
                    Book Free Strategy Call <Calendar className="ml-3" size={24} />
                  </Button>
                </motion.div>
              </Link>
              
              <Link to="/contact">
                <motion.div whileHover={{
                scale: 1.08,
                y: -5
              }} whileTap={{
                scale: 0.95
              }} className="micro-bounce">
                  <Button variant="hero" className="text-white hover:bg-white hover:text-black text-xl px-12 py-6 rounded-2xl font-bold transition-all duration-300 min-h-[44px] shadow-lg">
                    View Our Work <Activity className="ml-3" size={24} />
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Guarantee Section */}
            <motion.div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20" whileHover={{
            scale: 1.02
          }} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} viewport={{
            once: true
          }}>
              <div className="flex items-center justify-center mb-4">
                <Shield className="text-green-400 mr-3 animate-pulse-glow" size={40} />
                <h3 className="text-2xl font-bold">30-Day Growth Guarantee</h3>
              </div>
              <p className="text-lg text-white/90">
                We're so confident in our results, we guarantee measurable growth within 30 days or your money back. No questions asked.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <ServiceModal isOpen={!!selectedService} service={selectedService} onClose={() => setSelectedService(null)} />
    </>;
};
export default Services;