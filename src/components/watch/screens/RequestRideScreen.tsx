import { MapPin, Navigation, Settings, History, Mic } from "lucide-react";

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
    <div className="flex flex-col items-center justify-between h-full w-full animate-scale-in">
      {/* Header - Icon chips for settings/history */}
      <div className="flex items-center justify-between w-full">
        <button 
          onClick={onSettings}
          className="wear-icon-chip"
          aria-label="Settings"
        >
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
        
        {/* Current location status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/30">
          <div className="location-dot" />
          <span className="wear-caption truncate max-w-[100px]">{pickup}</span>
        </div>
        
        <button 
          onClick={onHistory}
          className="wear-icon-chip"
          aria-label="Ride History"
        >
          <History className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Main action - Large circular chip */}
      <div className="flex flex-col items-center gap-3">
        <button 
          onClick={onRequestRide}
          className="w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center gap-2 transition-all duration-200 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, hsl(174 100% 37%), hsl(174 80% 28%))',
            boxShadow: '0 6px 24px hsl(174 100% 37% / 0.4)'
          }}
          aria-label="Request a ride"
        >
          <Navigation className="w-8 h-8 text-primary-foreground" />
          <span className="wear-headline text-primary-foreground">Request</span>
        </button>
        
        {/* Voice command hint */}
        <div className="flex items-center gap-2 opacity-70">
          <Mic className="w-4 h-4 text-muted-foreground" />
          <span className="wear-caption">"Hey Google, request ride"</span>
        </div>
      </div>

      {/* Destination chip - Full width, 48dp touch target */}
      <button 
        onClick={onEditDestination}
        className="wear-list-chip"
        aria-label="Edit destination"
      >
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
          <MapPin className="w-4 h-4 text-primary" />
        </div>
        <span className="wear-body flex-1 text-left truncate">{destination}</span>
      </button>
    </div>
  );
};

export default RequestRideScreen;
