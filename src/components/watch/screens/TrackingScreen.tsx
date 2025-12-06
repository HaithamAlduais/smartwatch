import { Navigation, MapPin, Phone, User, X } from "lucide-react";
import CircularProgress from "../CircularProgress";
import { DriverInfo } from "@/types/driver";

interface TrackingScreenProps {
  eta: number;
  distance: string;
  onCancel: () => void;
  onContactDriver?: () => void;
  progress: number;
  driver?: DriverInfo;
}

const TrackingScreen = ({ 
  eta, 
  distance, 
  onCancel, 
  onContactDriver,
  progress,
  driver = { id: "1", name: "Ahmed K.", rating: 4.8, carModel: "Toyota Camry", carColor: "White", plateNumber: "ABC 1234" }
}: TrackingScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full animate-scale-in">
      {/* Status */}
      <p className="wear-label">Driver on the way</p>

      {/* ETA with progress */}
      <CircularProgress progress={progress} size={150}>
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Navigation className="w-5 h-5 text-primary animate-pulse" />
          </div>
          
          <div className="flex items-baseline gap-1 animate-countdown">
            <span className="wear-eta-small">{eta}</span>
            <span className="wear-label">min</span>
          </div>

          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-muted-foreground" />
            <span className="wear-caption">{distance}</span>
          </div>
        </div>
      </CircularProgress>

      {/* Driver info card with contact */}
      <div className="wear-card flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
          <User className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <span className="wear-body font-medium truncate">{driver.name}</span>
          <span className="wear-caption text-primary font-mono">{driver.plateNumber}</span>
        </div>
        <button 
          onClick={onContactDriver}
          className="wear-icon-chip shrink-0"
          aria-label="Call driver"
        >
          <Phone className="w-5 h-5 text-primary" />
        </button>
      </div>

      {/* Cancel link */}
      <button 
        onClick={onCancel}
        className="flex items-center gap-1.5 wear-caption text-muted-foreground"
      >
        <X className="w-3 h-3" />
        Cancel ride
      </button>
    </div>
  );
};

export default TrackingScreen;
