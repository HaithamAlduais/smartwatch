import { Phone, PhoneOff, User } from "lucide-react";

interface DriverCallingScreenProps {
  driverName: string;
  onAccept: () => void;
  onDecline: () => void;
}

const DriverCallingScreen = ({ driverName, onAccept, onDecline }: DriverCallingScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full animate-scale-in">
      {/* Incoming call indicator */}
      <div className="absolute top-4 left-0 right-0 flex justify-center">
        <span className="text-[10px] text-muted-foreground animate-pulse">Incoming Call</span>
      </div>

      {/* Driver avatar */}
      <div className="relative mb-4">
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center ring-4 ring-primary/30 animate-pulse">
          <User className="w-10 h-10 text-muted-foreground" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <Phone className="w-4 h-4 text-primary-foreground" />
        </div>
      </div>

      {/* Driver info */}
      <div className="text-center mb-6">
        <p className="text-sm font-semibold text-foreground">{driverName}</p>
        <p className="text-[10px] text-muted-foreground">Your driver is calling</p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-6">
        {/* Decline */}
        <button 
          onClick={onDecline}
          className="flex flex-col items-center gap-1.5"
          aria-label="Decline call"
        >
          <div className="w-14 h-14 rounded-full bg-destructive flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95">
            <PhoneOff className="w-6 h-6 text-destructive-foreground" />
          </div>
          <span className="text-[10px] text-muted-foreground">Decline</span>
        </button>

        {/* Accept */}
        <button 
          onClick={onAccept}
          className="flex flex-col items-center gap-1.5"
          aria-label="Accept call"
        >
          <div className="w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95">
            <Phone className="w-6 h-6 text-success-foreground" />
          </div>
          <span className="text-[10px] text-muted-foreground">Accept</span>
        </button>
      </div>

      {/* Hint */}
      <p className="absolute bottom-4 text-[9px] text-muted-foreground">
        Answer on your phone
      </p>
    </div>
  );
};

export default DriverCallingScreen;

