import { ChevronLeft, MapPin, Clock, Star } from "lucide-react";

interface HistoryScreenProps {
  onBack: () => void;
}

// Heuristic 6: Recognition rather than recall - Shows past rides
// Heuristic 7: Flexibility - Quick re-book option

const HistoryScreen = ({ onBack }: HistoryScreenProps) => {
  const rides = [
    { destination: "Airport", time: "2h ago" },
    { destination: "Mall", time: "Yesterday" },
    { destination: "Home", time: "2 days ago" },
  ];

  return (
    <div className="flex flex-col items-center h-full w-full animate-scale-in">
      {/* Header */}
      <div className="flex items-center w-full px-2 pt-2 pb-3">
        <button 
          onClick={onBack}
          className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <span className="text-sm font-semibold text-foreground flex-1 text-center pr-8">History</span>
      </div>

      {/* Rides list */}
      <div className="flex flex-col gap-2 w-full px-3 overflow-y-auto flex-1">
        {rides.map((ride, index) => (
          <button
            key={index}
            className="flex items-center gap-2 w-full p-2.5 rounded-xl bg-secondary/40 hover:bg-secondary/60 transition-all animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div className="flex flex-col items-start flex-1 min-w-0">
              <span className="text-xs font-medium text-foreground truncate w-full text-left">{ride.destination}</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">{ride.time}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Empty state hint */}
      <div className="pb-3">
        <span className="text-[9px] text-muted-foreground">Tap to rebook</span>
      </div>
    </div>
  );
};

export default HistoryScreen;
