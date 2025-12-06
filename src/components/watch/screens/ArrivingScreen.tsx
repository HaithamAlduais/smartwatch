import { Car } from "lucide-react";

interface ArrivingScreenProps {
  onContinue: () => void;
}

const ArrivingScreen = ({ onContinue }: ArrivingScreenProps) => {
  return (
    <div className="flex flex-col h-full w-full px-4 py-4 gap-4 text-center">
      <div className="watch-card flex-col items-center gap-3 bg-secondary/30">
        <div className="w-16 h-16 rounded-2xl bg-success/15 flex items-center justify-center">
          <Car className="w-9 h-9 text-success" />
        </div>
        <h2 className="watch-highlight mb-0">Arriving Soon</h2>
        <div className="space-y-0.5">
          <p className="text-base font-semibold text-foreground">Ahmed K.</p>
          <p className="text-sm text-muted-foreground">Toyota Camry • White</p>
          <p className="text-sm font-mono text-primary">ABC 1234</p>
        </div>
        <p className="text-xs text-muted-foreground">Look for your driver outside</p>
      </div>

      <button 
        onClick={onContinue}
        className="watch-primary"
      >
        Start Ride
      </button>
    </div>
  );
};

export default ArrivingScreen;
