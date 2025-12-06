import { AlertCircle, RefreshCw } from "lucide-react";

interface NoDriversScreenProps {
  onRetry: () => void;
}

// Heuristic 9: Help users recognize, diagnose, recover from errors
// Heuristic 5: Error prevention - Offer alternatives

const NoDriversScreen = ({ onRetry }: NoDriversScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full py-5 animate-scale-in">
      {/* Error icon and message */}
      <div className="flex flex-col items-center gap-2 mt-2">
        <div className="w-14 h-14 rounded-full bg-warning/20 flex items-center justify-center">
          <AlertCircle className="w-7 h-7 text-warning" />
        </div>
        <p className="text-sm font-semibold text-foreground">No Drivers Available</p>
        <p className="text-[10px] text-muted-foreground text-center px-4">
          All drivers are busy right now. Please try again shortly.
        </p>
      </div>

      {/* Helpful suggestions - Heuristic 10: Help */}
      <div className="flex flex-col items-center gap-2 w-full px-4">
        <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Suggestions</p>
        <div className="flex gap-2 w-full justify-center">
          <button 
            onClick={onRetry}
            className="watch-btn-primary flex items-center gap-1.5 px-5 py-2.5 text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="text-sm">Retry</span>
          </button>
        </div>
      </div>

      {/* Auto-retry indicator - Heuristic 1: Visibility */}
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-[9px] text-muted-foreground">Auto-retry in 30s</span>
      </div>
    </div>
  );
};

export default NoDriversScreen;
