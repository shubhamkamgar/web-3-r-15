
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const handleSendMessage = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScoSEWtcX27G3guqiSdEqm3BTetMEcVbyyY6I1pe1I2Ddh2Gg/viewform?usp=header', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="slide-up"
    >
      <Card className="agency-card glow-border">
        <CardHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bounce-in"
          >
            <CardTitle className="text-2xl font-bold text-primary">Send Us a Message</CardTitle>
            <CardDescription className="text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours with a 
              custom strategy for your business.
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="text-center"
          >
            <Button 
              onClick={handleSendMessage}
              className="agency-btn w-full text-lg py-3 shimmer"
            >
              Send Message <Send className="ml-2" size={20} />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
