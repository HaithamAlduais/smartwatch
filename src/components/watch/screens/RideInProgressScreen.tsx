import { Share2, MapPin } from "lucide-react";

interface RideInProgressScreenProps {
  remainingTime: number;
  progress: number;
  destination: string;
  onShare: () => void;
}

const RideInProgressScreen = ({ 
  remainingTime, 
  progress, 
  destination,
  onShare 
}: RideInProgressScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      {/* Header */}
      <p className="text-xs text-primary font-medium mb-3 opacity-0 animate-fade-in-up">
        Ride in Progress
      </p>

      {/* ETA */}
      <div className="mb-4 animate-scale-in">
        <span className="watch-eta">{remainingTime}</span>
        <span className="text-sm text-muted-foreground ml-1">min</span>
        <p className="text-[10px] text-muted-foreground mt-1">to destination</p>
      </div>

      {/* Progress bar */}
      <div className="w-40 h-1.5 bg-secondary rounded-full overflow-hidden mb-4 opacity-0 animate-fade-in-up stagger-2">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Destination */}
      <div className="flex items-center gap-1.5 mb-4 opacity-0 animate-fade-in-up stagger-3">
        <MapPin className="w-3 h-3 text-primary" />
        <span className="text-xs text-muted-foreground">{destination}</span>
      </div>

      {/* Share button */}
      <button 
        onClick={onShare}
        className="watch-btn-primary flex items-center gap-2 text-xs opacity-0 animate-slide-up stagger-4"
      >
        <Share2 className="w-4 h-4" />
        Share Trip
      </button>
    </div>
  );
};

export default RideInProgressScreen;
