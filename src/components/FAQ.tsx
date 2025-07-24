
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp, HelpCircle, Clock, DollarSign, Target, Users, Shield } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      icon: HelpCircle,
      question: "How quickly can I see results from your AI marketing strategies?",
      answer: "Most clients see initial improvements within 30-60 days, with significant results typically visible within 90 days. Our AI-powered approach allows for faster optimization and quicker wins compared to traditional marketing methods.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: DollarSign,
      question: "What's included in your marketing packages?",
      answer: "Our packages include AI-powered social media management, SEO optimization, PPC advertising, content creation, analytics reporting, and dedicated account management. We customize each package based on your specific business needs and goals.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Target,
      question: "Do you guarantee specific results or ROI?",
      answer: "Yes! We're so confident in our AI-driven approach that we offer a 90-day results guarantee. If you don't see measurable improvements in your key metrics within 90 days, we'll work for free until you do.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      question: "What types of businesses do you work with?",
      answer: "We work with businesses of all sizes across various industries including e-commerce, SaaS, healthcare, finance, real estate, and professional services. Our AI technology adapts to different business models and market dynamics.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: Clock,
      question: "How much time do I need to invest in the process?",
      answer: "Minimal! Our AI-powered systems handle most of the heavy lifting. You'll need about 2-3 hours per week for strategy calls, content approval, and reviewing reports. We handle all the execution and optimization.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      question: "How do you protect my business data and information?",
      answer: "We use enterprise-grade security measures including encrypted data storage, secure API connections, and strict access controls. All team members sign NDAs, and we're fully compliant with GDPR and other privacy regulations.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <CardHeader 
              className="cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${faq.gradient} flex items-center justify-center`}>
                    <faq.icon size={20} className="text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </CardTitle>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-gray-500" />
                </motion.div>
              </div>
            </CardHeader>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <CardContent className="pt-0 pb-6">
                    <p className="text-gray-600 leading-relaxed pl-13">
                      {faq.answer}
                    </p>
                  </CardContent>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;
