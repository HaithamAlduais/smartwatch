import { Car, X } from "lucide-react";
import CircularProgress from "../CircularProgress";

interface DriverMatchingScreenProps {
  onCancel: () => void;
  onMatched: () => void;
  progress: number;
}

const DriverMatchingScreen = ({ onCancel, progress }: DriverMatchingScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <CircularProgress progress={progress} size={200}>
        <div className="flex flex-col items-center gap-2 animate-scale-in">
          {/* Driver info */}
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-1">
            <Car className="w-6 h-6 text-primary" />
          </div>
          
          <div className="space-y-0.5">
            <p className="text-sm font-semibold text-foreground">Ahmed K.</p>
            <p className="text-[10px] text-muted-foreground">Toyota Camry</p>
            <p className="text-xs font-mono text-primary">ABC 1234</p>
          </div>

          {/* ETA */}
          <div className="mt-2">
            <span className="watch-eta">5</span>
            <span className="text-sm text-muted-foreground ml-1">min</span>
          </div>
        </div>
      </CircularProgress>

      {/* Cancel button */}
      <button 
        onClick={onCancel}
        className="watch-btn-secondary mt-3 flex items-center gap-1.5 text-xs opacity-0 animate-slide-up stagger-3"
      >
        <X className="w-3 h-3" />
        Cancel Ride
      </button>
    </div>
  );
};

export default DriverMatchingScreen;
