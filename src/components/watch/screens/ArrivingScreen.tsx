import { Car } from "lucide-react";

interface ArrivingScreenProps {
  onContinue: () => void;
}

const ArrivingScreen = ({ onContinue }: ArrivingScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full animate-scale-in">
      {/* Status indicator */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center">
          <Car className="w-10 h-10 text-success" />
        </div>
        <h2 className="wear-status-success">Arriving Now</h2>
      </div>

      {/* Driver card */}
      <div className="wear-card text-center">
        <p className="wear-body font-semibold">Ahmed K.</p>
        <p className="wear-caption mt-1">Toyota Camry • White</p>
        <p className="wear-body text-primary font-mono mt-2">ABC 1234</p>
      </div>

      {/* Hint */}
      <p className="wear-caption text-center">Look for your driver outside</p>

      {/* Start ride chip */}
      <button 
        onClick={onContinue}
        className="wear-chip-primary"
      >
        Start Ride
      </button>
    </div>
  );
};

export default ArrivingScreen;
