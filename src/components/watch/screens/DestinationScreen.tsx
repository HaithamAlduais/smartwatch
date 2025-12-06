import { MapPin, Home, Building2, Clock, Plane, ShoppingBag } from "lucide-react";

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
    { id: "airport", label: "Airport", address: "King Khalid Intl", icon: Plane },
    { id: "mall", label: "Riyadh Park", address: "Northern Ring", icon: ShoppingBag },
  ];

  return (
    <div className="flex flex-col h-full w-full animate-scale-in gap-2">
      {/* Title */}
      <div className="text-center">
        <h2 className="wear-title">Where to?</h2>
      </div>

      {/* Places list - Wear OS list chips */}
      <div className="flex flex-col gap-2 flex-1 wear-scroll">
        {/* Saved places */}
        <p className="wear-caption uppercase tracking-wider">Saved</p>
        {savedPlaces.map((place, index) => (
          <button
            key={place.id}
            onClick={() => onSelectDestination(place.address)}
            className="wear-list-chip animate-fade-in-up"
            style={{ animationDelay: `${index * 0.05}s` }}
            aria-label={`Go to ${place.label}`}
          >
            <div className={`w-10 h-10 rounded-full ${place.bgColor} flex items-center justify-center shrink-0`}>
              <place.icon className={`w-5 h-5 ${place.color}`} />
            </div>
            <div className="flex flex-col items-start flex-1 min-w-0">
              <span className="wear-body font-medium">{place.label}</span>
              <span className="wear-caption truncate w-full text-left">{place.address}</span>
            </div>
          </button>
        ))}

        {/* Recent places */}
        <div className="flex items-center gap-1 mt-1">
          <Clock className="w-3 h-3 text-muted-foreground" />
          <p className="wear-caption uppercase tracking-wider">Recent</p>
        </div>
        {recentPlaces.map((place, index) => (
          <button
            key={place.id}
            onClick={() => onSelectDestination(place.address)}
            className="wear-list-chip animate-fade-in-up"
            style={{ animationDelay: `${(index + 2) * 0.05}s` }}
            aria-label={`Go to ${place.label}`}
          >
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
              <place.icon className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex flex-col items-start flex-1 min-w-0">
              <span className="wear-body font-medium">{place.label}</span>
              <span className="wear-caption truncate w-full text-left">{place.address}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Cancel chip */}
      <button onClick={onBack} className="wear-chip-secondary">
        Cancel
      </button>
    </div>
  );
};

export default DestinationScreen;
