
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, TrendingUp, Clock, Quote, Share2, ExternalLink } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { FeaturedStory } from '@/data/featuredStories';

interface FeaturedStoryCardProps {
  story: FeaturedStory;
  index: number;
  onVideoClick: (videoId: string) => void;
}

const FeaturedStoryCard = ({ story, index, onVideoClick }: FeaturedStoryCardProps) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${story.companyName} Success Story`,
        text: story.challenge,
        url: window.location.href
      });
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full bg-white shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Header with Company Info */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img 
                  src={story.companyLogo} 
                  alt={story.companyName}
                  className="w-12 h-12 rounded-lg object-cover bg-white/20 p-2"
                />
                <div>
                  <h3 className="font-bold text-lg">{story.companyName}</h3>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {story.industry}
                  </Badge>
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleShare}
                className="text-white hover:bg-white/20"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Before/After Metrics */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-red-200 text-sm font-medium mb-1">BEFORE</p>
                  <p className="text-white text-lg font-bold">{story.beforeMetric}</p>
                </div>
                <div>
                  <p className="text-green-200 text-sm font-medium mb-1">AFTER</p>
                  <p className="text-white text-lg font-bold">{story.afterMetric}</p>
                </div>
              </div>
              <div className="text-center mt-3">
                <div className="flex items-center justify-center space-x-2 text-yellow-200">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xl font-bold">
                    <AnimatedCounter value={story.improvementPercentage} />%
                  </span>
                  <span className="text-sm">improvement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Challenge */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{story.challenge}</p>
            </div>

            {/* Solution */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{story.solution}</p>
            </div>

            {/* Results */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                {story.results.map((result, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeframe */}
            <div className="mb-4">
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                <span>Achieved in {story.timeframe}</span>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mb-6 flex-1">
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                <Quote className="w-5 h-5 text-blue-500 mb-2" />
                <p className="text-gray-700 text-sm italic mb-3">"{story.testimonial}"</p>
                <p className="text-gray-600 text-sm font-medium">— {story.clientName}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* Video Testimonial */}
              <Button
                variant="outline"
                className="w-full group-hover:border-blue-500 group-hover:text-blue-600 transition-colors"
                onClick={() => onVideoClick(story.videoId)}
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Video Testimonial
              </Button>
              
              {/* Case Study */}
              <Link to={`/case-study/${story.id}`}>
                <Button
                  variant="outline"
                  className="w-full group-hover:border-purple-500 group-hover:text-purple-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Case Study
                </Button>
              </Link>
              
              {/* Request Similar Results */}
              <Link to="/strategy-call-calendly">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Request Similar Results
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeaturedStoryCard;
