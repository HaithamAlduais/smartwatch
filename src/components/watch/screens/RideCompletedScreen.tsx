import { CheckCircle, Star } from "lucide-react";

interface RideCompletedScreenProps {
  onNewRide: () => void;
}

const RideCompletedScreen = ({ onNewRide }: RideCompletedScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      {/* Success icon */}
      <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-3 animate-scale-in">
        <CheckCircle className="w-8 h-8 text-success" />
      </div>

      {/* Title */}
      <h2 className="watch-highlight mb-1 opacity-0 animate-fade-in-up stagger-1">
        Arrived!
      </h2>
      <p className="text-xs text-muted-foreground mb-4 opacity-0 animate-fade-in-up stagger-2">
        You've reached your destination
      </p>

      {/* Rating */}
      <div className="flex gap-1 mb-4 opacity-0 animate-fade-in-up stagger-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            className="w-5 h-5 text-warning fill-warning cursor-pointer hover:scale-110 transition-transform" 
          />
        ))}
      </div>

      {/* New ride button */}
      <button 
        onClick={onNewRide}
        className="watch-btn-primary text-xs opacity-0 animate-slide-up stagger-4"
      >
        New Ride
      </button>
    </div>
  );
};

export default RideCompletedScreen;
