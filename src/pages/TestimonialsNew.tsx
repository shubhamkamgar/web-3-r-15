import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Filter, Play, Star, ArrowRight, TrendingUp, Calendar, MapPin, Building, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoModal from '@/components/VideoModal';
import { testimonials, industries } from '@/data/testimonials';

const TestimonialsNew = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const filteredTestimonials = testimonials
    .filter(testimonial => {
      const name = testimonial.name || '';
      const company = testimonial.company || '';
      const testimonialText = testimonial.testimonialText || '';
      
      const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           testimonialText.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesIndustry = selectedIndustry === 'All Industries' || selectedIndustry === 'all' || testimonial.industry === selectedIndustry;
      
      const rating = typeof testimonial.rating === 'number' ? testimonial.rating : 5;
      const selectedRatingNum = selectedRating === 'all' ? 0 : parseInt(selectedRating);
      const matchesRating = selectedRating === 'all' || rating >= selectedRatingNum;
      
      return matchesSearch && matchesIndustry && matchesRating;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
      if (sortBy === 'oldest') return new Date(a.createdAt || '').getTime() - new Date(b.createdAt || '').getTime();
      if (sortBy === 'highest-rating') {
        const aRating = typeof a.rating === 'number' ? a.rating : 5;
        const bRating = typeof b.rating === 'number' ? b.rating : 5;
        return bRating - aRating;
      }
      if (sortBy === 'lowest-rating') {
        const aRating = typeof a.rating === 'number' ? a.rating : 5;
        const bRating = typeof b.rating === 'number' ? b.rating : 5;
        return aRating - bRating;
      }
      return 0;
    });

  const handleVideoClick = (videoId: string) => {
    setSelectedVideoId(videoId);
    setIsVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideoId(null);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-blue-600 text-white mb-6 text-lg px-6 py-3 rounded-full">
              Client Success Stories
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Real Results from Real <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how our AI-powered marketing solutions have transformed businesses across industries. 
              See measurable results, hear authentic feedback, and get inspired by success stories.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/strategy-call-calendly">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 rounded-xl">
                  Get Your Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/featured-success-stories">
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-4 rounded-xl">
                  View Featured Stories
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="All Industries" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  <ScrollArea className="h-60">
                    {industries.map(industry => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectContent>
              </Select>
              
              <Select value={selectedRating} onValueChange={setSelectedRating}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="All Ratings" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="3">3+ Stars</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="highest-rating">Highest Rating</SelectItem>
                  <SelectItem value="lowest-rating">Lowest Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <Filter className="w-4 h-4" />
            <span>Showing {filteredTestimonials.length} of {testimonials.length} testimonials</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${searchTerm}-${selectedIndustry}-${selectedRating}-${sortBy}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="h-full bg-white shadow-lg border-0 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-0 h-full flex flex-col">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <img 
                              src={testimonial.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"} 
                              alt={testimonial.name || 'Client'}
                              className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                            />
                            <div>
                              <h3 className="font-bold text-lg">{testimonial.name || 'Anonymous'}</h3>
                              <p className="text-blue-100 text-sm">{testimonial.position || 'Client'}</p>
                            </div>
                          </div>
                          <div className="flex">{renderStars(typeof testimonial.rating === 'number' ? testimonial.rating : 5)}</div>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-blue-100">
                          <div className="flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            {testimonial.company || 'Company'}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            Location
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-4">
                          <Badge variant="secondary" className="mb-3">
                            {testimonial.industry || 'General'}
                          </Badge>
                          <p className="text-gray-700 leading-relaxed line-clamp-4">
                            "{testimonial.testimonialText || 'Great experience working with this team.'}"
                          </p>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-green-50 p-3 rounded-lg text-center">
                            <TrendingUp className="w-5 h-5 text-green-600 mx-auto mb-1" />
                            <div className="text-2xl font-bold text-green-600">Excellent</div>
                            <div className="text-xs text-gray-600">Improvement</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg text-center">
                            <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                            <div className="text-2xl font-bold text-blue-600">{testimonial.detailedResults?.timeframe || '6 months'}</div>
                            <div className="text-xs text-gray-600">Timeframe</div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3 mt-auto">
                          <Button
                            variant="outline"
                            className="w-full group-hover:border-blue-500 group-hover:text-blue-600 transition-colors"
                            onClick={() => handleVideoClick("dQw4w9WgXcQ")}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Watch Video
                          </Button>
                          <Link to={`/testimonials/${testimonial.id}`}>
                            <Button
                              variant="outline"
                              className="w-full group-hover:border-purple-500 group-hover:text-purple-600 transition-colors"
                            >
                              Read Full Story
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredTestimonials.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-gray-500 text-lg mb-4">No testimonials found matching your criteria</div>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedIndustry('all');
                  setSelectedRating('all');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Join These Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't just read about success—experience it yourself. Book your free strategy call today 
              and discover how our AI-powered marketing solutions can transform your business.
            </p>
            <Link to="/strategy-call-calendly">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-xl font-semibold">
                Get Your Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseModal}
        videoId={selectedVideoId}
      />
    </>
  );
};

export default TestimonialsNew;
