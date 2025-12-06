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
    <div className="flex flex-col h-full w-full py-4 px-4 gap-4 animate-scale-in overflow-y-auto">
      {/* Status + controls */}
      <div className="flex items-center justify-between w-full">
        <button 
          onClick={onSettings}
          className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center"
          aria-label="Settings"
        >
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
        <div className="flex items-center gap-2 min-w-0">
          <div className="location-dot" />
          <span className="text-sm text-foreground truncate max-w-[150px]">{pickup}</span>
        </div>
        <button 
          onClick={onHistory}
          className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center"
          aria-label="Ride History"
        >
          <History className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Primary action */}
      <div className="watch-card flex-col items-center gap-3 bg-secondary/30">
        <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center">
          <Navigation className="w-7 h-7 text-primary" />
        </div>
        <button 
          onClick={onRequestRide}
          className="watch-primary"
          aria-label="Request a ride"
        >
          Request Ride
        </button>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Mic className="w-4 h-4" />
          <span className="text-xs">“Hey Google, request a ride”</span>
        </div>
      </div>

      {/* Destination */}
      <div className="watch-card">
        <div className="flex items-center gap-2 min-w-0">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground truncate">{destination}</span>
        </div>
        <button 
          onClick={onEditDestination}
          aria-label="Edit destination"
          className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center"
        >
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default RequestRideScreen;
