import { Star, ThumbsUp, ThumbsDown, MapPin, Clock, CreditCard } from "lucide-react";
import { useState } from "react";
import { TripInfo } from "@/types/driver";

interface RatingScreenProps {
  driverName: string;
  onSubmit: (rating: number) => void;
  onSkip: () => void;
  tripInfo?: TripInfo;
}

// Heuristic 3: User control - Skip option
// Heuristic 5: Error prevention - Clear rating display
// Heuristic 8: Aesthetic and minimalist design

const RatingScreen = ({ 
  driverName, 
  onSubmit, 
  onSkip,
  tripInfo
}: RatingScreenProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const displayRating = hoveredRating || rating;

  return (
    <div className="flex flex-col items-center justify-between h-full w-full py-3 animate-scale-in">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">Rate your ride with</p>
        <p className="text-sm font-semibold text-foreground mt-0.5">{driverName}</p>
      </div>

      {/* Trip summary - if available */}
      {tripInfo && (
        <div className="flex items-center justify-center gap-3 w-full px-4 opacity-0 animate-fade-in-up stagger-1">
          <div className="flex items-center gap-1">
            <CreditCard className="w-3 h-3 text-primary" />
            <span className="text-[10px] text-foreground">{tripInfo.estimatedFare}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">{tripInfo.duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">{tripInfo.distance}</span>
          </div>
        </div>
      )}

      {/* Star rating - Heuristic 2: Match real world */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="p-0.5 transition-transform hover:scale-110"
              aria-label={`Rate ${star} stars`}
            >
              <Star 
                className={`w-6 h-6 transition-colors ${
                  star <= displayRating 
                    ? "text-warning fill-warning" 
                    : "text-muted-foreground/30"
                }`}
              />
            </button>
          ))}
        </div>
        
        {/* Quick feedback buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-success/20 text-success text-[10px] hover:bg-success/30 transition-colors">
            <ThumbsUp className="w-3 h-3" />
            Great
          </button>
          <button className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-destructive/20 text-destructive text-[10px] hover:bg-destructive/30 transition-colors">
            <ThumbsDown className="w-3 h-3" />
            Issue
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button 
          onClick={onSkip}
          className="px-4 py-2 rounded-full text-[10px] text-muted-foreground hover:bg-secondary/50 transition-colors"
        >
          Skip
        </button>
        <button 
          onClick={() => onSubmit(rating)}
          disabled={rating === 0}
          className="watch-btn-primary px-5 py-2 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RatingScreen;
