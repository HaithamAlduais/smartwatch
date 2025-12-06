import { AlertTriangle } from "lucide-react";

interface CancelConfirmScreenProps {
  onConfirm: () => void;
  onBack: () => void;
}

const CancelConfirmScreen = ({ onConfirm, onBack }: CancelConfirmScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full animate-scale-in">
      {/* Warning icon */}
      <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center">
        <AlertTriangle className="w-8 h-8 text-destructive" />
      </div>

      {/* Confirmation text */}
      <div className="text-center">
        <h2 className="wear-title">Cancel Ride?</h2>
        <p className="wear-caption mt-2 max-w-[180px]">
          Your driver may already be on the way
        </p>
      </div>

      {/* Action chips - stacked, full width */}
      <div className="flex flex-col gap-2 w-full">
        <button 
          onClick={onConfirm}
          className="wear-chip-danger"
        >
          Yes, Cancel
        </button>
        <button 
          onClick={onBack}
          className="wear-chip-secondary"
        >
          Keep Ride
        </button>
      </div>
    </div>
  );
};

export default CancelConfirmScreen;
