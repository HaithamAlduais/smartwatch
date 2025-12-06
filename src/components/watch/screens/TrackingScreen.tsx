import { Car, X, Phone } from "lucide-react";
import CircularProgress from "../CircularProgress";
import { DriverInfo } from "@/types/driver";

interface TrackingScreenProps {
  eta: number;
  onCancel: () => void;
  onContactDriver?: () => void;
  progress: number;
  driver?: DriverInfo;
}

const TrackingScreen = ({ 
  eta, 
  onCancel, 
  onContactDriver,
  progress,
  driver = { id: "1", name: "Ahmed K.", rating: 4.8, carModel: "Toyota Camry", carColor: "White", plateNumber: "ABC 1234" }
}: TrackingScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <CircularProgress progress={progress} size={200}>
        <div className="flex flex-col items-center gap-2 animate-scale-in">
          {/* Driver info */}
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-1">
            <Car className="w-6 h-6 text-primary" />
          </div>
          
          <div className="space-y-0.5">
            <p className="text-sm font-semibold text-foreground">{driver.name}</p>
            <p className="text-[10px] text-muted-foreground">{driver.carModel}</p>
            <p className="text-xs font-mono text-primary">{driver.plateNumber}</p>
          </div>

          {/* ETA countdown */}
          <div className="mt-2">
            <span className="watch-eta">{eta}</span>
            <span className="text-sm text-muted-foreground ml-1">min</span>
          </div>
        </div>
      </CircularProgress>

      {/* Cancel button + Phone icon */}
      <div className="mt-3 flex items-center gap-2 opacity-0 animate-slide-up stagger-3">
        <button 
          onClick={onCancel}
          className="watch-btn-secondary flex items-center gap-1.5 text-xs"
        >
          <X className="w-3 h-3" />
          Cancel Ride
        </button>
        <button 
          onClick={onContactDriver}
          className="p-2 rounded-full bg-secondary"
          aria-label="Call driver"
        >
          <Phone className="w-4 h-4 text-primary" />
        </button>
      </div>
    </div>
  );
};

export default TrackingScreen;
