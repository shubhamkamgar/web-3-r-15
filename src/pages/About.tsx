import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import EnhancedFooter from '@/components/EnhancedFooter';
import CompanyJourney from '@/components/CompanyJourney';
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Trophy,
  Gauge,
  Zap,
  Target,
  Brain,
  Heart,
  Shield,
  Globe,
  Lightbulb,
  Star,
  Rocket,
  CheckCircle,
  MessageSquare,
  Sparkles,
  Crown,
  Eye,
  Handshake,
  Clock,
  Award,
  Medal,
  Briefcase,
  Calendar
} from 'lucide-react';

const About = () => {
  // Hero Section Animation Variants
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Stats Data
  const stats = [
    { 
      value: "2500+", 
      label: "Happy Clients",
      description: "Satisfied clients worldwide",
      icon: Users, 
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-500"
    },
    { 
      value: "97%", 
      label: "Success Rate",
      description: "Project completion rate",
      icon: TrendingUp, 
      color: "from-green-500 to-green-600",
      bg: "bg-green-500"
    },
    { 
      value: "4", 
      label: "Awards Won",
      description: "Industry recognitions",
      icon: Trophy, 
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-500"
    },
    { 
      value: "100%", 
      label: "Growth Rate",
      description: "Average client growth",
      icon: Gauge, 
      color: "from-orange-500 to-orange-600",
      bg: "bg-orange-500"
    }
  ];

  // Awards Data
  const awards = [
    {
      year: "2024",
      title: "Best AI Marketing Agency",
      organization: "Digital Marketing Institute",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      bg: "bg-gradient-to-r from-yellow-500 to-orange-500"
    },
    {
      year: "2023",
      title: "Innovation Excellence Award",
      organization: "Tech Innovation Council",
      icon: Lightbulb,
      color: "from-blue-500 to-purple-500",
      bg: "bg-gradient-to-r from-blue-500 to-purple-500"
    },
    {
      year: "2023",
      title: "Top Marketing Agency",
      organization: "Business Excellence Awards",
      icon: Star,
      color: "from-green-500 to-teal-500",
      bg: "bg-gradient-to-r from-green-500 to-teal-500"
    },
    {
      year: "2022",
      title: "Global Marketing Leader",
      organization: "International Marketing Federation",
      icon: Globe,
      color: "from-pink-500 to-red-500",
      bg: "bg-gradient-to-r from-pink-500 to-red-500"
    }
  ];

  // Purpose Data
  const purposeData = [
    {
      title: "Our Mission",
      description: "To democratize AI-powered marketing and help businesses of all sizes achieve extraordinary growth through innovative digital strategies and cutting-edge technology.",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-500"
    },
    {
      title: "Our Vision",
      description: "To become the world's leading AI marketing agency, transforming how businesses connect with their audiences and drive sustainable growth in the digital age.",
      icon: Eye,
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-500"
    },
    {
      title: "Our Promise",
      description: "To deliver transparent, ethical, and results-driven marketing solutions that create lasting value for our clients, their customers, and the digital ecosystem.",
      icon: Shield,
      color: "from-green-500 to-teal-500",
      bg: "bg-green-500"
    }
  ];

  // Core Values Data
  const coreValues = [
    {
      title: "Innovation First",
      description: "We leverage cutting-edge AI technology and stay ahead of industry trends to deliver unprecedented results for our clients.",
      icon: Lightbulb,
      color: "from-blue-500 to-purple-500",
      bg: "bg-blue-500"
    },
    {
      title: "Client-Centric Approach",
      description: "Every strategy is tailored to our clients' unique needs and goals. Your success is our ultimate measure of achievement.",
      icon: Heart,
      color: "from-pink-500 to-red-500",
      bg: "bg-pink-500"
    },
    {
      title: "Results-Driven Excellence",
      description: "We focus on measurable outcomes and exceptional ROI. Every campaign is optimized for maximum performance and growth.",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      bg: "bg-green-500"
    },
    {
      title: "Agile Execution",
      description: "We move fast and adapt quickly to market changes, ensuring our clients stay competitive in the digital landscape.",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      bg: "bg-yellow-500"
    },
    {
      title: "Trust & Transparency",
      description: "We build lasting partnerships through honest communication, ethical practices, and complete transparency in all our work.",
      icon: Shield,
      color: "from-indigo-500 to-blue-500",
      bg: "bg-indigo-500"
    },
    {
      title: "Global Impact",
      description: "We think globally while acting locally, helping businesses of all sizes achieve international success and recognition.",
      icon: Globe,
      color: "from-teal-500 to-cyan-500",
      bg: "bg-teal-500"
    }
  ];

  // Enhanced Team Members Data with more members
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Visionary leader with 12+ years in digital marketing and AI innovation. Former Google marketing strategist passionate about transforming businesses through cutting-edge technology.",
      achievements: ["Forbes 30 Under 30", "2x Exit Founder"],
      skills: ["AI Strategy", "Digital Marketing", "Business Growth", "Team Leadership"],
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Sarah Johnson",
      position: "Head of AI Innovation",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "PhD in Machine Learning from Stanford. Leading AI researcher specializing in marketing automation and predictive analytics with 15+ published papers.",
      achievements: ["PhD Stanford", "15+ Research Papers"],
      skills: ["Machine Learning", "Data Science", "AI Automation", "Predictive Analytics"],
      color: "from-emerald-500 to-cyan-500"
    },
    {
      name: "Michael Chen",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning creative director with 10+ years crafting compelling brand stories. Expert in visual design and creative campaign development.",
      achievements: ["Cannes Lions Winner", "Brand Design Expert"],
      skills: ["Brand Design", "Creative Strategy", "Visual Identity", "Campaign Development"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Emma Thompson",
      position: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Strategic marketing expert with 8+ years helping Fortune 500 companies achieve breakthrough results. Specialist in growth hacking and conversion optimization.",
      achievements: ["Fortune 500 Consultant", "Growth Hacking Expert"],
      skills: ["Growth Strategy", "Conversion Optimization", "Market Research", "ROI Analysis"],
      color: "from-pink-500 to-orange-500"
    },
    {
      name: "David Kumar",
      position: "Head of Technology",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer and AI engineer with expertise in building scalable marketing platforms. Previously worked at Meta and Netflix on recommendation systems.",
      achievements: ["Ex-Meta Engineer", "Netflix Alumni"],
      skills: ["Full-Stack Development", "AI Engineering", "System Architecture", "Data Engineering"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Lisa Martinez",
      position: "Head of Client Success",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: "Customer success leader with 9+ years ensuring client satisfaction and retention. Expert in building long-term partnerships and driving customer growth.",
      achievements: ["97% Client Retention", "Customer Success Expert"],
      skills: ["Client Relations", "Customer Success", "Account Management", "Retention Strategy"],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 page-with-navbar section-padding relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Orbs */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl"
          />
          
          {/* Floating Sparkles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -30, 0],
                x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
                rotate: [0, 360],
                opacity: [0, 0.6, 0]
              }}
              transition={{ 
                duration: 6 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
              className="absolute"
              style={{
                top: `${10 + (i * 7) % 70}%`,
                left: `${5 + (i * 8) % 80}%`,
              }}
            >
              <Sparkles className="w-3 h-3 text-blue-400" />
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg px-6 py-3 rounded-full border-0 shadow-lg">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  <Star className="w-5 h-5" />
                </motion.div>
                Premium AI Marketing Solutions
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-8 text-gray-900"
            >
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AIAdMaxify</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              We're revolutionizing digital marketing through cutting-edge AI technology, 
              helping businesses achieve unprecedented growth and transformational success.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mr-2"
                  >
                    <Rocket className="w-5 h-5" />
                  </motion.div>
                  Discover Our Story
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 rounded-xl transition-all duration-300"
                >
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Numbers That Speak Volumes */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Numbers That Speak <span className="text-blue-600">Volumes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our outstanding results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${stat.bg} flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon size={36} className="text-white" />
                    </motion.div>
                    
                    <motion.div 
                      className="text-4xl font-bold text-gray-900 mb-3"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section - Enhanced */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg px-6 py-3 rounded-full border-0 shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Our Success Timeline
              </Badge>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a visionary startup to a leading AI marketing powerhouse, discover the 
              milestones that shaped our success story
            </p>
          </motion.div>

          <CompanyJourney />
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Awards & <span className="text-blue-600">Recognition</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized globally for excellence in AI-driven marketing innovation and outstanding client results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${award.bg} flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <award.icon size={36} className="text-white" />
                    </motion.div>
                    
                    <div className="text-2xl font-bold text-gray-900 mb-2">{award.year}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{award.title}</h3>
                    <p className="text-sm text-gray-600">{award.organization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Purpose</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by innovation, guided by results, and committed to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {purposeData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-6 rounded-full ${item.bg} flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon size={36} className="text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <motion.div 
                      className={`w-16 h-16 mx-auto mb-4 rounded-full ${value.bg} flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <value.icon size={28} className="text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Expert Team - Enhanced with more members */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg px-6 py-3 rounded-full border-0 shadow-lg">
                <Users className="w-5 h-5 mr-2" />
                World-Class Team
              </Badge>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class professionals dedicated to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Achievement Badges */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {member.achievements.map((achievement, achIndex) => (
                          <motion.span
                            key={achIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: achIndex * 0.1 }}
                            className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-medium"
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Rotating Crown Icon */}
                    <motion.div 
                      className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Crown className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Floating Sparkles */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                      className="absolute top-6 left-6"
                    >
                      <Sparkles className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                  
                  <CardContent className="p-6 relative">
                    {/* Background Animation */}
                    <motion.div
                      className="absolute inset-0 opacity-5"
                      animate={{
                        background: [
                          "linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.1), transparent)",
                          "linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.1), transparent)",
                          "linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.1), transparent)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10">
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 mb-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p 
                        className={`bg-gradient-to-r ${member.color} bg-clip-text text-transparent font-semibold mb-3`}
                        whileHover={{ scale: 1.02 }}
                      >
                        {member.position}
                      </motion.p>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className={`px-3 py-1 bg-gradient-to-r ${member.color} text-white rounded-full text-xs font-medium shadow-md`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white section-padding relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10"
          />
          
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 6 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${10 + (i * 6) % 80}%`,
                top: `${20 + (i * 8) % 60}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black mb-6 text-lg px-6 py-3 rounded-full border-0 shadow-lg">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="mr-2"
              >
                <Trophy className="w-5 h-5" />
              </motion.div>
              Ready to Join Our Success Stories?
            </Badge>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Create <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Amazing Results</span> Together
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join 500+ successful businesses who trust us with their growth. 
              Your success story starts with a single conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/strategy-call-calendly">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -3 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="mr-2"
                    >
                      <Rocket className="w-5 h-5" />
                    </motion.div>
                    Book Your Free Strategy Call
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
              
              <Link to="/contact">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -3 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-4 rounded-xl transition-all duration-300">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Contact Our Team
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>No Long-term Contracts</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-400" />
                <span>Data Protection Guaranteed</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-purple-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  );
};

export default About;
