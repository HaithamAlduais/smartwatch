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
    <div className="flex flex-col h-full w-full px-4 py-4 gap-4 text-center">
      <div className="watch-card flex-col items-center gap-2 bg-secondary/30">
        <p className="text-xs text-primary font-medium">Ride in Progress</p>
        <div className="flex items-baseline gap-1 animate-countdown">
          <span className="watch-eta text-4xl">{remainingTime}</span>
          <span className="text-sm text-muted-foreground">min</span>
        </div>
        <p className="text-xs text-muted-foreground">to destination</p>
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{destination}</span>
        </div>
      </div>

      <button 
        onClick={onShare}
        className="watch-secondary"
      >
        <Share2 className="w-4 h-4" />
        Share Trip
      </button>
    </div>
  );
};

export default RideInProgressScreen;
