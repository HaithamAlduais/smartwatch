import { Navigation, Phone } from "lucide-react";
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
      <CircularProgress progress={progress} size={220}>
        <div className="flex flex-col items-center justify-center gap-2 animate-scale-in">
          <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
            <Navigation className="w-6 h-6 text-primary animate-pulse" />
          </div>
          <p className="text-sm font-semibold text-foreground">{driver.name}</p>
          <p className="text-[11px] text-muted-foreground">{driver.carModel}</p>
          <p className="text-[12px] font-mono text-primary">{driver.plateNumber}</p>

          <div className="flex flex-col items-center gap-1 mt-1">
            <span className="watch-eta text-4xl animate-countdown">{eta}</span>
            <span className="text-sm text-muted-foreground">min away</span>
            <span className="text-[11px] text-muted-foreground">{distance}</span>
          </div>
        </div>
      </CircularProgress>

      <div className="mt-4 flex items-center gap-2">
        <button 
          onClick={onContactDriver}
          className="watch-btn-secondary flex items-center gap-2 text-xs px-4 py-2"
        >
          <Phone className="w-4 h-4" />
          Call Driver
        </button>
        <button 
          onClick={onCancel}
          className="text-[11px] text-muted-foreground underline"
        >
          Cancel ride
        </button>
      </div>
    </div>
  );
};

export default TrackingScreen;
