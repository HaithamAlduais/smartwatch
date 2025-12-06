import { AlertTriangle } from "lucide-react";

interface CancelConfirmScreenProps {
  onConfirm: () => void;
  onBack: () => void;
}

const CancelConfirmScreen = ({ onConfirm, onBack }: CancelConfirmScreenProps) => {
  return (
    <div className="flex flex-col h-full w-full px-4 py-4 gap-4 text-center">
      <div className="watch-card flex-col items-center gap-2 bg-destructive/10">
        <div className="w-12 h-12 rounded-2xl bg-destructive/20 flex items-center justify-center animate-scale-in">
          <AlertTriangle className="w-7 h-7 text-destructive" />
        </div>
        <h2 className="text-lg font-bold text-foreground">Cancel Ride?</h2>
        <p className="text-sm text-muted-foreground">Your driver may be on the way.</p>
      </div>

      <button 
        onClick={onConfirm}
        className="watch-primary bg-destructive text-destructive-foreground"
      >
        Yes, Cancel
      </button>
      <button 
        onClick={onBack}
        className="watch-secondary"
      >
        Keep Ride
      </button>
    </div>
  );
};

export default CancelConfirmScreen;
