import { Car, X } from "lucide-react";
import CircularProgress from "../CircularProgress";

interface DriverMatchingScreenProps {
  onCancel: () => void;
  onMatched: () => void;
  progress: number;
}

const DriverMatchingScreen = ({ onCancel, progress }: DriverMatchingScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full animate-scale-in">
      {/* Status title */}
      <p className="wear-label">Finding your driver...</p>

      {/* Progress ring with driver info */}
      <CircularProgress progress={progress} size={180}>
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
            <Car className="w-7 h-7 text-primary" />
          </div>
          
          <div className="text-center">
            <p className="wear-body font-semibold">Ahmed K.</p>
            <p className="wear-caption">Toyota Camry</p>
            <p className="wear-label text-primary font-mono mt-1">ABC 1234</p>
          </div>

          <div className="flex items-baseline gap-1 mt-1">
            <span className="wear-eta-small">5</span>
            <span className="wear-label">min</span>
          </div>
        </div>
      </CircularProgress>

      {/* Cancel chip - Full width, 48dp */}
      <button 
        onClick={onCancel}
        className="wear-chip-secondary opacity-0 animate-slide-up stagger-3"
      >
        <X className="w-4 h-4" />
        Cancel
      </button>
    </div>
  );
};

export default DriverMatchingScreen;
