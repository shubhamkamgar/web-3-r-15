
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Filter, ArrowRight, TrendingUp, Users, Star, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoModal from '@/components/VideoModal';
import FeaturedStoryCard from '@/components/FeaturedStoryCard';
import { featuredStories, industries } from '@/data/featuredStories';

const FeaturedSuccessStories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('improvement');

  const filteredStories = featuredStories
    .filter(story => {
      const matchesSearch = 
        story.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.challenge.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.solution.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesIndustry = selectedIndustry === 'All Industries' || story.industry === selectedIndustry;
      
      return matchesSearch && matchesIndustry;
    })
    .sort((a, b) => {
      if (sortBy === 'improvement') return b.improvementPercentage - a.improvementPercentage;
      if (sortBy === 'company') return a.companyName.localeCompare(b.companyName);
      if (sortBy === 'industry') return a.industry.localeCompare(b.industry);
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

  const totalClients = featuredStories.length;
  const averageImprovement = Math.round(
    featuredStories.reduce((sum, story) => sum + story.improvementPercentage, 0) / featuredStories.length
  );

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-purple-600 text-white mb-6 text-lg px-6 py-3 rounded-full">
              <Star className="w-5 h-5 mr-2" />
              Featured Success Stories
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Transformative Results, <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Real Impact</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Dive deep into our most impressive case studies. See exactly how we've helped businesses 
              achieve extraordinary growth through AI-powered marketing strategies.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-400">     2500+    </div>
{/*                                 <div className="text-3xl font-bold text-purple-400">{totalClients}+</div> */}
                <div className="text-sm text-gray-300">Success Stories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-400">       10X      </div>
{/*                                   <div className="text-3xl font-bold text-blue-400">{averageImprovement%</div> */}
                <div className="text-sm text-gray-300">Avg Improvement</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400">  15+     </div>
                <div className="text-sm text-gray-300">Industries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">97%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/strategy-call-calendly">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4 rounded-xl">
                  Get Your Success Story <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/testimonials">
                <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-4 rounded-xl">
                  View All Testimonials
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
                placeholder="Search success stories..."
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
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="improvement">Highest Improvement</SelectItem>
                  <SelectItem value="company">Company Name</SelectItem>
                  <SelectItem value="industry">Industry</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <Filter className="w-4 h-4" />
            <span>Showing {filteredStories.length} of {featuredStories.length} featured stories</span>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${searchTerm}-${selectedIndustry}-${sortBy}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredStories.map((story, index) => (
                <FeaturedStoryCard
                  key={story.id}
                  story={story}
                  index={index}
                  onVideoClick={handleVideoClick}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredStories.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-gray-500 text-lg mb-4">No success stories found matching your criteria</div>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedIndustry('All Industries');
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
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join the ranks of businesses that have transformed their growth through our AI-powered 
              marketing strategies. Your success story could be next.
            </p>
            <Link to="/strategy-call-calendly">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-xl font-semibold">
                Start Your Transformation <ArrowRight className="ml-2 w-5 h-5" />
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

export default FeaturedSuccessStories;
