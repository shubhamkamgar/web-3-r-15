
import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, TrendingUp, Users, Target, CheckCircle, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import EnhancedFooter from '@/components/EnhancedFooter';
import VideoModal from '@/components/VideoModal';
import { featuredStories } from '@/data/featuredStories';
import AnimatedCounter from '@/components/AnimatedCounter';

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const story = featuredStories.find(s => s.id === id);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  if (!story) {
    return <Navigate to="/featured-success-stories" replace />;
  }

  const handleVideoClick = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
  };

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
            <Link to="/featured-success-stories">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Success Stories
              </Button>
            </Link>
            
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={story.companyLogo} 
                alt={story.companyName}
                className="w-16 h-16 rounded-lg object-cover bg-white/20 p-2"
              />
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">{story.companyName}</h1>
                <Badge className="bg-blue-600 text-white">
                  {story.industry}
                </Badge>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-8">{story.challenge}</p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter value={story.improvementPercentage} />%
                </div>
                <div className="text-sm text-gray-300">Improvement</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{story.timeframe}</div>
                <div className="text-sm text-gray-300">Timeline</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{story.resultType}</div>
                <div className="text-sm text-gray-300">Focus Area</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Challenge */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                  <p className="text-gray-600 leading-relaxed">{story.challenge}</p>
                </CardContent>
              </Card>

              {/* Solution */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{story.solution}</p>
                </CardContent>
              </Card>

              {/* Results */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Results Achieved</h2>
                  <div className="space-y-3">
                    {story.results.map((result, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h2>
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "{story.testimonial}"
                  </blockquote>
                  <p className="text-gray-600 font-medium">— {story.clientName}</p>
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
                      Watch {story.clientName} share their success story with our AI-powered marketing solutions
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

              {/* Before/After */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Before vs After</h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-red-600 text-sm font-medium mb-1">BEFORE</p>
                      <p className="text-gray-900 font-bold">{story.beforeMetric}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-600 text-sm font-medium mb-1">AFTER</p>
                      <p className="text-gray-900 font-bold">{story.afterMetric}</p>
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

      <EnhancedFooter />
      
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseModal}
        videoId={story.videoId}
      />
    </>
  );
};

export default CaseStudyDetail;
