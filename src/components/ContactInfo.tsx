import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
const ContactInfo = () => {
  const contactInfo = [{
    icon: Mail,
    title: "Email Us",
    details: "hello@aiadmaxify.com",
    description: "Send us an email anytime",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  }, {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm EST",
    color: "text-green-600",
    bgColor: "bg-green-50"
  }, {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Innovation Drive, Tech City, TC 12345",
    description: "Our headquarters location",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }, {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Fri: 8am-6pm EST",
    description: "Saturday: 9am-2pm EST",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }];
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {contactInfo.map((info, index) => <motion.div key={index} initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: index * 0.1
    }} whileHover={{
      y: -5
    }}>
          
        </motion.div>)}
    </div>;
};
export default ContactInfo;