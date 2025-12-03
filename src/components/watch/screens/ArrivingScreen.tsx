import { Car } from "lucide-react";

interface ArrivingScreenProps {
  onContinue: () => void;
}

const ArrivingScreen = ({ onContinue }: ArrivingScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      {/* Arriving highlight */}
      <div className="animate-scale-in">
        <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mb-4 mx-auto">
          <Car className="w-10 h-10 text-success" />
        </div>
        
        <h2 className="watch-highlight mb-2">Arriving Now</h2>
      </div>

      {/* Driver details */}
      <div className="space-y-1 opacity-0 animate-fade-in-up stagger-2">
        <p className="text-sm font-semibold text-foreground">Ahmed K.</p>
        <p className="text-xs text-muted-foreground">Toyota Camry • White</p>
        <p className="text-sm font-mono text-primary">ABC 1234</p>
      </div>

      {/* Action hint */}
      <p className="text-[10px] text-muted-foreground mt-4 opacity-0 animate-fade-in-up stagger-3">
        Look for your driver outside
      </p>

      {/* Tap to continue (for demo) */}
      <button 
        onClick={onContinue}
        className="watch-btn-secondary mt-4 text-xs opacity-0 animate-slide-up stagger-4"
      >
        Start Ride
      </button>
    </div>
  );
};

export default ArrivingScreen;
