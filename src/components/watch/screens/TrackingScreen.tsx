import { Navigation, MapPin, Phone, User } from "lucide-react";
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
    <div className="flex flex-col h-full w-full px-4 py-4 gap-3 text-center">
      <div className="watch-card flex-col items-center gap-2 bg-secondary/30">
        <div className="w-11 h-11 rounded-2xl bg-primary/15 flex items-center justify-center">
          <Navigation className="w-5 h-5 text-primary animate-pulse" />
        </div>
        <p className="text-sm text-muted-foreground">Driver on the way</p>
        <div className="flex items-baseline gap-1 animate-countdown">
          <span className="watch-eta text-4xl">{eta}</span>
          <span className="text-sm text-muted-foreground">min</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{distance}</span>
        </div>
      </div>

      <div className="watch-card items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <User className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="flex flex-col items-start flex-1 min-w-0">
          <span className="text-sm font-medium">{driver.name}</span>
          <span className="text-[11px] text-primary font-mono">{driver.plateNumber}</span>
        </div>
        <button 
          onClick={onContactDriver}
          className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
          aria-label="Contact driver"
        >
          <Phone className="w-4 h-4 text-primary" />
        </button>
      </div>

      <button onClick={onCancel} className="watch-secondary">Cancel Ride</button>
    </div>
  );
};

export default TrackingScreen;
