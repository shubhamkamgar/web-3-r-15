
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  showNumber?: boolean;
  className?: string;
}

const StarRating = ({ 
  rating, 
  maxRating = 5, 
  size = 16, 
  showNumber = false,
  className = ""
}: StarRatingProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex">
        {[...Array(maxRating)].map((_, i) => (
          <Star 
            key={i} 
            size={size} 
            className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
          />
        ))}
      </div>
      {showNumber && (
        <span className="ml-2 text-sm text-gray-600">
          {rating}/{maxRating}
        </span>
      )}
    </div>
  );
};

export default StarRating;
