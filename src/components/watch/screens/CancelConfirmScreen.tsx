import { AlertTriangle } from "lucide-react";

interface CancelConfirmScreenProps {
  onConfirm: () => void;
  onBack: () => void;
}

const CancelConfirmScreen = ({ onConfirm, onBack }: CancelConfirmScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      {/* Warning icon */}
      <div className="w-14 h-14 rounded-full bg-destructive/20 flex items-center justify-center mb-3 animate-scale-in">
        <AlertTriangle className="w-7 h-7 text-destructive" />
      </div>

      {/* Title */}
      <h2 className="watch-title mb-2 opacity-0 animate-fade-in-up stagger-1">
        Cancel Ride?
      </h2>

      {/* Warning text */}
      <p className="text-[10px] text-muted-foreground max-w-[160px] mb-5 opacity-0 animate-fade-in-up stagger-2">
        Your driver may be on the way.
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-2 w-full max-w-[140px]">
        <button 
          onClick={onConfirm}
          className="watch-btn-danger w-full opacity-0 animate-slide-up stagger-3"
        >
          Yes, Cancel
        </button>
        <button 
          onClick={onBack}
          className="watch-btn-secondary w-full opacity-0 animate-slide-up stagger-4"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CancelConfirmScreen;
