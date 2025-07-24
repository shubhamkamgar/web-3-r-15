
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star, Award, Target, Zap, Users, TrendingUp, Shield, Crown, Medal, CheckCircle, Sparkles } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "Best AI Marketing Platform 2024",
      organization: "Digital Marketing Excellence Awards",
      year: "2024",
      description: "Recognized for innovation in AI-powered marketing automation and exceptional client results.",
      icon: Trophy,
      gradient: "from-yellow-400 via-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      status: "Latest Award"
    },
    {
      title: "Top Growth Agency of the Year",
      organization: "Marketing Growth Institute",
      year: "2023",
      description: "Awarded for helping 200+ businesses achieve unprecedented growth through AI marketing.",
      icon: TrendingUp,
      gradient: "from-green-400 via-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      status: "Excellence"
    },
    {
      title: "Innovation Excellence Award",
      organization: "Tech Innovation Summit",
      year: "2023",
      description: "Honored for developing proprietary AI algorithms that deliver 17X average ROI.",
      icon: Zap,
      gradient: "from-purple-500 via-blue-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50",
      status: "Innovation"
    },
    {
      title: "Client Satisfaction Champion",
      organization: "Customer Success Awards",
      year: "2023",
      description: "Achieved 97% client satisfaction rating and 95% client retention rate.",
      icon: Users,
      gradient: "from-pink-500 via-rose-500 to-red-500",
      bgGradient: "from-pink-50 to-red-50",
      status: "Premium"
    },
    {
      title: "Best ROI Performance",
      organization: "Marketing ROI Awards",
      year: "2022",
      description: "Consistently delivering 300%+ improvement in marketing performance across all clients.",
      icon: Target,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-50 to-teal-50",
      status: "Performance"
    },
    {
      title: "Data Security Excellence",
      organization: "Cybersecurity Institute",
      year: "2022",
      description: "Certified for enterprise-grade security measures and GDPR compliance.",
      icon: Shield,
      gradient: "from-indigo-500 via-purple-500 to-violet-600",
      bgGradient: "from-indigo-50 to-violet-50",
      status: "Security"
    }
  ];

  const recognitions = [
    {
      metric: "450+",
      label: "Happy Clients",
      icon: Users,
      gradient: "from-green-500 to-emerald-600",
      description: "Businesses transformed"
    },
    {
      metric: "97%",
      label: "Client Satisfaction",
      icon: Star,
      gradient: "from-yellow-500 to-orange-500",
      description: "Average rating"
    },
    {
      metric: "17X",
      label: "Average ROI",
      icon: TrendingUp,
      gradient: "from-purple-500 to-indigo-600",
      description: "Return on investment"
    },
    {
      metric: "300%+",
      label: "Growth Rate",
      icon: Zap,
      gradient: "from-pink-500 to-rose-600",
      description: "Performance improvement"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="space-y-16">
      {/* Enhanced Key Metrics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {recognitions.map((recognition, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              y: -8, 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="group"
          >
            <Card className="relative text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              {/* Animated Background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${recognition.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Elements */}
              <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                <Sparkles className="w-4 h-4 text-purple-500" />
              </div>
              
              <CardContent className="p-8 relative z-10">
                <motion.div 
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${recognition.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                >
                  <recognition.icon size={36} className="text-white" />
                </motion.div>
                
                <motion.div 
                  className="text-4xl font-bold text-gray-900 mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {recognition.metric}
                </motion.div>
                
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {recognition.label}
                </div>
                
                <div className="text-sm text-gray-600">
                  {recognition.description}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced Awards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              y: -12, 
              scale: 1.03,
              rotateY: 5
            }}
            transition={{ duration: 0.4 }}
            className="group perspective-1000"
          >
            <Card className={`h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative bg-gradient-to-br ${award.bgGradient}`}>
              {/* Animated Background Pattern */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-5 group-hover:opacity-15`}
                animate={{ 
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-20">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${award.gradient} text-white shadow-lg`}
                >
                  {award.status}
                </motion.div>
              </div>

              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${award.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                  >
                    <award.icon size={36} className="text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${award.gradient} text-white mb-2`}
                    >
                      <Crown className="w-4 h-4 mr-1" />
                      {award.year}
                    </motion.div>
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {award.title}
                </CardTitle>
                
                <motion.p 
                  className="text-purple-600 font-semibold text-sm flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Medal className="w-4 h-4 mr-2" />
                  {award.organization}
                </motion.p>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-0">
                <motion.p 
                  className="text-gray-700 leading-relaxed mb-4"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {award.description}
                </motion.p>
                
                <motion.div 
                  className="flex items-center text-green-600 text-sm font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Verified Achievement
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievement Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center"
            >
              <Trophy className="w-8 h-8 text-white" />
            </motion.div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Industry Recognition & Trust
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            Our commitment to excellence and innovation has earned us recognition from leading 
            industry organizations and the trust of hundreds of satisfied clients worldwide.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Awards;
