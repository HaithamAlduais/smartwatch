import { Phone, Shield, ChevronLeft, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

interface SOSScreenProps {
  onBack: () => void;
  onEmergencyCall: () => void;
}

// Heuristic 5: Error prevention - Countdown before action
// Heuristic 9: Help recognize and recover
// Heuristic 3: User control - Cancel option

const SOSScreen = ({ onBack, onEmergencyCall }: SOSScreenProps) => {
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      onEmergencyCall();
    }
  }, [countdown, onEmergencyCall]);

  const handleSOS = () => {
    setCountdown(3);
  };

  const handleCancel = () => {
    setCountdown(null);
  };

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
        <span className="text-sm font-semibold text-foreground flex-1 text-center pr-8">Emergency</span>
      </div>

      {countdown !== null ? (
        // Countdown mode
        <div className="flex flex-col items-center justify-center flex-1 gap-3">
          <div className="text-4xl font-bold text-destructive animate-countdown">
            {countdown}
          </div>
          <p className="text-xs text-muted-foreground">Calling emergency...</p>
          <button 
            onClick={handleCancel}
            className="watch-btn-secondary text-xs mt-2"
          >
            Cancel
          </button>
        </div>
      ) : (
        // Normal mode
        <div className="flex flex-col items-center justify-between flex-1 py-2">
          {/* Warning */}
          <div className="flex items-center gap-1.5 bg-warning/20 px-3 py-1.5 rounded-full">
            <AlertTriangle className="w-3 h-3 text-warning" />
            <span className="text-[10px] text-warning">For emergencies only</span>
          </div>

          {/* SOS Button */}
          <button 
            onClick={handleSOS}
            className="w-24 h-24 rounded-full bg-destructive flex flex-col items-center justify-center gap-1 shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <Phone className="w-6 h-6 text-destructive-foreground" />
            <span className="text-sm font-bold text-destructive-foreground">SOS</span>
          </button>

          {/* Additional options */}
          <div className="flex gap-3">
            <button className="flex flex-col items-center gap-1 p-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Shield className="w-5 h-5 text-success" />
              </div>
              <span className="text-[9px] text-muted-foreground">Share Trip</span>
            </button>
            <button className="flex flex-col items-center gap-1 p-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[9px] text-muted-foreground">Call Driver</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SOSScreen;
