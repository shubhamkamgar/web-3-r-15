import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, Video, CheckCircle, Target, TrendingUp, Users, Zap, ExternalLink, Star, Award, Shield, Brain, Sparkles, ArrowRight } from 'lucide-react';

const StrategyCallCalendly = () => {
  const benefits = [
    {
      icon: Target,
      title: "Custom Strategy Development",
      description: "Receive a personalized marketing strategy tailored to your business goals and industry.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunity Analysis", 
      description: "Identify untapped opportunities and quick wins to accelerate your business growth.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Competitor Insights",
      description: "Learn what your competitors are doing and how to outperform them in the market.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "ROI Projections",
      description: "Get realistic projections of potential returns on your marketing investment.",
      gradient: "from-pink-500 to-purple-500"
    }
  ];

  const callFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced AI analysis of your current marketing performance"
    },
    {
      icon: Shield,
      title: "Competitive Intelligence",
      description: "Detailed competitor analysis and market positioning"
    },
    {
      icon: Target,
      title: "Growth Roadmap",
      description: "Step-by-step plan to achieve your business goals"
    },
    {
      icon: Award,
      title: "ROI Projections",
      description: "Realistic revenue projections based on our proven methods"
    }
  ];

  const experts = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior AI Strategy Consultant",
      bio: "Expert in AI-powered strategies for SaaS and e-commerce",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=faces",
      calendlyUrl: "https://calendly.com/sarah-chen-aimax",
      specialties: ["AI Marketing", "SaaS Growth", "E-commerce"],
      rating: 4.9
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Growth Marketing Director",
      bio: "Specializes in scaling businesses through data-driven marketing",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=faces",
      calendlyUrl: "https://calendly.com/marcus-rodriguez-aimax",
      specialties: ["Growth Hacking", "Performance Marketing", "Analytics"],
      rating: 4.8
    },
    {
      id: 3,
      name: "Jennifer Park",
      title: "Digital Transformation Lead",
      bio: "Helps traditional businesses leverage AI for competitive advantage",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=faces",
      calendlyUrl: "https://calendly.com/jennifer-park-aimax",
      specialties: ["Digital Transformation", "AI Implementation", "Strategy"],
      rating: 4.9
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Performance Marketing Expert",
      bio: "ROI optimization specialist with 10+ years in paid advertising",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=faces",
      calendlyUrl: "https://calendly.com/david-thompson-aimax",
      specialties: ["PPC Advertising", "ROI Optimization", "Campaign Management"],
      rating: 4.7
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Content & SEO Strategist",
      bio: "AI-powered content marketing and organic growth specialist",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=faces",
      calendlyUrl: "https://calendly.com/lisa-wang-aimax",
      specialties: ["Content Marketing", "SEO", "Organic Growth"],
      rating: 4.8
    },
    {
      id: 6,
      name: "Alex Rivera",
      title: "Sales Funnel Optimization Manager",
      bio: "Conversion rate optimization and automation expert",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=faces",
      calendlyUrl: "https://calendly.com/alex-rivera-aimax",
      specialties: ["Funnel Optimization", "CRO", "Marketing Automation"],
      rating: 4.9
    }
  ];

  const scrollToExperts = () => {
    document.getElementById('experts-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white page-with-navbar section-padding overflow-hidden relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-6 text-lg px-6 py-3 rounded-full">
                <Sparkles className="w-5 h-5 mr-2" />
                Premium Strategy Consultation
              </Badge>
            </motion.div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Book Your Free <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Strategy Call</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover how AI-powered marketing can transform your business. Get a custom strategy, 
              competitor analysis, and ROI projections — completely free.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-8"
            >
              <Button 
                onClick={scrollToExperts}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-12 py-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Calendar className="mr-3" size={24} />
                🚀 Free 30-Minute Premium Consultation
                <Sparkles className="ml-3" size={24} />
              </Button>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <motion.div 
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <Calendar className="text-purple-400" size={24} />
                <span className="text-lg font-medium">30-minute session</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <Video className="text-blue-400" size={24} />
                <span className="text-lg font-medium">Via Zoom or phone</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="text-green-400" size={24} />
                <span className="text-lg font-medium">Available 7 days a week</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              What You'll <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Receive</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This isn't just another sales call. We'll provide genuine value and actionable 
              insights you can implement immediately.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  <CardHeader className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon size={40} className="text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {callFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Expert Section */}
      <section id="experts-section" className="bg-gradient-to-br from-purple-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Expert</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the strategy expert you'd like to book a consultation with. 
              All our experts are certified and have proven track records.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <motion.div
                key={expert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border-4 border-purple-200 group-hover:border-purple-400 transition-colors duration-300">
                      <img 
                        src={expert.image} 
                        alt={expert.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {expert.name}
                    </CardTitle>
                    
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-3">
                      {expert.title}
                    </Badge>
                    
                    <div className="flex items-center justify-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${i < Math.floor(expert.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">({expert.rating})</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {expert.bio}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {expert.specialties.map((specialty, specialtyIndex) => (
                        <Badge 
                          key={specialtyIndex}
                          variant="outline" 
                          className="text-xs bg-purple-50 text-purple-700 border-purple-200"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group-hover:shadow-lg transition-all duration-300 py-3"
                        onClick={() => window.open(expert.calendlyUrl, '_blank')}
                      >
                        <Calendar className="mr-2" size={16} />
                        Book with {expert.name.split(' ')[0]}
                        <ExternalLink className="ml-2" size={16} />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Guarantee</span>
            </h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <CheckCircle size={80} className="text-green-400 mx-auto mb-6" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-6">✅ 100% Value Guarantee</h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                If you don't walk away from our strategy call with at least 3 actionable insights 
                that could improve your marketing results, we'll send you a $100 Amazon gift card. 
                That's how confident we are in the value we provide.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  <span>No spam, no obligations</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-400" />
                  <span>30-minute guaranteed value</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={scrollToExperts}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-12 py-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Sparkles className="mr-3" size={24} />
                Choose Your Expert Now 🚀
                <ArrowRight className="ml-3" size={24} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default StrategyCallCalendly;
