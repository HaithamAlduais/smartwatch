import { ChevronLeft, MapPin, Home, Building2, Clock, Plane, ShoppingBag } from "lucide-react";

interface DestinationScreenProps {
  onBack: () => void;
  onSelectDestination: (destination: string) => void;
}

const DestinationScreen = ({ onBack, onSelectDestination }: DestinationScreenProps) => {
  const savedPlaces = [
    { 
      id: "home", 
      label: "Home", 
      address: "Al Malqa District",
      icon: Home,
      color: "text-success",
      bgColor: "bg-success/20"
    },
    { 
      id: "work", 
      label: "Work", 
      address: "CCIS Building, KSU",
      icon: Building2,
      color: "text-info",
      bgColor: "bg-info/20"
    },
  ];

  const recentPlaces = [
    { id: "airport", label: "Airport", address: "King Khalid International", icon: Plane },
    { id: "mall", label: "Riyadh Park", address: "Northern Ring Road", icon: ShoppingBag },
  ];

  return (
    <div className="flex flex-col items-center h-full w-full animate-scale-in">
      {/* Header */}
      <div className="flex items-center w-full px-2 pt-2 pb-2">
        <button 
          onClick={onBack}
          className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <span className="text-sm font-semibold text-foreground flex-1 text-center pr-8">Where to?</span>
      </div>

      {/* Places list */}
      <div className="flex flex-col gap-1.5 w-full px-3 flex-1 overflow-y-auto">
        {/* Saved */}
        <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-1">Saved</p>
        {savedPlaces.map((place, index) => (
          <button
            key={place.id}
            onClick={() => onSelectDestination(place.address)}
            className="flex items-center gap-2 w-full p-2 rounded-xl bg-secondary/40 hover:bg-secondary/60 transition-all animate-fade-in-up"
            style={{ animationDelay: `${index * 0.05}s` }}
            aria-label={`Go to ${place.label}`}
          >
            <div className={`w-8 h-8 rounded-full ${place.bgColor} flex items-center justify-center shrink-0`}>
              <place.icon className={`w-4 h-4 ${place.color}`} />
            </div>
            <div className="flex flex-col items-start flex-1 min-w-0">
              <span className="text-[11px] font-medium text-foreground">{place.label}</span>
              <span className="text-[9px] text-muted-foreground truncate w-full text-left">{place.address}</span>
            </div>
          </button>
        ))}

        {/* Recent */}
        <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-2 mb-1 flex items-center gap-1">
          <Clock className="w-3 h-3" /> Recent
        </p>
        {recentPlaces.map((place, index) => (
          <button
            key={place.id}
            onClick={() => onSelectDestination(place.address)}
            className="flex items-center gap-2 w-full p-2 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all animate-fade-in-up"
            style={{ animationDelay: `${(index + 2) * 0.05}s` }}
            aria-label={`Go to ${place.label}`}
          >
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
              <place.icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="flex flex-col items-start flex-1 min-w-0">
              <span className="text-[11px] font-medium text-foreground">{place.label}</span>
              <span className="text-[9px] text-muted-foreground truncate w-full text-left">{place.address}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Hint */}
      <div className="pb-3">
        <span className="text-[9px] text-muted-foreground">Edit on phone for more options</span>
      </div>
    </div>
  );
};

export default DestinationScreen;

