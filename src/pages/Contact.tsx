import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import FAQ from '@/components/FAQ';
import { ArrowRight, CheckCircle, Sparkles, Zap, Shield, Clock, Trophy, Star, MessageSquare, Phone, Mail, MapPin, HeartHandshake, Rocket, TrendingUp, Users, Target, Gift, Headphones, Globe, Award } from 'lucide-react';
const Contact = () => {
  const reasons = [{
    icon: CheckCircle,
    title: "Free Consultation",
    description: "Get expert advice on your marketing strategy at no cost",
    gradient: "from-green-500 to-teal-500"
  }, {
    icon: Sparkles,
    title: "Custom Strategy",
    description: "Receive a tailored marketing plan for your business",
    gradient: "from-purple-500 to-blue-500"
  }, {
    icon: Clock,
    title: "Quick Response",
    description: "We respond to all inquiries within 24 hours",
    gradient: "from-orange-500 to-red-500"
  }, {
    icon: Shield,
    title: "No Obligation",
    description: "No pressure, just valuable insights and recommendations",
    gradient: "from-blue-500 to-cyan-500"
  }];
  const stats = [{
    number: "500+",
    label: "Happy Clients",
    icon: Users
  }, {
    number: "25X",
    label: "Avg ROI",
    icon: TrendingUp
  }, {
    number: "24/7",
    label: "Support",
    icon: Headphones
  }, {
    number: "98%",
    label: "Satisfaction",
    icon: Star
  }];
  const contactMethods = [{
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our team instantly",
    action: "Start Chat",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0
  }, {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    action: "Call Now",
    gradient: "from-green-500 to-teal-500",
    delay: 0.1
  }, {
    icon: Mail,
    title: "Email Support",
    description: "Send us your questions anytime",
    action: "Send Email",
    gradient: "from-purple-500 to-pink-500",
    delay: 0.2
  }];
  const companyValues = [{
    icon: Target,
    title: "Results-Driven",
    description: "We focus on measurable outcomes that matter to your business",
    gradient: "from-red-500 to-orange-500"
  }, {
    icon: HeartHandshake,
    title: "Client-First",
    description: "Your success is our priority. We're here to help you win",
    gradient: "from-pink-500 to-purple-500"
  }, {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients worldwide with local expertise",
    gradient: "from-blue-500 to-indigo-500"
  }, {
    icon: Award,
    title: "Industry Leaders",
    description: "Award-winning team with proven track record",
    gradient: "from-yellow-500 to-amber-500"
  }];
  return <>
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white page-with-navbar section-padding overflow-hidden relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1]
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl" />
          <motion.div animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.1, 0.2, 0.1]
        }} transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl" />
          
          {/* Floating Elements */}
          <motion.div animate={{
          y: [0, -30, 0],
          x: [0, 20, 0]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute top-1/2 right-1/3 w-6 h-6 bg-white rounded-full opacity-20" />
          <motion.div animate={{
          y: [0, 40, 0],
          x: [0, -15, 0]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-purple-400 rounded-full opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
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
            y: [0, -10, 0],
            scale: [1, 1.05, 1]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
              <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-6 text-lg px-6 py-3 rounded-full border-0 shadow-lg">
                <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                Let's Connect & Grow Together
              </Badge>
            </motion.div>
            
            <motion.h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              Ready to <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </motion.h1>
            
            <motion.p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }}>
              Let's discuss how our AI-powered marketing solutions can help you achieve 
              extraordinary growth. Get your free consultation today and discover the potential of your business.
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
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
              }} className="group">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-purple-500/25">
                    <Rocket className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                    Book Strategy Call 
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <motion.div whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} className="group">
                <Button variant="outline" onClick={() => document.getElementById('contact-form')?.scrollIntoView({
                behavior: 'smooth'
              })} className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-400/25">
                  <MessageSquare className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                  Send Message
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.8
          }}>
              {stats.map((stat, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.8 + index * 0.1
            }} whileHover={{
              scale: 1.05,
              y: -5
            }} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group-hover:border-purple-400/50">
                    <motion.div whileHover={{
                  scale: 1.2,
                  rotate: 360
                }} transition={{
                  duration: 0.3
                }}>
                      <stat.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                    </motion.div>
                    <motion.div className="text-2xl font-bold text-white" whileHover={{
                  scale: 1.1
                }}>
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                </motion.div>)}
            </motion.div>
          </motion.div>
        </div>
      </section>








    
      {/* Enhanced Company Values Section */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">AIAdMaxify</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another marketing agency. We're your strategic partner for growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {companyValues.map((value, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} whileHover={{
            y: -5,
            scale: 1.02
          }} className="group">
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <motion.div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.5
                }}>
                      <value.icon size={24} className="text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section id="contact-form" className="bg-gradient-to-br from-purple-50 to-blue-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />

            {/* Enhanced Why Contact Us */}
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8">
              <div>
                <motion.h3 className="text-3xl font-bold text-gray-900 mb-6" whileHover={{
                scale: 1.02
              }}>
                  Why <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Contact Us</span>?
                </motion.h3>
                <p className="text-lg text-gray-600 mb-8">
                  When you reach out to AIAdMaxify, you're not just getting another marketing agency. 
                  You're getting a strategic partner committed to your success.
                </p>
              </div>

              <div className="space-y-6">
                {reasons.map((reason, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} whileHover={{
                x: 10,
                scale: 1.02
              }} className="flex items-start space-x-4 group cursor-pointer">
                    <motion.div className={`w-12 h-12 rounded-full bg-gradient-to-r ${reason.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`} whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.5
                }}>
                      <reason.icon size={20} className="text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-purple-600 transition-colors">
                        {reason.title}
                      </h4>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </motion.div>)}
              </div>

              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.6
            }} whileHover={{
              scale: 1.02,
              y: -2
            }} className="group">
                <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <motion.div whileHover={{
                      rotate: 360
                    }} transition={{
                      duration: 0.5
                    }}>
                        <Zap className="w-8 h-8 mr-3 text-yellow-300" />
                      </motion.div>
                      <h4 className="font-bold text-2xl">🚀 Special Offer</h4>
                    </div>
                    <p className="mb-6 text-lg">
                      Book a strategy call this week and receive a free competitor analysis 
                      worth $500 plus a custom marketing roadmap!
                    </p>
                    <Link to="/strategy-call-calendly">
                      <motion.div whileHover={{
                      scale: 1.05
                    }} whileTap={{
                      scale: 0.95
                    }}>
                        <Button variant="outline" className="border-white font-semibold group-hover:shadow-lg transition-all duration-300 bg-secondary-DEFAULT text-slate-950">
                          <Gift className="mr-2 w-5 h-5" />
                          Claim Free Analysis
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>






      {/* Enhanced Contact Methods Section */}
      <section className="bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <motion.div whileHover={{
            scale: 1.05
          }} className="inline-block">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Multiple Ways to <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Connect</span>
              </h2>
            </motion.div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the method that works best for you. Our team is ready to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: method.delay
          }} whileHover={{
            y: -10,
            scale: 1.02
          }} className="group">
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/80 backdrop-blur-sm">
                  <motion.div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} whileHover={{
                scale: 1.05
              }} />
                  <CardContent className="p-8 relative z-10">
                    <motion.div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${method.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.5
                }}>
                      <method.icon size={32} className="text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-6">{method.description}</p>
                    <motion.div whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }}>
                      <Button className={`bg-gradient-to-r ${method.gradient} hover:opacity-90 text-white w-full group-hover:shadow-lg transition-all duration-300`}>
                        {method.action}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>

          <ContactInfo />
        </div>
      </section>


















    
      {/* Enhanced FAQ Section */}
      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <motion.h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6" whileHover={{
            scale: 1.02
          }}>
              Frequently Asked <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Questions</span>
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our AI-powered marketing services.
            </p>
          </motion.div>

          <FAQ />
        </div>
      </section>

      <Footer />
    </>;
};
export default Contact;
