import { MapPin, Navigation, Settings, History, Mic, ChevronRight } from "lucide-react";

interface RequestRideScreenProps {
  onRequestRide: () => void;
  onSettings?: () => void;
  onHistory?: () => void;
  onEditDestination?: () => void;
  pickup?: string;
  destination?: string;
}

const RequestRideScreen = ({ 
  onRequestRide, 
  onSettings, 
  onHistory,
  onEditDestination,
  pickup = "King Saud University",
  destination = "CCIS Building"
}: RequestRideScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full py-3 animate-scale-in">
      {/* Header with settings and history */}
      <div className="flex items-center justify-between w-full px-2">
        <button 
          onClick={onSettings}
          className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center transition-all hover:bg-secondary"
          aria-label="Settings"
        >
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
        <div className="flex items-center gap-1.5">
          <div className="location-dot" />
          <span className="text-[10px] text-muted-foreground truncate max-w-[120px] text-left">{pickup}</span>
        </div>
        <button 
          onClick={onHistory}
          className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center transition-all hover:bg-secondary"
          aria-label="Ride History"
        >
          <History className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Main request button */}
      <div className="flex flex-col items-center gap-2">
        <button 
          onClick={onRequestRide}
          className="watch-btn-primary w-28 h-28 rounded-full flex flex-col items-center justify-center gap-1.5"
          aria-label="Request a ride"
        >
          <Navigation className="w-7 h-7" />
          <span className="text-sm font-bold">Request</span>
          <span className="text-sm font-bold -mt-1">Ride</span>
        </button>
        
        {/* Voice command hint - FR14 */}
        <div className="flex items-center gap-1.5 opacity-80">
          <Mic className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">"Hey Google, request a ride"</span>
        </div>
      </div>

      {/* Destination - tap to edit */}
      <div className="w-full px-3 space-y-1.5">
        <button 
          onClick={onEditDestination}
          className="flex items-center gap-2 w-full bg-secondary/30 px-3 py-2 rounded-xl hover:bg-secondary/50 transition-all"
          aria-label="Edit destination"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-[11px] text-foreground/90 flex-1 text-left truncate">{destination}</span>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default RequestRideScreen;
