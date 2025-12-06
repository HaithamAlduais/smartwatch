import { Car, X } from "lucide-react";
import CircularProgress from "../CircularProgress";

interface DriverMatchingScreenProps {
  onCancel: () => void;
  onMatched: () => void;
  progress: number;
}

const DriverMatchingScreen = ({ onCancel, progress }: DriverMatchingScreenProps) => {
  return (
    <div className="flex flex-col h-full w-full px-4 py-4 gap-4 text-center">
      <div className="watch-card flex-col items-center gap-2 bg-secondary/30">
        <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
          <Car className="w-6 h-6 text-primary" />
        </div>
        <div className="space-y-0.5">
          <p className="text-base font-semibold text-foreground">Ahmed K.</p>
          <p className="text-sm text-muted-foreground">Toyota Camry</p>
          <p className="text-sm font-mono text-primary">ABC 1234</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="watch-eta text-4xl">{Math.max(1, Math.round(5 - (progress / 20)))} </span>
          <span className="text-sm text-muted-foreground">min away</span>
        </div>
      </div>

      <CircularProgress progress={progress} size={170}>
        <div />
      </CircularProgress>

      <button 
        onClick={onCancel}
        className="watch-secondary"
      >
        Cancel Ride
      </button>
    </div>
  );
};

export default DriverMatchingScreen;
