
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import StarRating from './StarRating';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  truncateLength?: number;
}

const TestimonialCard = ({ testimonial, truncateLength = 150 }: TestimonialCardProps) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <Card className="h-full bg-white shadow-lg border-0 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <CardContent className="p-4 sm:p-6 h-full flex flex-col">
        {/* Client Info */}
        <div className="flex items-center mb-3 sm:mb-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">{testimonial.name}</h3>
            <p className="text-blue-600 font-medium text-xs sm:text-sm">{testimonial.company}</p>
            <p className="text-gray-500 text-xs sm:text-sm">{testimonial.position}</p>
            <StarRating rating={testimonial.rating} className="mt-1" />
          </div>
        </div>
        
        {/* Industry Badge */}
        <Badge variant="outline" className="mb-3 w-fit text-xs">
          {testimonial.industry}
        </Badge>
        
        {/* Testimonial Text */}
        <div className="flex-1 mb-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            {truncateText(testimonial.testimonialText, truncateLength)}
            {testimonial.testimonialText.length > truncateLength && (
              <span className="text-blue-600 font-medium cursor-pointer"> Read More</span>
            )}
          </p>
        </div>
        
        {/* Results Badge */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-3 mb-4">
          <p className="text-green-700 font-bold text-sm text-center">
            {testimonial.resultSummary}
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-2">
          <Link to={`/testimonials/${testimonial.id}`}>
            <Button variant="outline" className="w-full text-sm group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
              View Full Case Study
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link to="/strategy-call">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm">
              Get Similar Results
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
