
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, TrendingUp, Award, Zap, Brain, Target, Globe, Star, Rocket, Crown, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

const CompanyJourney = () => {
  const milestones = [
    {
      year: "2017",
      title: "Founding Moment",
      person: "Rushikesh",
      description: "AIAdMaxify was founded with a revolutionary vision to transform digital marketing through cutting-edge AI technology and innovation.",
      icon: Zap,
      achievements: [
        "Founded by leading AI experts",
        "First proprietary AI algorithm developed",
        "Initial seed funding of $2M secured",
        "Core team of 5 specialists assembled"
      ],
      gradient: "from-purple-500 via-purple-600 to-blue-600",
      bgGradient: "from-purple-50 to-blue-50",
      accentColor: "purple-500",
      stats: { clients: "0", growth: "Foundation", milestone: "AI Algorithm v1.0" }
    },
    {
      year: "2018",
      title: "AI Innovation Breakthrough",
      person: "Sarah Johnson",
      description: "Launched our revolutionary AI marketing platform, delivering unprecedented 300% better results than traditional marketing methods.",
      icon: Brain,
      achievements: [
        "AI platform successfully launched",
        "50+ early adopter clients onboarded",
        "300% improvement in campaign performance",
        "First industry recognition received"
      ],
      gradient: "from-blue-500 via-cyan-500 to-teal-600",
      bgGradient: "from-blue-50 to-cyan-50",
      accentColor: "blue-500",
      stats: { clients: "50+", growth: "300%", milestone: "AI Platform Launch" }
    },
    {
      year: "2019",
      title: "Market Expansion",
      person: "Michael Chen",
      description: "Experienced remarkable expansion, growing our team and client base while helping 200+ businesses achieve unprecedented growth.",
      icon: TrendingUp,
      achievements: [
        "200+ satisfied clients served",
        "Expert team expanded to 25+ professionals",
        "17X average ROI consistently achieved",
        "International market presence established"
      ],
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      bgGradient: "from-green-50 to-emerald-50",
      accentColor: "green-500",
      stats: { clients: "200+", growth: "17X ROI", milestone: "Global Expansion" }
    },
    {
      year: "2020",
      title: "Digital Transformation",
      person: "Alex Rodriguez",
      description: "Led the digital transformation wave, helping businesses adapt to new market realities with innovative AI solutions.",
      icon: Target,
      achievements: [
        "COVID-19 digital pivot solutions",
        "Remote work optimization tools",
        "E-commerce acceleration programs",
        "Crisis management expertise"
      ],
      gradient: "from-orange-500 via-red-500 to-pink-600",
      bgGradient: "from-orange-50 to-red-50",
      accentColor: "orange-500",
      stats: { clients: "350+", growth: "Remote Ready", milestone: "Digital Pivot" }
    },
    {
      year: "2021",
      title: "Industry Leadership",
      person: "Emma Thompson",
      description: "Achieved industry recognition with multiple prestigious awards while maintaining 97% client satisfaction across 450+ successful partnerships.",
      icon: Award,
      achievements: [
        "Multiple prestigious industry awards won",
        "450+ happy clients milestone reached",
        "97% client satisfaction rate maintained",
        "Thought leadership in AI marketing established"
      ],
      gradient: "from-pink-500 via-purple-500 to-indigo-600",
      bgGradient: "from-pink-50 to-purple-50",
      accentColor: "pink-500",
      stats: { clients: "450+", growth: "97% Satisfaction", milestone: "Industry Awards" }
    },
    {
      year: "2022",
      title: "Global Innovation Hub",
      person: "David Kumar",
      description: "Expanding internationally while pioneering next-generation AI solutions, setting new standards for personalized marketing excellence.",
      icon: Globe,
      achievements: [
        "Global expansion across 25+ countries",
        "Next-gen AI features revolutionizing marketing",
        "Future-ready solutions for emerging technologies",
        "Sustainable growth partnerships established"
      ],
      gradient: "from-indigo-500 via-blue-500 to-cyan-600",
      bgGradient: "from-indigo-50 to-blue-50",
      accentColor: "indigo-500",
      stats: { clients: "Global", growth: "Next-Gen AI", milestone: "Future Ready" }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
            className={`absolute w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 blur-xl`}
            style={{
              top: `${10 + (i * 15) % 70}%`,
              left: `${5 + (i * 20) % 80}%`,
            }}
          />
        ))}
      </div>

      {/* Animated Timeline Line */}
      <motion.div
        variants={timelineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full origin-top"
        style={{
          background: "linear-gradient(to bottom, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ef4444, #8b5cf6)"
        }}
      />

      {/* Glowing Timeline Dots */}
      {milestones.map((milestone, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white shadow-lg border-4 border-purple-500 z-10"
          style={{ top: `${index * 16.66 + 8}%` }}
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-1 rounded-full bg-gradient-to-r ${milestone.gradient}`}
          />
        </motion.div>
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-16 relative z-20"
      >
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-12 md:gap-16`}
          >
            {/* Content Card */}
            <div className="flex-1 max-w-lg">
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  rotateY: index % 2 === 0 ? 2 : -2
                }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className={`h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-gradient-to-br ${milestone.bgGradient} relative`}>
                  {/* Animated Background Pattern */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} opacity-5 group-hover:opacity-15`}
                    animate={{ 
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Floating Sparkles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -20, 0],
                          x: [0, 10, 0],
                          rotate: [0, 360],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 4 + i,
                          repeat: Infinity,
                          delay: i * 1.5
                        }}
                        className={`absolute top-${4 + i * 2} right-${4 + i * 3}`}
                      >
                        <Sparkles className={`w-4 h-4 text-${milestone.accentColor}`} />
                      </motion.div>
                    ))}
                  </div>
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-start gap-6 mb-6">
                      {/* Animated Icon */}
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${milestone.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl relative overflow-hidden`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Icon Glow Effect */}
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-white rounded-2xl opacity-20"
                        />
                        <milestone.icon size={28} className="text-white relative z-10" />
                        
                        {/* Floating Crown for Special Years */}
                        {(milestone.year === "2021" || milestone.year === "2022") && (
                          <motion.div
                            animate={{ 
                              y: [-2, -8, -2],
                              rotate: [0, 10, -10, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -top-2 -right-2"
                          >
                            <Crown className="w-4 h-4 text-yellow-400" />
                          </motion.div>
                        )}
                      </motion.div>
                      
                      <div className="flex-1">
                        {/* Year Badge */}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="mb-2"
                        >
                          <Badge className={`bg-gradient-to-r ${milestone.gradient} text-white text-base px-4 py-2 rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300`}>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                              className="mr-2"
                            >
                              <Star className="w-4 h-4" />
                            </motion.div>
                            {milestone.year}
                          </Badge>
                        </motion.div>
                        
                        {/* Title */}
                        <motion.h3 
                          className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          {milestone.title}
                        </motion.h3>

                        {/* Person Name */}
                        <motion.p 
                          className={`text-lg font-semibold text-${milestone.accentColor} mb-3`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {milestone.person}
                        </motion.p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <motion.p 
                      className="text-gray-700 text-base leading-relaxed mb-4"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {milestone.description}
                    </motion.p>

                    {/* Key Achievement Box */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={`p-4 bg-gradient-to-r ${milestone.gradient} bg-opacity-10 rounded-xl border-2 border-${milestone.accentColor} border-opacity-20 mb-4`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                        <Award className="w-5 h-5 text-black" />
                        </motion.div>
                        <span className="text-black font-semibold text-sm">KEY ACHIEVEMENT</span>
                      </div>
                      <p className="text-gray-800 font-medium">{milestone.achievements[0]}</p>
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    {/* Additional Achievements */}
                    <motion.div 
                      className="space-y-2"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                      initial="hidden"
                      whileInView="visible"
                    >
                      {milestone.achievements.slice(1).map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="flex items-center space-x-3 group/achievement"
                        >
                          <motion.div 
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${milestone.gradient} shadow-lg`}
                            whileHover={{ scale: 1.5 }}
                            animate={{ 
                              boxShadow: [
                                "0 0 0 0 rgba(139, 92, 246, 0.4)",
                                "0 0 0 8px rgba(139, 92, 246, 0)",
                                "0 0 0 0 rgba(139, 92, 246, 0)"
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-gray-700 text-sm group-hover/achievement:text-purple-600 transition-colors duration-200">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            {/* Timeline Connection */}
            <div className="flex-shrink-0 relative">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-6 h-6 rounded-full bg-gradient-to-r ${milestone.gradient} shadow-xl cursor-pointer relative z-10`}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-white opacity-30"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CompanyJourney;
