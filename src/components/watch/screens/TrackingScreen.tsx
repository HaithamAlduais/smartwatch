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
    <div className="flex flex-col items-center justify-center h-full text-center">
      {/* Header */}
      <p className="text-xs text-muted-foreground mb-2 opacity-0 animate-fade-in-up">
        Driver on the way
      </p>

      <CircularProgress progress={progress} size={160}>
        <div className="flex flex-col items-center gap-1 animate-scale-in">
          {/* Direction indicator */}
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center mb-1">
            <Navigation className="w-4 h-4 text-primary animate-pulse" />
          </div>
          
          {/* ETA countdown */}
          <div className="animate-countdown">
            <span className="watch-eta text-3xl">{eta}</span>
            <span className="text-xs text-muted-foreground ml-1">min</span>
          </div>

          {/* Distance */}
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">{distance}</span>
          </div>
        </div>
      </CircularProgress>

      {/* Driver info strip with contact button */}
      <div className="mt-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 opacity-0 animate-slide-up stagger-2">
        {/* Driver photo placeholder */}
        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
          <User className="w-3 h-3 text-muted-foreground" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[10px] font-medium">{driver.name}</span>
          <span className="text-[8px] text-primary font-mono">{driver.plateNumber}</span>
        </div>
        {/* Contact driver button - FR13 */}
        <button 
          onClick={onContactDriver}
          className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center ml-1 hover:bg-primary/30 transition-colors"
          aria-label="Contact driver"
        >
          <Phone className="w-3.5 h-3.5 text-primary" />
        </button>
      </div>

      {/* Cancel link */}
      <button 
        onClick={onCancel}
        className="text-[10px] text-muted-foreground mt-2 underline opacity-0 animate-fade-in-up stagger-3"
      >
        Cancel ride
      </button>
    </div>
  );
};

export default TrackingScreen;
