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
    <div className="flex flex-col items-center justify-between h-full w-full animate-scale-in">
      {/* Status */}
      <p className="wear-label text-primary font-medium">Ride in Progress</p>

      {/* ETA display */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-baseline gap-1 animate-countdown">
          <span className="wear-eta">{remainingTime}</span>
          <span className="wear-label">min</span>
        </div>
        <p className="wear-caption">to destination</p>
        
        {/* Progress bar */}
        <div className="w-44 h-2 bg-secondary rounded-full overflow-hidden mt-2">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Destination card */}
      <div className="wear-card flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
          <MapPin className="w-4 h-4 text-primary" />
        </div>
        <span className="wear-body flex-1 truncate">{destination}</span>
      </div>

      {/* Share chip */}
      <button 
        onClick={onShare}
        className="wear-chip-secondary"
      >
        <Share2 className="w-4 h-4" />
        Share Trip
      </button>
    </div>
  );
};

export default RideInProgressScreen;
