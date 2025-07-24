
import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Star, Building, MapPin, Calendar, TrendingUp, Play, Users, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoModal from '@/components/VideoModal';
import { testimonials } from '@/data/testimonials';

const TestimonialDetail = () => {
  const { id } = useParams<{ id: string }>();
  const testimonial = testimonials.find(t => t.id === id);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  if (!testimonial) {
    return <Navigate to="/testimonials" replace />;
  }

  const handleVideoClick = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const relatedTestimonials = testimonials
    .filter(t => t.id !== testimonial.id && t.industry === testimonial.industry)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/testimonials">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Testimonials
              </Button>
            </Link>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <img 
                src={testimonial.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"} 
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
              />
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">{testimonial.name}</h1>
                <p className="text-xl text-blue-200 mb-3">{testimonial.position}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-blue-100">
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-1" />
                    {testimonial.company}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Location
                  </div>
                  <Badge className="bg-blue-600 text-white">
                    {testimonial.industry}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {renderStars(testimonial.rating)}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">Excellent</div>
                <div className="text-sm text-gray-300">Improvement</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{testimonial.detailedResults?.timeframe || '6 months'}</div>
                <div className="text-sm text-gray-300">Timeframe</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">Success</div>
                <div className="text-sm text-gray-300">Result Type</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Testimonial Text */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h2>
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                    "{testimonial.testimonialText}"
                  </blockquote>
                </CardContent>
              </Card>

              {/* Challenge */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                  <div className="space-y-3">
                    {testimonial.fullCaseStudy?.challenge?.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    )) || (
                      <p className="text-gray-600 leading-relaxed">This client faced significant challenges in their marketing efforts and needed a comprehensive solution to drive growth and improve their business performance.</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Solution */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
                  <div className="space-y-3">
                    {testimonial.fullCaseStudy?.solution?.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    )) || (
                      <p className="text-gray-600 leading-relaxed">We implemented a customized AI-powered marketing strategy that addressed their specific needs and delivered exceptional results through innovative approaches and proven methodologies.</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Results Achieved</h2>
                  <div className="space-y-3">
                    {testimonial.fullCaseStudy?.results?.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    )) || (
                      <>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">Significant improvement in overall marketing performance</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">Increased customer engagement and satisfaction</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">Enhanced ROI and business growth</span>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Video Testimonial */}
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Video Testimonial</h3>
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white text-sm mb-4">
                      Watch {testimonial.name} share their experience with our AI-powered marketing solutions
                    </p>
                  </div>
                  <Button 
                    onClick={handleVideoClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video Testimonial
                  </Button>
                </CardContent>
              </Card>

              {/* Company Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Company Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Building className="w-5 h-5 mr-3 text-blue-600" />
                      <span className="font-medium">{testimonial.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                      <span>Location</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Target className="w-5 h-5 mr-3 text-blue-600" />
                      <span>{testimonial.industry}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-3 text-blue-600" />
                      <span>Medium Business</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">Ready for Similar Results?</h3>
                  <p className="text-blue-100 mb-4">Let's discuss how we can help your business grow.</p>
                  <Link to="/strategy-call-calendly">
                    <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                      Book Strategy Call
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Testimonials */}
      {relatedTestimonials.length > 0 && (
        <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              More Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedTestimonials.map((relatedTestimonial, index) => (
                <motion.div
                  key={relatedTestimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <img 
                          src={relatedTestimonial.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"} 
                          alt={relatedTestimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-bold text-gray-900">{relatedTestimonial.name}</h3>
                          <p className="text-sm text-gray-600">{relatedTestimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center mb-3">
                        {renderStars(relatedTestimonial.rating)}
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        "{relatedTestimonial.testimonialText}"
                      </p>
                      <Link to={`/testimonials/${relatedTestimonial.id}`}>
                        <Button variant="outline" className="w-full">
                          Read Full Story
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseModal}
        videoId="dQw4w9WgXcQ"
      />
    </>
  );
};

export default TestimonialDetail;
