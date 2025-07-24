import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Target, Users, TrendingUp, Star, CheckCircle, Phone, Mail, MapPin, Award, Shield, Zap, Heart, Clock, Globe, DollarSign, Sparkles, Rocket, BarChart3 } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';
const Index = () => {
  const featuredTestimonials = testimonials.slice(0, 3);




  // Team members data
  // Team members data
  // Team members data
  // Team members data
  
  // Team members data
  const teamMembers = [{
    name: "Alex Johnson",
    role: "CEO & AI Strategist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  }, {
    name: "Sarah Chen",
    role: "Head of AI Development",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332e1ca?w=300&h=300&fit=crop&crop=face"
  }, {
    name: "Michael Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  }, {
    name: "Emily Davis",
    role: "Client Success Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  }];



  // Client work showcase images
  // Client work showcase images
  // Client work showcase images
    // Client work showcase images
  // Client work showcase images
  const clientWork = [{
    title: "E-commerce Growth Campaign",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
  }, {
    title: "SaaS Lead Generation",
    industry: "Technology",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  }, {
    title: "Healthcare Marketing Strategy",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
  }, {
    title: "Financial Services Campaign",
    industry: "Finance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  }, {
    title: "Real Estate Marketing",
    industry: "Real Estate",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
  }];




  // hero section text
  // hero section text
    // hero section text
    // hero section text
  // Trust indicators with enhanced animations
  const trustIndicators = [{
    icon: Shield,
    text: "Enterprise-Grade Security",
    color: "text-green-500"
  }, {
    icon: Award,
    text: "Industry Recognition",
    color: "text-yellow-500"
  }, {
    icon: Clock,
    text: "24/7 Support",
    color: "text-blue-500"
  }, {
    icon: Globe,
    text: "Global Reach",
    color: "text-purple-500"
  }];

  // Enhanced floating elements
  const floatingElements = [{
    icon: Sparkles,
    delay: 0,
    x: "10%",
    y: "20%"
  }, {
    icon: Rocket,
    delay: 2,
    x: "80%",
    y: "15%"
  }, {
    icon: BarChart3,
    delay: 4,
    x: "15%",
    y: "70%"
  }, {
    icon: Target,
    delay: 6,
    x: "85%",
    y: "75%"
  }];
  return <>
      <Navbar />









   {/* =====================================Enhanced Hero Section ========================================= */}
   {/* =====================================Enhanced Hero Section - Number khali ahe "Enhanced Hero Section - serch kar" ========================================= */}





    
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white pt-16 sm:pt-20 md:pt-24 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <motion.div animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-blue-400/30" />
          <motion.div animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
          rotate: [0, -90, 0]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }} className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm border border-green-400/30" />
          <motion.div animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }} className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full backdrop-blur-sm border border-pink-400/30" />

          {/* Floating icons */}
          {floatingElements.map((element, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0
        }} animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.8, 1.2, 0.8],
          y: [0, -30, 0]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          delay: element.delay,
          ease: "easeInOut"
        }} className="absolute" style={{
          left: element.x,
          top: element.y
        }}>
              <element.icon className="w-8 h-8 text-blue-300/40" />
            </motion.div>)}

          {/* Animated gradient orbs */}
          <motion.div animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              <motion.div animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 1, 0]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-4 sm:mb-6 text-sm sm:text-base md:text-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-blue-400/30">
                  <motion.div animate={{
                  rotate: [0, 360]
                }} transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}>
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  </motion.div>
                  AI-Powered Marketing Solutions
                </Badge>
              </motion.div>

              <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-tight md:leading-tight" initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1,
              delay: 0.2
            }}>
                Transform Your Business with{" "}
                <motion.span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }} transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }} style={{
                backgroundSize: "200% 200%"
              }}>
                  AI Marketing
                </motion.span>
              </motion.h1>

              <motion.p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1,
              delay: 0.4
            }}>Leverage cutting-edge artificial intelligence to skyrocket your marketing performance, generate more leads, and increase revenue by up to 100% in just 90 days.</motion.p>
              
              {/* Enhanced trust indicators with staggered animations */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.6
            }} className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-8 px-2">
                {trustIndicators.map((indicator, index) => <motion.div key={index} initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 100
              }} whileHover={{
                scale: 1.1,
                y: -5,
                transition: {
                  duration: 0.2
                }
              }} className="flex items-center text-blue-200 text-xs sm:text-sm bg-white/10 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                    <motion.div whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.5
                }}>
                      <indicator.icon className={`w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 ${indicator.color} group-hover:scale-110 transition-transform`} />
                    </motion.div>
                    {indicator.text}
                  </motion.div>)}
              </motion.div>





   {/* ========================  =============Enhanced Hero Section - end ========================================= */}
   {/* ========================  =============Enhanced Hero Section - end ========================================= */}
   {/* ========================  =============Enhanced Hero Section - end ========================================= */}
   {/* ========================  =============Enhanced Hero Section - end ========================================= */}






       {/* ========================== Enhanced CTA buttons ========================== */}

              
              {/* Enhanced CTA buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-3 sm:px-0" initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1,
              delay: 0.8
            }}>
                <Link to="/strategy-call-calendly">
                  <motion.div whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }} whileTap={{
                  scale: 0.95
                }} className="group">
                    <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:to-purple-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden w-full sm:w-auto btn-touch">
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" initial={{
                      x: "-100%"
                    }} whileHover={{
                      x: "100%"
                    }} transition={{
                      duration: 0.6
                    }} />
                      <span className="relative z-10 flex items-center">
                        Get Free Strategy Call 
                        <motion.div animate={{
                        x: [0, 5, 0]
                      }} transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }} className="ml-2">
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/featured-success-stories">
                  <motion.div whileHover={{
                  scale: 1.05,
                  borderColor: "rgb(96, 165, 250)"
                }} whileTap={{
                  scale: 0.95
                }}>
                    <Button variant="outline" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl backdrop-blur-sm bg-white/10 transition-all duration-300 group w-full sm:w-auto btn-touch">
                      <motion.div animate={{
                      scale: [1, 1.2, 1]
                    }} transition={{
                      duration: 2,
                      repeat: Infinity
                    }} className="mr-2">
                        <Play className="w-5 h-5" />
                      </motion.div>
                      View Success Stories
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>



       {/* ========================== Enhanced CTA buttons - end ========================== */}
       {/* ========================== Enhanced CTA buttons - end ========================== */}
       {/* ========================== Enhanced CTA buttons - end ========================== */}


{/*  ======================================================================================================================== */}


          
   {/* =====================================Enhanced Hero Section - Stats = Numbers ========================================= */}
      {/* Enhanced Stats Section */}
   {/* =====================================Enhanced Hero Section - Starts = Numbers ========================================= */}
          

          {/* Enhanced Stats Section */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1
        }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 px-3 sm:px-0">
            {[{
            number: "100%",
            label: "Average ROI Increase",
            icon: TrendingUp,
            color: "from-green-500 to-emerald-500"
          }, {
            number: "90",
            label: "Days to See Results",
            icon: Clock,
            color: "from-blue-500 to-cyan-500"
          }, {
            number: "2000+",
            label: "Businesses Transformed",
            icon: Users,
            color: "from-purple-500 to-pink-500"
          }].map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.8,
            y: 30
          }} animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1.2 + index * 0.2,
            type: "spring",
            stiffness: 100
          }} whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
          }} className="text-center bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0]
            }} transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }} />
                
                <motion.div whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.2
            }} transition={{
              duration: 0.5
            }} className="relative z-10">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2 sm:mb-3 group-hover:text-white transition-colors" />
                </motion.div>
                
                <motion.div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-1 sm:mb-2 relative z-10" animate={{
              textShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.5)", "0 0 0px rgba(59, 130, 246, 0)"]
            }} transition={{
              duration: 3,
              repeat: Infinity
            }}>
                  {stat.number}
                </motion.div>
                <div className="text-sm sm:text-base text-gray-300 relative z-10 group-hover:text-white transition-colors leading-tight">{stat.label}</div>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

   {/* =====================================Enhanced Hero Section - Starts = Numbers - end ========================================= */}






     {/* ================================== Enhanced Company Video Section =========================================== */}
     {/* ================================== Enhanced Company Video Section =========================================== */}
     {/* ================================== Enhanced Company Video Section =========================================== */}

      
      {/* Enhanced Company Video Section */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating elements for the video section */}
        <div className="absolute inset-0">
          <motion.div animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }} transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute top-10 right-10 w-16 h-16 bg-blue-200/30 rounded-full" />
          <motion.div animate={{
          x: [0, 30, 0],
          scale: [1, 1.1, 1]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }} className="absolute bottom-10 left-10 w-12 h-12 bg-purple-200/30 rounded-lg" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <motion.div whileHover={{
            scale: 1.05,
            rotate: 1
          }} transition={{
            duration: 0.3
          }}>
              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 mb-6 text-lg px-6 py-3 rounded-full border border-blue-200">
                <motion.div animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360, 720]
              }} transition={{
                duration: 4,
                repeat: Infinity
              }} className="mr-2">
                  <Play className="w-4 h-4" />
                </motion.div>
                About Our Company
              </Badge>
            </motion.div>

            <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              Why Choose AI AdMaxify?
            </motion.h2>

            <motion.p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} viewport={{
            once: true
          }}>
              Watch our founder explain how we're revolutionizing digital marketing with AI technology 
              and why over 500+ businesses trust us with their growth.
            </motion.p>
            
            <motion.div whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
          }} className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1,
            delay: 0.6
          }} viewport={{
            once: true
          }}>
              {/* Animated border */}
              <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75" animate={{
              background: ["linear-gradient(0deg, #3b82f6, #8b5cf6, #ec4899)", "linear-gradient(120deg, #3b82f6, #8b5cf6, #ec4899)", "linear-gradient(240deg, #3b82f6, #8b5cf6, #ec4899)", "linear-gradient(360deg, #3b82f6, #8b5cf6, #ec4899)"]
            }} transition={{
              duration: 4,
              repeat: Infinity
            }} style={{
              padding: "2px",
              borderRadius: "16px"
            }}>
                <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 w-full h-full rounded-2xl" />
              </motion.div>

              <div className="aspect-video bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 flex items-center justify-center relative z-10 rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="text-center px-4">
                  <motion.div whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(255,255,255,0.3)"
                }} whileTap={{
                  scale: 0.9
                }} animate={{
                  boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
                }} transition={{
                  duration: 3,
                  repeat: Infinity
                }} className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto cursor-pointer border border-white/30 btn-touch">
                    <motion.div animate={{
                    x: [0, 2, 0]
                  }} transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}>
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 leading-tight" animate={{
                  textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0)"]
                }} transition={{
                  duration: 4,
                  repeat: Infinity
                }}>
                    Company Introduction Video
                  </motion.h3>
                  <p className="text-blue-200 text-sm sm:text-base">Click to watch our story and approach</p>
                  <p className="text-xs sm:text-sm text-blue-300 mt-2">Video URL: https://youtu.be/dQw4w9WgXcQ?si=xfEMB1VkbWx6SXrA </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>




     {/* ================================== Enhanced Company Video Section - end =========================================== */}
     {/* ================================== Enhanced Company Video Section - end  =========================================== */}
     {/* ================================== Enhanced Company Video Section - end  =========================================== */}
     {/* ================================== Enhanced Company Video Section - end  =========================================== */}







     {/*====================================== The Experts Behind Your Success - start ===================================  */}
     {/*====================================== Team Member Varti ahe data - Alex Johnson - Sarah Chen - Michael Rodriguez ===================================  */}
     {/*====================================== Team Member Varti ahe data ===================================  */}
      
      {/* Enhanced Team Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          <motion.div animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.08, 0.03]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }} className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <motion.div whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.3
            }}>
                <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 mb-6 text-lg px-6 py-3 rounded-full border border-purple-200">
                  <motion.div animate={{
                  y: [0, -3, 0]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }} className="mr-2">
                    <Users className="w-4 h-4" />
                  </motion.div>
                  Meet Our Team
                </Badge>
              </motion.div>

              <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} viewport={{
              once: true
            }}>
                The Experts Behind Your Success
              </motion.h2>
              <motion.p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }} viewport={{
              once: true
            }}>
                Our dedicated team of AI specialists, marketers, and strategists work together to deliver 
                exceptional results for every client.
              </motion.p>
            </motion.div>
          </div>



         {/* =========================================== Team working photo ==============================================================*/}
          {/* =========================================== Team working photo ==============================================================*/}
          {/* =========================================== Team working photo ==============================================================*/}
          
          {/* Team working photo */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="mb-16">
            <motion.div whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
          }} className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop" alt="AI AdMaxify team working together" className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />


{/* =========================================== Team working photo ==============================================================*/}
{/* =========================================== Team working photo ==============================================================*/}
{/* =========================================== Team working photo ==============================================================*/}
              
              {/* Animated overlay */}
              <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" whileHover={{
              background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent, transparent)"
            }} transition={{
              duration: 0.5
            }} />
              
              <motion.div className="absolute bottom-6 left-6 right-6 text-white" initial={{
              y: 20,
              opacity: 0.8
            }} whileHover={{
              y: 0,
              opacity: 1
            }} transition={{
              duration: 0.3
            }}>
                <motion.h3 className="text-2xl font-bold mb-2" animate={{
                textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
              }} transition={{
                duration: 4,
                repeat: Infinity
              }}>
                  Our Team in Action
                </motion.h3>
                <p className="text-gray-200">Collaborating to create innovative AI marketing solutions for our clients</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced team members grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
            {teamMembers.map((member, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }} viewport={{
            once: true
          }} whileHover={{
            y: -15,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
          }} className="group">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-gray-50 group-hover:from-blue-50 group-hover:to-purple-50">
                  <CardContent className="p-6 text-center relative">
                    {/* Animated background gradient */}
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, 0]
                }} transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} />
                    
                    <div className="relative mb-4">
                      <motion.div whileHover={{
                    scale: 1.1,
                    rotate: 5
                  }} transition={{
                    duration: 0.3
                  }} className="relative">
                        <img src={member.image} alt={member.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover transition-all duration-500 group-hover:shadow-xl" />
                        
                        {/* Animated ring around image */}
                        <motion.div className="absolute inset-0 rounded-full border-2 border-transparent" whileHover={{
                      borderColor: "rgb(59, 130, 246)",
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                    }} animate={{
                      rotate: [0, 360]
                    }} transition={{
                      rotate: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      borderColor: {
                        duration: 0.3
                      }
                    }} />
                      </motion.div>
                      
                      {/* Floating sparkles */}
                      <motion.div className="absolute -top-2 -right-2 text-yellow-400" animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0]
                  }} transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}>
                        <Sparkles className="w-4 h-4" />
                      </motion.div>
                    </div>
                    
                    <motion.h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors relative z-10 leading-tight" whileHover={{
                  scale: 1.05
                }}>
                      {member.name}
                    </motion.h3>
                    <motion.p className="text-sm sm:text-base text-blue-600 font-medium relative z-10 leading-tight" animate={{
                  color: ["rgb(37, 99, 235)", "rgb(147, 51, 234)", "rgb(37, 99, 235)"]
                }} transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}>
                      {member.role}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>



     {/*====================================== The Experts Behind Your Success - end ===================================  */}
     {/*====================================== The Experts Behind Your Success - end ===================================  */}
     {/*====================================== The Experts Behind Your Success - end ===================================  */}
     {/*====================================== The Experts Behind Your Success - end ===================================  */}





    

     {/*====================================== Transforming Businesses Across Industries - Start ===================================  */}
     {/*====================================== Transforming Businesses Across Industries - Start ===================================  */}
     {/*====================================== Transforming Businesses Across Industries - Start ===================================  */}

    
      {/* Client Work Carousel */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <Badge className="bg-green-100 text-green-800 mb-6 text-lg px-6 py-3 rounded-full">
                <Target className="w-4 h-4 mr-2" />
                Our Client Success Stories
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Transforming Businesses Across Industries
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                See how we've helped businesses from various industries achieve remarkable growth 
                through our AI-powered marketing solutions.
              </p>
            </motion.div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {clientWork.map((work, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div whileHover={{
                  scale: 1.05
                }} className="p-2">
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="relative">
                          <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <Badge className="bg-blue-600 text-white mb-2">
                              {work.industry}
                            </Badge>
                            <h3 className="font-bold text-lg">{work.title}</h3>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>
        </div>
      </section>

     {/*====================================== Transforming Businesses Across Industries - end ===================================  */}
    {/*====================================== Transforming Businesses Across Industries - end ===================================  */}
    {/*====================================== Transforming Businesses Across Industries - end ===================================  */}






      {/* ===================== Comprehensive AI Marketing Solutions - Start ============================ */}
  {/* ========================== Services Section - AI Lead Generation - Performance Optimization ============== */}

    
      {/* Services Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <Badge className="bg-blue-100 text-blue-800 mb-6 text-lg px-6 py-3 rounded-full">
                <Zap className="w-4 h-4 mr-2" />
                Our Services
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive AI Marketing Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From strategy to execution, we provide end-to-end AI-powered marketing services 
                that deliver measurable results for your business.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: <Target className="w-8 h-8 text-blue-600" />,
            title: "AI Lead Generation",
            description: "Advanced AI algorithms identify and target your ideal customers with precision, increasing lead quality by 400%.",
            gradient: "from-blue-500 to-blue-600"
          }, {
            icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
            title: "Performance Optimization",
            description: "Continuously optimize your campaigns using machine learning to maximize ROI and conversion rates.",
            gradient: "from-purple-500 to-purple-600"
          }, {
            icon: <Users className="w-8 h-8 text-green-600" />,
            title: "Customer Insights",
            description: "Deep AI analysis of customer behavior patterns to create personalized marketing strategies.",
            gradient: "from-green-500 to-green-600"
          }].map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} viewport={{
            once: true
          }} whileHover={{
            y: -5,
            scale: 1.02
          }} className="group">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-blue-200 overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <CardContent className="p-8 relative z-10">
                    <motion.div className="mb-6 transform group-hover:scale-110 transition-transform duration-300" whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.6
                }}>
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  View All Services <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== Comprehensive AI Marketing Solutions - end ============================ */}
  {/* ========================== Services Section - AI Lead Generation - Performance Optimization ============== */}





    





  {/* ============================== Real Results from Real Clients - Start ==================================== */}
  {/* ============================== Real Results from Real Clients - Start ==================================== */}
  {/* ============================== Real Results from Real Clients - Start - image at the end ==================================== */}



    

      {/* Results Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <Badge className="bg-purple-100 text-purple-800 mb-6 text-lg px-6 py-3 rounded-full">
                <Award className="w-4 h-4 mr-2" />
                Proven Results
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Real Results from Real Clients
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our AI-powered marketing solutions have transformed businesses across industries.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[{
            number: "10X",
            label: "Lead Generation Increase",
            icon: TrendingUp
          }, {
            number: "100%",
            label: "Average ROI Boost",
            icon: DollarSign
          }, {
            number: "90",
            label: "Days to Results",
            icon: Clock
          }, {
            number: "97%",
            label: "Client Satisfaction",
            icon: Heart
          }].map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05,
            y: -5
          }} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>)}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose AI AdMaxify?</h3>
              <div className="space-y-4">
                {["Advanced AI algorithms that learn and adapt", "Proven track record with 500+ successful campaigns", "Dedicated team of AI marketing specialists", "Real-time performance monitoring and optimization"].map((point, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </motion.div>)}
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.02
          }}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="AI Marketing Analytics" className="rounded-xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>


 {/* ============================== Real Results from Real Clients - end ==================================== */}
{/* ============================== Real Results from Real Clients - end ==================================== */}
{/* ============================== Real Results from Real Clients - end ==================================== */}
{/* ============================== Real Results from Real Clients - end ==================================== */}







   {/*====================================== What Our Clients Say - Start Sarah Johnson Marcus Thompson Elena Rodriguez ===================================  */}
      {/* ================================ What Our Clients Say - start ==================================== */}
      {/* ================================ What Our Clients Say - start ==================================== */}
      {/* ================================ What Our Clients Say - start ==================================== */}
          {/* ================================ What Our Clients Say - start ==================================== */}
    
      {/* Testimonials Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <Badge className="bg-green-100 text-green-800 mb-6 text-lg px-6 py-3 rounded-full">
                <Star className="w-4 h-4 mr-2" />
                Client Success Stories
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. See how we've helped businesses achieve 
                extraordinary results with our AI marketing solutions.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredTestimonials.map((testimonial, index) => <motion.div key={testimonial.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} viewport={{
            once: true
          }} whileHover={{
            y: -5
          }}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>)}
          </div>

          <div className="text-center">
            <Link to="/testimonials">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  View All Testimonials <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>


      {/* ================================ What Our Clients Say - end ==================================== */}
     {/* ================================ What Our Clients Say - end ==================================== */}
     {/* ================================ What Our Clients Say - end ==================================== */}
     {/* ================================ What Our Clients Say - end ==================================== */}





      {/* ===================================== Ready to Transform Your Marketing? =============================== */}
      {/* ===================================== Ready to Transform Your Marketing? =============================== */}
      {/* ===================================== Ready to Transform Your Marketing? =============================== */}
      {/* ===================================== Ready to Transform Your Marketing? =============================== */}
    
    

      {/* Enhanced CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0">
          <motion.div animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/30" />
          <motion.div animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 1.1, 1]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }} className="absolute bottom-10 right-10 w-20 h-20 bg-white/5 rounded-full backdrop-blur-sm border border-white/20" />
          <motion.div animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 90, 180]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }} className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm border border-white/30" />

          {/* Floating icons */}
          <motion.div animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
          opacity: [0.3, 0.6, 0.3]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute top-20 right-1/4">
            <Rocket className="w-8 h-8 text-white/40" />
          </motion.div>

          {/* Animated gradient background */}
          <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-pink-600/50" animate={{
          background: ["linear-gradient(45deg, rgba(37, 99, 235, 0.5), rgba(147, 51, 234, 0.5), rgba(219, 39, 119, 0.5))", "linear-gradient(135deg, rgba(37, 99, 235, 0.5), rgba(147, 51, 234, 0.5), rgba(219, 39, 119, 0.5))", "linear-gradient(225deg, rgba(37, 99, 235, 0.5), rgba(147, 51, 234, 0.5), rgba(219, 39, 119, 0.5))", "linear-gradient(315deg, rgba(37, 99, 235, 0.5), rgba(147, 51, 234, 0.5), rgba(219, 39, 119, 0.5))"]
        }} transition={{
          duration: 8,
          repeat: Infinity
        }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" animate={{
            textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
          }} transition={{
            duration: 4,
            repeat: Infinity
          }}>
              Ready to Transform Your Marketing?
            </motion.h2>
            
            <motion.p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              Join hundreds of businesses that have already revolutionized their marketing 
              with our AI-powered solutions. Book your free strategy call today.
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} viewport={{
            once: true
          }}>
              <Link to="/strategy-call-calendly">
                <motion.div whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255,255,255,0.2)"
              }} whileTap={{
                scale: 0.95
              }} className="group">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-transparent" initial={{
                    x: "-100%"
                  }} whileHover={{
                    x: "100%"
                  }} transition={{
                    duration: 0.6
                  }} />
                    <span className="relative z-10 flex items-center">
                      Get Free Strategy Call 
                      <motion.div animate={{
                      x: [0, 5, 0]
                    }} transition={{
                      duration: 1.5,
                      repeat: Infinity
                    }} className="ml-2">
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>
              </Link>
              
              <Link to="/contact">
                <motion.div whileHover={{
                scale: 1.05,
                borderColor: "rgba(255,255,255,0.8)"
              }} whileTap={{
                scale: 0.95
              }}>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-white/10 transition-all duration-300">
                    <motion.div animate={{
                    rotate: [0, 15, -15, 0]
                  }} transition={{
                    duration: 2,
                    repeat: Infinity
                  }} className="mr-2">
                      <Phone className="w-5 h-5" />
                    </motion.div>
                    Contact Us
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>;
};
export default Index;
